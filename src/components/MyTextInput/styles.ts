import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    label: {
        fontSize: 18
    },

    input: {
        height: 38,
        fontSize: 17,
        borderWidth: 1,
        marginBottom: 15,
        width: Dimensions.get('window').width - 40,
    }

});