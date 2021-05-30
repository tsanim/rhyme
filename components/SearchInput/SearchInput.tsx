import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import generalStyles from '../../styles';

export default function SearchInput({ username, searchByText }: any) {
    const [value, onChangeText] = useState('');
    const onSearchBtnPress = async () => {
        await searchByText(value);
    }
    return (
        <View>
            <Text style={styles.inputLabelText}>Напиши дума и намери нейните римички: </Text>
            <TextInput
                placeholder="Думичка..."
                style={generalStyles.wordInput}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TouchableOpacity>
                <Button
                    buttonStyle={generalStyles.button}
                    icon={{
                        name: "search",
                        size: 20,
                        color: "white"
                    }}
                    title="Търси"
                    onPress={onSearchBtnPress}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputLabelText: {
        paddingLeft: 10,
        fontSize: 18
    }
});
