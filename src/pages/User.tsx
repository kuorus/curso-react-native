import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const User = ({ route }) => {
  const navigation = useNavigation();
  const handleButtonPress = () => navigation.navigate('Main');
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Bienvenido, {route.params?.user || 'Usaruario'}</Text>
        <Button title="Go to main page" onPress={handleButtonPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;
