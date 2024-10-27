import { Workout } from "./AllWorkouts";

interface Props {
  workout: Workout;
}

export const WorkoutItem = ({ workout }: Props) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{ margin: "0" }}>{workout.exerciseType}</p>
      <p style={{ margin: "0" }}>Duration: {workout.duration}</p>
      <p style={{ margin: "0" }}>Intensity: {workout.intensity}</p>
    </div>
  );
};
