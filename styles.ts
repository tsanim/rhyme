import { StyleSheet } from "react-native";

const generalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    wordInput: {
        height: 43,
        fontSize: 18,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    touchableOpacity: {
        padding: 10,
        backgroundColor: '#f1f1f1'
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    label: {
        fontSize: 20,
        padding: 10,
    },
    itemText: {
        fontSize: 20
    },
    button: {
        backgroundColor: "#808080"
    }
})

export default generalStyles;