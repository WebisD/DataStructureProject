import React, { Component } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import styles from './styles.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Elipse from '../components/elipse.js';
import Square from '../components/square.js';
import Square1 from '../components/square1Pointer.js';

class HASH extends React.Component{

    constructor(props){
        super(props);
        this.max = 10;

        this.state = {
            HASHaray: Array(10).fill().map(()=>[]),
            textValue: '',
            modalVisible: false,
            currentAction: undefined,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    hashFunction(x){
        return x % this.max;
    }

    insert(){

        if (!this.isOptionValid()){
            return;
        }

        var value = parseInt(this.state.textValue);

        var position = this.hashFunction(value);

        var completeArray = this.state.HASHaray;
        var tempArray = this.state.HASHaray[position];

        var index;
        for (index = 0; tempArray[index] < value; index++);

        tempArray = [...tempArray.slice(0, index), value, ...tempArray.slice(index)];

        completeArray[position] = tempArray;

        this.setState({textValue: ''}, ()=>{
            this.setState({HASHaray: completeArray});
        });
    }

    remove(){
        if (!this.isOptionValid()){
            return;
        }

        var value = parseInt(this.state.textValue);
        
        var position = this.hashFunction(value);

        var completeArray = this.state.HASHaray;
        var tempArray = this.state.HASHaray[position];

        var index;
        for (index = 0; tempArray[index] < value; index++);

        if (tempArray[index] !== value){
            return;
        }

        tempArray.splice(index, 1);
        
        completeArray[position] = tempArray;

        this.setState({HASHaray: completeArray});
        this.setState({textValue: ''});
    }


    isOptionValid(){
        if (this.state.textValue.length === 0 || 
            isNaN(this.state.textValue) || 
            this.state.textValue.indexOf('.')!==-1){
        return false;
        }
        return true;
    }

    clear(){
        var completeArray = this.state.HASHaray;
        for (let i = 0; i < completeArray.length; i++) {
            completeArray[i] = [];
        }
        this.setState({HASHaray: completeArray});
    }


    handleChange(e) {
        this.setState({ textValue: e });
    }

    setModalVisible = (visible, option) => {
        this.setState({modalVisible: visible });
        this.setState({currentAction: option});
    }

    makeChange = () => {
        return(
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Insert a value</Text>

                    <TextInput style={styles.modalInput} keyboardType='numeric' value={this.state.textValue} onChangeText={this.handleChange}/>
                    
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            {this.setModalVisible(false)};
                            if (this.state.currentAction == "insert"){
                                {this.insert()};
                            }
                            else if (this.state.currentAction == "remove"){
                                {this.remove()};
                            }
                        }}
                    >
                        <Text style={styles.textStyle}>OK</Text>
                    </TouchableHighlight>
                </View>
          </View>
        );
    }

    /*printStructure = () => {
        const matrix = this.state.HASHaray;
        return(
            <View>                 
                {this.state.HASHaray.map((row, i) => (
                    <View key={i} style={styles.temp}>
                        {row.map((col, j) => (
                            <Square text={col} key={j}/>
                        ))}
                    </View>
                ))}
            </View>
        );
    }*/

    render(){
        const { modalVisible } = this.state;
        return(
            <View style={styles.outerContainer}>
                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose = {()=> {
                        Alert.alert("Modal fechado");
                    }}
                > 
                    {this.makeChange()}
                </Modal>
                
                
                <ScrollView horizontal={true}>
                    <View style={styles.innerContainer}>
                        <Elipse text={"h(x)"}/>
                        <View>
                            {this.state.HASHaray.map((row, i) => (
                                <View key={i} style={styles.temp}>
                                    <Square text={i} key={i} conti={row.length}/>
                                    {(row !== undefined) ? row.map((col, j) => (
                                        (col !== undefined) ? <Square1 text={col} key={j} isLast={(j+1 < row.length) ? 1 : 0}/> : null
                                    )): null} 
                                </View>
                            ))}
                        </View>
                        
                    </View>
                </ScrollView>
                

                <View style={styles.bottom}>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.setModalVisible(true, "insert");
                        }}
                    >
                        <Icon name="pencil-plus" size={30} color='white'/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.setModalVisible(true, "remove");
                        }}
                    >
                        <Icon name="delete" size={30} color='white'/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.setModalVisible(true, "remove");
                        }}
                    >
                        <Icon name="magnify" size={30} color='white'/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.clear();
                        }}
                    >
                        <Icon name="restart" size={30} color='white'/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default HASH;

