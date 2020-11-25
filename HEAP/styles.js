import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    outerContainer: {
        display: 'flex',
        justifyContent: "center",
        //alignItems: "center",
        justifyContent: 'space-between',
        height: '90%'
    },

    structureContainer:{
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 20,
    },

    innerContainer: {
        display: 'flex',
    },

    scrollViewStyle: {
        position: 'absolute',
        height: '30%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 60
    },

    mainView: {
        flex: 1,
    },

    
    bottom: {
        width: '100%',
        marginBottom: 40,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    tree:{
        //position: 'absolute',
        height: '70%',
        width: '50%',
    },

    fixed: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
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