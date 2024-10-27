import { createContext, useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  setPersistence,
  browserLocalPersistence, // Use local storage for session persistence
  onAuthStateChanged,
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
  if (!context) throw new Error("useAuth must be used within an AuthProvider.");
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the user if authenticated
      } else {
        setUser(null); // Clear the user if not authenticated
      }
    });

    return unsubscribe; // Clean up the listener on unmount
  }, [auth]);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await setPersistence(auth, browserLocalPersistence); // Set persistence to local storage
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        const createdAt = new Date().toISOString().split(".")[0] + "Z";
        const formatUsername = (displayName: string): string => {
          return displayName
            .replace(/([a-z])([A-Z])/g, "$1_$2")
            .replace(/\s+/g, "_")
            .toLowerCase();
        };

        const username = user.displayName
          ? formatUsername(user.displayName)
          : "anonymous";

        await setDoc(userRef, {
          id: user.uid,
          email: user.email,
          username,
          password: "hashed_password_here",
          createdAt,
        });
      }

      setUser(user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null);
  };

  const value = {
    user,
    loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
