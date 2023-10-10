import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Main = () => {
  const navigation = useNavigation();
  const handleButtonPress = () =>
    navigation.navigate('User', { user: 'Henry' });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>AIdo, tu asistente virtual de bodas</Text>
        <Button title="Go to user page" onPress={handleButtonPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
