import { Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/Colors';
function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState('');

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
  return (
    <ScrollView style={styles.form}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={enteredTitle}
        onChangeText={changeTitleHandler}
      />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary700,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
    backgroundColor: Colors.primary100,
  },
});
