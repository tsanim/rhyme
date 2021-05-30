import React from 'react';
import { View, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import generalStyles from '../../styles';

export default function RhymeWordsListSection({ onPressAddRhymeWithHandler, words }: any) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text style={generalStyles.label}>Add the rhyme words to your word: </Text>
            <FlatList
                data={words}
                renderItem={({ item }: any) =>
                    <TouchableOpacity
                        style={generalStyles.touchableOpacity}
                    >
                        <View style={generalStyles.listItem}>
                            <Text style={generalStyles.itemText}>{item.text}</Text>
                            <MaterialIcons name="add" size={25} onPress={() => onPressAddRhymeWithHandler(item._id)} />
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

