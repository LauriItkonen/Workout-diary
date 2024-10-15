import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import useWorkoutStore from '../store/useWorkoutStore';
import { globalStyles, colors } from '../styles';

export default function AddExerciseScreen() {
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const unit = useWorkoutStore((state) => state.unit); // Get the selected unit

  const addWorkout = useWorkoutStore((state) => state.addWorkout);

  const handleAddWorkout = () => {
    if (isNaN(distance) || isNaN(duration) || distance < 0 || duration < 0) {
      Alert.alert('Invalid input', 'Distance and duration must be positive numbers.');
      return;
    }
    addWorkout({ sportType, distance: parseFloat(distance), duration: parseFloat(duration), date });
    Alert.alert('Success', 'Workout added successfully!');
    // Reset fields after adding the workout
    setSportType('');
    setDistance('');
    setDuration('');
    setDate(new Date());
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Add Workout</Text>
      <Text style={{ color: colors.textSecondary }}>Sport Type</Text>
      <TextInput 
        placeholder="Enter sport type" 
        value={sportType} 
        onChangeText={setSportType} 
        style={globalStyles.input} 
      />
      <Text style={{ color: colors.textSecondary }}>Distance ({unit})</Text>
      <TextInput 
        placeholder={`Enter distance in ${unit}`} 
        value={distance} 
        keyboardType="numeric" 
        onChangeText={setDistance} 
        style={globalStyles.input} 
      />
      <Text style={{ color: colors.textSecondary }}>Duration (min)</Text>
      <TextInput 
        placeholder="Enter duration" 
        value={duration} 
        keyboardType="numeric" 
        onChangeText={setDuration} 
        style={globalStyles.input} 
      />
      <Pressable onPress={() => setShowDatePicker(true)} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Select Date</Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShowDatePicker(false);
            setDate(currentDate);
          }}
        />
      )}
      <Pressable onPress={handleAddWorkout} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Add Workout</Text>
      </Pressable>
    </View>
  );
}
