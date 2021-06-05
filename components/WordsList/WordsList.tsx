import React from 'react';
import { StyleSheet, Text, View, SectionList, SafeAreaView } from 'react-native';
import Word from '../../models/Word/Word';
import generalStyles from '../../styles';

export interface WordsListProps {
    words: Word[],
}

const removeDuplicatedLetters = (lettersFromWords: string[]) => lettersFromWords.filter((letter: string, index: number) => lettersFromWords.indexOf(letter) === index);

export default function WordsList({ words }: WordsListProps) {
    const lettersFromWords: string[] = words.map(word => word.text.charAt(0).toUpperCase());
    const removedDuplicatedLetters = removeDuplicatedLetters(lettersFromWords);
    const sections = removedDuplicatedLetters.map(letter => {
        return {
            title: letter.toUpperCase(),
            data: words.filter((word: Word) => word.text.toLowerCase().startsWith(letter.toLowerCase())).map((word: Word) => word.text)
        }
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                words.length > 0 ?
                    <SectionList
                        sections={sections}
                        renderItem={({ item }: any) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    : <Text style={generalStyles.label}>Няма римички. Потърси!</Text>
            }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18
    },
});
