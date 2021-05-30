import React, { useState } from "react";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';

export default function LoginScreen({ navigation }: any) {
    const [username, onChangeText] = useState('');
    const onPressSubmit = () => {
        navigation.navigate('Dashboard', { username });
    }

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <TextInput
                            placeholder="Username"
                            onChangeText={(text) => onChangeText(text)}
                            value={username}
                            style={styles.loginFormTextInput}
                        />
                        <Button
                            buttonStyle={styles.loginButton}
                            onPress={onPressSubmit}
                            title="Влез"
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}