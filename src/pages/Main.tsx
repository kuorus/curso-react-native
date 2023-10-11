import React, {useRef, useState} from 'react';
import {ScrollView, Text, Button, TextInput, View, SafeAreaView} from 'react-native';
import useName from '../hooks/useName';
import {MainScreenNavigationProp} from '../navigators/types';

const Main = ({navigation}: MainScreenNavigationProp) => {
    const [name, setName] = useState<string>('');
    const textInputRef = useRef<TextInput>(null);

    const {setAsyncName} = useName();

    const style = {
        textinput: {
            backgroundColor: 'white',
            padding: 10,
            marginHorizontal: 20,
            marginVertical: 10,
            borderColor: '#8986ab',
            borderWidth: 1,
        },
        button: {
            margin: 20,
        }
    };

    const handleButtonPress = async () => {
        try {
            await setAsyncName(name);
        } catch (e) {
            console.error(e);
        }
        navigation.navigate('User');
        textInputRef.current?.clear();
        setName('');
    };

    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text>AIdo, tu asistente virtual de bodas</Text>
                <Text>¿Cómo te llamas?</Text>
                <TextInput
                    ref={textInputRef}
                    placeholder="Introduce tu nombre"
                    style={style.textinput}
                    onChangeText={setName}
                />
                <View style={style.button}>
                    <Button color={'green'} title="Save name and go to User Page" onPress={handleButtonPress} disabled={!name.length}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Main;
