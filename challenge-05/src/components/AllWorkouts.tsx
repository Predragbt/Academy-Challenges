import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/intex";
import { useAuth } from "../context/AuthContext";
import { WorkoutItem } from "./WorkoutItem";

export interface Workout {
  id: string;
  exerciseType: string;
  duration: number;
  intensity: string;
  date: string;
}

export const AllWorkouts = () => {
  const { user, authLoading } = useAuth();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (!user) return;

      setLoading(true);
      try {
        const workoutsRef = collection(db, `users/${user.uid}/workouts`);
        const workoutSnapshot = await getDocs(workoutsRef);

        const fetchedWorkouts = workoutSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Workout[];

        setWorkouts(fetchedWorkouts);
      } catch (error) {
        console.error("Error fetching workouts: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) {
      fetchWorkouts();
    }
  }, [user, authLoading]);

  if (authLoading) {
    return <div>Loading workouts...</div>;
  }

  if (!user) {
    return <div>Please log in to view your workouts.</div>;
  }

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
            <WorkoutItem key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </div>
  );
};
