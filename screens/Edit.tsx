import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";
import Word from '../models/Word/Word';
import { Button } from 'react-native-elements';
import RhymeWithWordsList from '../components/RhymeWithWordsList/RhymeWithWordsList';
import RhymeWordsListSection from '../components/RhymeWordsListSection/RhymeWordsListSection';
import generalStyles from '../styles';
import config from '../config/config';
import Footer from '../components/Footer/Footer';

export default function Edit({ navigation }: any) {
    const [text, onChangeText] = useState(navigation.getParam('text'));
    const [rhymeWith, addRhymeWithWord] = useState(navigation.getParam('rhymeWith') || [] as Word[]);
    const [words, setWords] = useState([] as Word[]);
    const [isLoading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(config.API_URL + '/words/all');
            const data = await res.json();
            const filteredWords = data.words.filter((word: Word) => {
                return !(rhymeWith.some((rhymeWord: Word) => word._id === rhymeWord._id)) && word._id !== navigation.getParam('_id');
            });

            setLoading(false);
            setWords(filteredWords);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const edit = async (body: any, id: string) => {
        try {
            setLoading(true);
            const res = await fetch(config.API_URL + '/words/edit/' + id, {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const onPressAddRhymeWithHandler = (id: string) => {
        addRhymeWithWord([...rhymeWith, words.find(word => word._id === id) as Word]);
        setWords(words.filter(word => word._id !== id));
    }

    const onPressRemoveRhymeWithHandler = (id: string) => {
        setWords([...words, rhymeWith.find((word: Word) => word._id === id) as Word]);
        addRhymeWithWord(rhymeWith.filter((word: Word) => word._id !== id));
    }

    const onPressEditHandler = async () => {
        if (text === '') {
            Alert.alert('Text is empty!', 'Please add word with no empty text!', [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
                { cancelable: false })
            return;
        }

        await edit({
            text,
            rhymeWith: rhymeWith.map((word: Word) => word._id)
        },
            navigation.getParam('_id'));

        navigation.navigate('Operations');
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
                    title="Редактирай"
                    onPress={onPressEditHandler}
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
        </View >
    )
}