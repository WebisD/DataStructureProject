import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    outerContainer: {
        display: 'flex',
        //justifyContent: "center",
        //alignItems: 'center',
        height: '90%'
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -30,
    },

    temp: {
        display:'flex',
        flexDirection: 'row',
    },

    bottom: {
        width: '100%',
        marginBottom: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    
    openButton: {
        backgroundColor: "#2196F3",
        borderRadius: 50,
        padding: 10,
        elevation: 2
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    modalInput:{
        height:40,
        textAlign: 'center',
        width: 120,
        borderColor:'black',
        borderRadius: 15,
        borderWidth: 2,
        fontSize: 18,
        margin: 10, 
    },
});

export default styles;