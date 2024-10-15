import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import useWorkoutStore from '../store/useWorkoutStore';
import { globalStyles, colors } from '../styles';

export default function SettingsScreen() {
  const unit = useWorkoutStore((state) => state.unit); // Get the unit from the store
  const setWorkoutUnit = useWorkoutStore((state) => state.setUnit); // Get the setUnit function from the store

  const handleUnitChange = (newUnit) => {
    setWorkoutUnit(newUnit); // Update Zustand store
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Settings</Text>
      <Text style={{ color: colors.textSecondary, marginBottom: 10 }}>Select Distance Unit:</Text>
      <Pressable 
        style={[
          styles.unitOption, 
          unit === 'km' ? styles.selectedOption : {}
        ]} 
        onPress={() => handleUnitChange('km')}
      >
        <Text style={[
          styles.unitText, 
          unit === 'km' ? styles.selectedText : {}
        ]}>Kilometers (km)</Text>
      </Pressable>
      <Pressable 
        style={[
          styles.unitOption, 
          unit === 'miles' ? styles.selectedOption : {}
        ]} 
        onPress={() => handleUnitChange('miles')}
      >
        <Text style={[
          styles.unitText, 
          unit === 'miles' ? styles.selectedText : {}
        ]}>Miles</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  unitOption: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedOption: {
    borderColor: colors.secondary, // Change border color for selected option
  },
  unitText: {
    color: colors.primary,
  },
  selectedText: {
    fontWeight: 'bold', // Bold text for selected option
    color: colors.secondary, // Change text color for selected option
  },
});
