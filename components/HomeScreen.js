import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estrutura de Dados</Text>

            <TouchableOpacity style={styles.homeButton} onPress={() => alert('Hello, world!')}>
                <Text style={styles.homeButtonText}>LDDE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton} onPress={() => alert('Hello, world!')}>
                <Text style={styles.homeButtonText}>LDDE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton} onPress={() => alert('Hello, world!')}>
                <Text style={styles.homeButtonText}>LDDE</Text>
            </TouchableOpacity>

        </View>
    );
};

export default HomeScreen;