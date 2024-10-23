import { createContext, useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  setPersistence,
  browserSessionPersistence,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/intex";

interface AuthContextType {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Set Firebase persistence to session only
      await setPersistence(auth, browserSessionPersistence);

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Firestore: Check if user exists, and if not, add them
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        await setDoc(userRef, {
          id: user.uid,
          email: user.email,
          username: user.displayName || "Anonymous",
        });
      }

      setUser(user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null); // Clear the user state on logout
  };

  const value = {
    user,
    loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
