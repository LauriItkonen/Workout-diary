import { create } from 'zustand';

const useWorkoutStore = create((set) => ({
  workouts: [],
  unit: 'km', // Default unit
  addWorkout: (workout) =>
    set((state) => ({
      workouts: [...state.workouts, workout],
    })),
  deleteWorkout: (index) => 
    set((state) => ({
      workouts: state.workouts.filter((_, i) => i !== index),
    })),
  resetWorkouts: () => set({ workouts: [] }),
  setUnit: (newUnit) => set({ unit: newUnit }), // Function to set the unit
}));

export default useWorkoutStore;
