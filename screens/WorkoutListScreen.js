import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import useWorkoutStore from '../store/useWorkoutStore';
import { globalStyles, colors } from '../styles';

export default function WorkoutListScreen() {
  const workouts = useWorkoutStore((state) => state.workouts); // Get workouts from store
  const deleteWorkout = useWorkoutStore((state) => state.deleteWorkout); // Get the delete function from the store
  const unit = useWorkoutStore((state) => state.unit); // Get the selected unit

  const renderWorkoutItem = ({ item, index }) => {
    // Convert distance to miles if the unit is 'miles'
    const convertedDistance = unit === 'miles' ? (item.distance * 0.621371).toFixed(2) : item.distance;
    const unitLabel = unit === 'miles' ? 'Miles' : 'Km';

    return (
      <View style={styles.workoutItem}>
        <Text style={globalStyles.text}>Sport: {item.sportType}</Text>
        <Text style={globalStyles.text}>Distance: {convertedDistance} {unitLabel}</Text>
        <Text style={globalStyles.text}>Duration: {item.duration} Min</Text>
        <Text style={globalStyles.text}>Date: {new Date(item.date).toLocaleDateString()}</Text>
        <Pressable onPress={() => deleteWorkout(index)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Workout History</Text>
      {workouts.length > 0 ? (
        <FlatList
          data={workouts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderWorkoutItem}
        />
      ) : (
        <Text style={styles.noWorkoutsText}>No workouts added yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  workoutItem: {
    backgroundColor: colors.cardBackground,
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  deleteButtonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  noWorkoutsText: {
    color: colors.textSecondary,
    marginTop: 20,
    textAlign: 'center',
  },
});
