import { Button, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { InboxScreenProps } from '../navigators/types';

const Inbox = ({ navigation }: InboxScreenProps) => (
  <SafeAreaView>
    <Text>This is the inbox</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </SafeAreaView>
);
export default Inbox;
