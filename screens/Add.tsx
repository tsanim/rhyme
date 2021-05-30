import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import Word from '../models/Word/Word';
import RhymeWithWordsList from '../components/RhymeWithWordsList/RhymeWithWordsList';
import RhymeWordsListSection from '../components/RhymeWordsListSection/RhymeWordsListSection';
import generalStyles from '../styles';
import config from '../config/config';
import Footer from '../components/Footer/Footer';

export default function Add({ navigation }: any) {
    const [text, onChangeText] = useState('');
    const [rhymeWith, addRhymeWithWord] = useState([] as Word[]);
    const [words, setWords] = useState([] as Word[]);
    const [isLoading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(config.API_URL + '/words/all');
            const data = await res.json();

            setLoading(false);
            setWords(data.words);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const addNew = async (body: any) => {
        try {
            setLoading(true);
            const res = await fetch(config.API_URL + '/words/add', {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json()

            if (data.errors && data.errors.length > 0) {
                Alert.alert('Грешка!', data.errors[0].msg, [
                    {
                        text: "Назад",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "ОК", onPress: () => console.log("OK Pressed") }
                ],
                    { cancelable: false });

                setLoading(false);
                return;
            }

            setLoading(false);
            navigation.navigate('Operations', data.word);
        } catch (error) {
            console.log(error);
        }
    }

    const onPressAddRhymeWithHandler = (id: string) => {
        addRhymeWithWord([...rhymeWith, words.find(word => word._id === id) as Word]);
        setWords(words.filter(word => word._id !== id));
    }

    const onPressRemoveRhymeWithHandler = (id: string) => {
        setWords([...words, rhymeWith.find(word => word._id === id) as Word]);
        addRhymeWithWord(rhymeWith.filter(word => word._id !== id));
    }

    const onPressAddNewHandler = async () => {
        if (text === '') {
            Alert.alert('Празно поле!', 'Текстовото поле е задължително! Моля, въведете текст!', [
                {
                    text: "Назад",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "ОК", onPress: () => console.log("OK Pressed") }
            ],
                { cancelable: false })
            return;
        }

        await addNew({
            text,
            rhymeWith: rhymeWith.map(word => word._id)
        });

    }

    useEffect(() => {
        fetchData()
            .catch(err => console.log(err));
    }, [])

    return (
        <View style={generalStyles.container}>
            <TouchableOpacity>
                <Button
                    buttonStyle={generalStyles.button}
                    icon={{
                        name: "add",
                        size: 20,
                        color: "white"
                    }}
                    title="Добави"
                    onPress={onPressAddNewHandler}
                />
            </TouchableOpacity>

            <TextInput
                placeholder="Думичка..."
                onChangeText={(text) => onChangeText(text)}
                value={text}
                style={generalStyles.wordInput}
            />
            {
                isLoading
                    ? <ActivityIndicator />
                    :
                    <>
                        <RhymeWithWordsList
                            rhymeWith={rhymeWith}
                            onPressRemoveRhymeWithHandler={(id: string) => onPressRemoveRhymeWithHandler(id)}
                        />
                        <RhymeWordsListSection
                            words={words}
                            onPressAddRhymeWithHandler={(id: string) => onPressAddRhymeWithHandler(id)}
                        />
                    </>
            }
            <Footer />
        </View>
    )
}