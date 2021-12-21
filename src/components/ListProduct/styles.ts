import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        padding: 15,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#e5e1e1',
        width: Dimensions.get('window').width - 20,
    },

    text: {
        fontSize: 18,
        textAlign: "justify"
    },

    title: {
        fontSize: 18,
        fontWeight: "bold"
    },

    container_fabricante: {
        padding: 7,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e5e1e1'
    }

});