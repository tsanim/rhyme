import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Word from '../models/Word/Word';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import generalStyles from '../styles';
import config from '../config/config';
import Footer from '../components/Footer/Footer';

export default function Operations({ navigation }: any) {
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

    const onNewBtnPress = () => {
        navigation.navigate('Add')
    }

    const onEditBtnPress = (word: any) => {
        navigation.navigate('Edit', word)
    }


    useEffect(() => {
        // fetchData after navigation.goBack 
        navigation.addListener('didFocus', _ => fetchData());

        fetchData();
    }, [])

    return (
        <View style={generalStyles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity>
                    <Button
                        buttonStyle={generalStyles.button}
                        icon={{
                            name: "add",
                            size: 20,
                            color: "white"
                        }}
                        title="Добавяне"
                        onPress={onNewBtnPress}
                    />
                </TouchableOpacity>
                {
                    isLoading
                        ? <ActivityIndicator />
                        : <SafeAreaView style={{ flex: 1 }}>
                            <FlatList
                                data={words}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) =>
                                    <TouchableOpacity
                                        style={generalStyles.touchableOpacity}
                                    >
                                        <View style={generalStyles.listItem}>
                                            <Text style={generalStyles.itemText}>{item.text}</Text>
                                            <View style={generalStyles.listItem}>
                                                <MaterialIcons name="edit" size={25} onPress={() => onEditBtnPress(item)} />
                                                {/* <MaterialIcons name="delete" size={25} onPress={() => setModalVisible(true)} /> */}
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </SafeAreaView>
                }
            </SafeAreaView>
            <Footer />
        </View>
    )
}