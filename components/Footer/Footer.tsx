import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    return (
        <View>
            <Text style={styles.footer}>
                Inspired by M.K.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        textAlign: "center"
    },
})