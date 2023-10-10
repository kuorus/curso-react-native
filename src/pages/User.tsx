import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useName from '../hooks/useName';
import { UserScreenProps } from '../navigators/types';

const User = ({ navigation }: UserScreenProps) => {
  const handleButtonPress = () => navigation.navigate('Main');
  const handleButtonPressInbox = () => navigation.navigate('Inbox');

  const [name, setName] = useState<string>('');
  const { getAsyncName } = useName();

  useFocusEffect(() => {
    (async () => {
      const asyncName = await getAsyncName();
      asyncName && setName(asyncName);
    })();
  });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Bienvenido, {name || 'Usuario'}</Text>
        <Button title="Go to main page" onPress={handleButtonPress} />
        <Button title="Go to inbox page" onPress={handleButtonPressInbox} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;
