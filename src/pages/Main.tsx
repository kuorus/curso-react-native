import React, { useRef, useState } from 'react';
import { ScrollView, Text, Button, TextInput } from 'react-native';
import useName from '../hooks/useName';
import { MainScreenNavigationProp } from '../navigators/types';

const Main = ({ navigation }: MainScreenNavigationProp) => {
  const [name, setName] = useState<string>('');
  const textInputRef = useRef<TextInput>(null);

  const { setAsyncName } = useName();

  const style = {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#bbaaff',
    borderWidth: 1,
  };

  const handleButtonPress = async () => {
    try {
      await setAsyncName(name);
      navigation.navigate('User');
      textInputRef.current?.clear();
      setName('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>AIdo, tu asistente virtual de bodas</Text>
      <Text>¿Cómo te llamas?</Text>
      <TextInput
        ref={textInputRef}
        placeholder="Introduce tu nombre"
        style={style}
        onChangeText={setName}
      />
      <Button title="Go to user page" onPress={handleButtonPress} />
    </ScrollView>
  );
};

export default Main;
