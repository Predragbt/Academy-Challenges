import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/intex"; // Firestore instance
import { useAuth } from "../context/AuthContext"; // Auth context for getting the logged-in user

interface Workout {
  id: string;
  exerciseType: string;
  duration: number;
  intensity: string;
  date: string;
}

export const AllWorkouts = () => {
  const { user } = useAuth(); // Get the current logged-in user
  const [workouts, setWorkouts] = useState<Workout[]>([]); // State to store workouts
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (!user) return; // Ensure the user is logged in

      try {
        const workoutsRef = collection(db, `users/${user.uid}/workouts`); // Reference to user's workouts
        const workoutSnapshot = await getDocs(workoutsRef); // Fetch workouts

        const fetchedWorkouts = workoutSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Workout[];

        setWorkouts(fetchedWorkouts); // Set the fetched workouts in state
      } catch (error) {
        console.error("Error fetching workouts: ", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchWorkouts();
  }, [user]);

  if (loading) {
    return <div>Loading workouts...</div>;
  }

  return (
    <div>
      {workouts.length === 0 ? (
        <p>No workouts found.</p>
      ) : (
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          {workouts.map((workout) => (
            <div key={workout.id} style={{ marginBottom: "20px" }}>
              <p style={{ margin: "0" }}>{workout.exerciseType}</p>
              <p style={{ margin: "0" }}>Duration: {workout.duration}</p>
              <p style={{ margin: "0" }}>Intensity: {workout.intensity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
