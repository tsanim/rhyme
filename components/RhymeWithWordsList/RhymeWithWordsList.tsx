import React from 'react';
import { View, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import generalStyles from '../../styles';

export default function RhymeWithWordsList({ onPressRemoveRhymeWithHandler, rhymeWith }: any) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={rhymeWith}
                renderItem={({ item }: any) =>
                    <TouchableOpacity
                        style={generalStyles.touchableOpacity}
                    >
                        <View style={generalStyles.listItem}>
                            <Text style={generalStyles.itemText}>{item.text}</Text>
                            <MaterialIcons name="remove" size={25} onPress={() => onPressRemoveRhymeWithHandler(item._id)} />
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView >
    );
}

