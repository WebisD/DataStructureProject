import React, { forwardRef, Component } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import Square from '../components/square2Pointers';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class LDDE extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            LDDEarray: [],
            textValue: '',
            modalVisible: false,
            currentAction: undefined,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    

    insert(){

        if (!this.isOptionValid()){
            return;
        }

        var value = parseInt(this.state.textValue);

        var index;
        for (index = 0; this.state.LDDEarray[index] < value; index++);

        this.setState({textValue: ''}, ()=>{
            this.setState({LDDEarray: [...this.state.LDDEarray.slice(0,index), 
                                        value, 
                                        ...this.state.LDDEarray.slice(index)]})
        });

        //this.makeConetions();
    }

    remove(){
        if (!this.isOptionValid() || this.state.LDDEarray.length === 0){
            return;
        }

        var value = parseInt(this.state.textValue);
        var index;
        for (index = 0; this.state.LDDEarray[index] < value; index++);

        if (this.state.LDDEarray[index] !== value){
            return;
        }

        var tempArray = this.state.LDDEarray;
        tempArray.splice(index, 1);
        
        this.setState({LDDEarray: tempArray});
        this.setState({textValue: ''});
        //this.makeConetions();
    }
    
    /*makeConetions(){
        
        var size = this.state.LDDEarray.length;
        var tempArray = [];
     
        for (let i = 0; i < size; i++) {

            tempArray.push({
                start: i.toString(),
                end: (i+1).toString(),
                strokeWidth: 2,
                endAnchor: 'middle',
            });
        }
        this.setState({pointerArrows: tempArray});
        console.log(tempArray);
    }*/

    isOptionValid(){
        if (this.state.textValue.length === 0 || 
            isNaN(this.state.textValue) || 
            this.state.textValue.indexOf('.')!==-1){
        return false;
        }
        return true;
    }

    clear(){
        this.setState({LDDEarray: []})
    }

    handleChange(e) {
        this.setState({ textValue: e });
    }

    setModalVisible = (visible, option) => {
        this.setState({modalVisible: visible });
        this.setState({currentAction: option});
    }

    updateChoosenOption = (action) => {
        this.setState({currentAction: action});
    }

    makeChange = () => {
        return(
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Insert a value</Text>

                    <TextInput style={styles.modalInput} value={this.state.textValue} onChangeText={this.handleChange}/>
                    
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
                    <View style={styles.structureContainer}>
                        {this.state.LDDEarray.map((num, index) => (
                            <Square text={num} ind={index} key={index} isLast={(index+1 < this.state.LDDEarray.length) ? 1 : 0}/>
                        ))}
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

export default LDDE;