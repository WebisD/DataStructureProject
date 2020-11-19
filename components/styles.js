import {StyleSheet} from 'react-native';
import { inlineStyles } from 'react-native-svg';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEBBC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 24,
        marginBottom: 70,
    },

    homeButton:{
        width: 211,
        height: 76,
        marginVertical: 20,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    homeButtonText:{
        fontSize: 24,
        color: 'green',
    },

    Square :{
        top: (windowHeight)/3,
        left: 30,
    },
})

export default styles;