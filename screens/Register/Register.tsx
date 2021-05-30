import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import { styles as logoStyles } from '../Dashborad';

export default function Register({ navigation }: any) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onGoToLoginButtonPress = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>rhyME</Text>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_332601.png' }} />
                <TextInput style={styles.inputs}
                    placeholder="Full name"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(fullName) => setFullName(fullName)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'http://simpleicon.com/wp-content/uploads/mail-5.png' }} />
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/open+password+icon-1320183290851596683.png' }} />
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => setPassword(password)} />
            </View>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/open+password+icon-1320183290851596683.png' }} />
                <TextInput style={styles.inputs}
                    placeholder="Repeat Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(repeatPassword) => setRepeatPassword(repeatPassword)} />
            </View>

            <TouchableHighlight style={styles.linkToLogin}>
                <Text onPress={onGoToLoginButtonPress} style={styles.signUpText}>Влез в профила си</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => ''}>
                <Text style={styles.signUpText}>Регистрирай се</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    linkToLogin: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: "50%",
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
    },
    logo: {
        ...logoStyles.headerText,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        color: "#fff"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFF',
        borderRadius: 30,
        borderBottomWidth: 2,
        width: "80%",
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: "80%",
        borderRadius: 30,
    },
    signupButton: {
        marginTop: 20,
        backgroundColor: "#fff",
    },
    signUpText: {
        color: '#000',
    }
});
