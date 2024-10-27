import {
  Button,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { workoutTypes } from "../db/wokroutTypes.json";
import { useAuth } from "../context/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/intex";
import { useNavigate } from "react-router-dom";

export const AddNewWorkout = () => {
  const [selectedExerciseType, setSelectedExerciseType] = useState("");
  const [intensity, setIntensity] = useState("Low");
  const [duration, setDuration] = useState(0);

  const navigate = useNavigate();

  const { user } = useAuth();

  const handleExerciseChange = (event: SelectChangeEvent<string>) => {
    setSelectedExerciseType(event.target.value as string);
  };

  const handleIntensityChange = (event: SelectChangeEvent<string>) => {
    setIntensity(event.target.value as string);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(event.target.value, 10));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!user) {
      alert("You must be logged in to add a new workout");
      return;
    }

    try {
      const workoutRef = collection(db, `users/${user.uid}/workouts`);
      const date = new Date().toISOString().split(".")[0] + "Z";

      await addDoc(workoutRef, {
        id: new Date().getTime().toString(),
        userId: user.uid,
        exerciseType: selectedExerciseType,
        duration: duration,
        intensity,
        date,
      });

      // Reset form
      setSelectedExerciseType("");
      setDuration(0);
      setIntensity("Low");
      navigate("/all-workouts");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        height: "85vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        {/* Exercise Type Select */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Exercise Type*</InputLabel>
          <Select
            value={selectedExerciseType}
            onChange={handleExerciseChange}
            displayEmpty
          >
            {workoutTypes.map((workoutType) => (
              <MenuItem key={workoutType.id} value={workoutType.name}>
                {workoutType.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          type="number"
          label="Duration"
          variant="outlined"
          fullWidth
          value={duration}
          onChange={handleDurationChange}
          sx={{ mb: 2 }}
        />

        {/* Intensity Select */}
        <FormControl fullWidth>
          <InputLabel>Intensity</InputLabel>
          <Select
            value={intensity}
            onChange={handleIntensityChange}
            label="Intensity"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Add Workout
        </Button>
      </form>
    </Container>
  );
};
