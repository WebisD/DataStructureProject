import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estrutura de Dados</Text>
            <Text>(Arraste para a lado para o menu)</Text>

            <Text style={{fontSize: 20, marginTop:20}}>Click in:</Text>
            
            <View style={styles.helpGuide}>
                <TouchableHighlight style={styles.openButton}>
                        <Icon name="pencil-plus" size={20} color='white'/>
                </TouchableHighlight>
                <Text style={{
                        fontSize: 16,
                        marginLeft: 20,
                        color: "black"
                    }}>To insert a new node </Text>
            </View>

            <View style={styles.helpGuide}>
                <TouchableHighlight style={styles.openButton}>
                        <Icon name="delete" size={20} color='white'/>
                </TouchableHighlight>
                <Text style={{
                        fontSize: 16,
                        marginLeft: 20,
                        color: "black"
                    }}>To delete node </Text>
            </View>

            <View style={styles.helpGuide}>
                <TouchableHighlight style={styles.openButton}>
                        <Icon name="magnify" size={20} color='white'/>
                </TouchableHighlight>
                <Text style={{
                        fontSize: 16,
                        marginLeft: 20,
                        color: "black"
                    }}>To search a node </Text>
            </View>

            <View style={styles.helpGuide}>
                <TouchableHighlight style={styles.openButton}>
                        <Icon name="restart" size={20} color='white'/>
                </TouchableHighlight>
                <Text style={{
                        fontSize: 16,
                        marginLeft: 20,
                        color: "black"
                    }}>To restart </Text>
            </View>

        </View>
    );
};

export default HomeScreen;


/*<TouchableOpacity style={styles.homeButton} onPress={() => alert('Hello, world!')}>
                <Text style={styles.homeButtonText}>LDDE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton} onPress={() => alert('Hello, world!')}>
                <Text style={styles.homeButtonText}>HASH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton} onPress={() => alert('Hello, world!')}>
                <Text style={styles.homeButtonText}>HEAP</Text>
            </TouchableOpacity>*/