import { Button, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { InboxScreenProps } from '../navigators/types';

const Inbox = ({ navigation }: InboxScreenProps) => {

    const handleButtonPress = () => {
        navigation.canGoBack() ? navigation.goBack() : navigation.navigate('BottomBar', { screen: 'Main'})
    }

    return(
        <SafeAreaView>
            <Text>This is the inbox</Text>
            <Button title="Go back" onPress={handleButtonPress} />
        </SafeAreaView>
    );
}
export default Inbox;
