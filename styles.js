
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#4A90E2', // Blue shade
  secondary: '#50E3C2', // Teal shade
  background: '#F5F5F5', // Light gray background
  textPrimary: '#333333', // Dark text
  textSecondary: '#666666', // Gray text
};

export const fonts = {
  regular: 'System',
  bold: 'System-Bold',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
