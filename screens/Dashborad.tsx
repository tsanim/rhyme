import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native';
import SearchInput from '../components/SearchInput/SearchInput';
import WordsList from '../components/WordsList/WordsList';
import Word from '../models/Word/Word';
import config from '../config/config';
import Footer from '../components/Footer/Footer';
import generalStyles from '../styles';

export default function Dashboard(props: any) {
    const [words, setWords] = useState([] as Word[]);
    const [isLoading, setLoading] = useState(false);

    const searchByText = async (text: string) => {
        try {
            setLoading(true);
            const res = await fetch(config.API_URL + '/words/' + text);
            const data = await res.json();

            if (data.error) {
                Alert.alert('Уупс!', data.error.message, [
                    {
                        text: "Назад",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "ОК", onPress: () => console.log("OK Pressed") }
                ],
                    { cancelable: false });

                setWords([]);
                setLoading(false);
                return;
            }

            setLoading(false);
            setWords(data.word.rhymeWith);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    return (
        <View style={generalStyles.container}>
            <Text style={styles.headerText}>rhyME</Text>
            <SearchInput searchByText={searchByText} />
            {
                isLoading
                    ? <ActivityIndicator size="large" color="#00ff00" />
                    :
                    <WordsList words={words} />
            }
            <Footer />
        </View >
    )
}

const styles = StyleSheet.create({
    headerText: {
        padding: 20,
        textAlign: 'center',
        margin: 25,
        fontSize: 40,
        color: '#666'
    }
});
