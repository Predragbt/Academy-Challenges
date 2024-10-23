import {
  Button,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { workoutTypes } from "../db/wokroutTypes.json";

export const AddNewWorkout = () => {
  const [selectedExerciseType, setSelectedExerciseType] = useState("");
  const [intensity, setIntensity] = useState("low");
  const [duration, setDuration] = useState("");

  const handleExerciseChange = (event: SelectChangeEvent<string>) => {
    setSelectedExerciseType(event.target.value as string);
  };

  const handleIntensityChange = (event: SelectChangeEvent<string>) => {
    setIntensity(event.target.value as string);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setSelectedExerciseType("");
    setDuration("");
    setIntensity("low");
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
        <Select
          value={selectedExerciseType}
          onChange={handleExerciseChange}
          displayEmpty
          fullWidth
          sx={{ mb: 2 }}
        >
          <MenuItem value="" disabled>
            Exercise Type
          </MenuItem>

          {workoutTypes.map((workoutType) => (
            <MenuItem key={workoutType.id} value={workoutType.name}>
              {workoutType.name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          type="number"
          label="Duration (minutes)"
          variant="outlined"
          fullWidth
          value={duration}
          onChange={handleDurationChange}
          sx={{ mb: 2 }}
        />

        {/* Intensity Select with initial value 'low' */}
        <Select value={intensity} onChange={handleIntensityChange} fullWidth>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>

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
