import React from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
  Animated,
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
            intValue: undefined,
            opacOut: [],
            currentColor: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    checkValue(){
        if (this.state.currentAction === "insert"){
            if (!this.isOptionValid()){
                return;
            }
            var value = parseInt(this.state.textValue); 
            var index;
            for (index = 0; this.state.LDDEarray[index] < value; index++);

            var opc = this.state.opacOut;
            opc.push(new Animated.Value(1));
            this.setState({intValue: value});

            this.setState({opacOut: opc}, ()=>{this.insert(index)});
        }
        else if (this.state.currentAction === "remove"){
            if (!this.isOptionValid() || this.state.LDDEarray.length === 0){
                return;
            }
            var value = parseInt(this.state.textValue);
            var index;
            for (index = 0; this.state.LDDEarray[index] < value; index++);

            if (this.state.LDDEarray[index] !== value){
                return;
            }

            this.setState({intValue: value}, ()=>{this.removeAnimation(index)});
        }
        else if (this.state.currentAction === "search"){
            if (!this.isOptionValid() || this.state.LDDEarray.length === 0){
                return;
            }
            var value = parseInt(this.state.textValue);
            this.setState({intValue: value}, ()=>{this.setState({textValue: ''})});
            var index;
            var colors =[];
            for (let i = 0; i < this.state.LDDEarray.length; i++) {
                colors.push(new Animated.Value(1));   
            }
            
            for (index = 0; this.state.LDDEarray[index] < value; index++);
            this.setState({currentColor: colors}, ()=>{
                {this.percorreArray(0)}
            });
        
        }   
    }

    insert(index){
        var value = this.state.intValue;
        this.setState({textValue: ''}, ()=>{
            this.setState({LDDEarray: [...this.state.LDDEarray.slice(0,index), 
                                        value, 
                                        ...this.state.LDDEarray.slice(index)]})
        });
    }

    remove(index){
        var tempArray = this.state.LDDEarray;
        tempArray.splice(index, 1);

        this.setState({LDDEarray: tempArray});
        this.setState({textValue: ''});

        var ops = this.state.opacOut;
        ops.splice(index, 1);
        this.setState({opacOut: ops});
    }

    isOptionValid(){
        if (this.state.textValue.length === 0 || 
            isNaN(this.state.textValue) || 
            this.state.textValue.indexOf('.')!==-1){
        return false;
        }
        if (parseInt(this.state.textValue) >= 10000){
            alert('Insira um valor menor que 10000');
            return false;
        }
        return true;
    }

    clear(){
        this.setState({LDDEarray: []})
    }

    removeAnimation(index){
        Animated.timing(
            this.state.opacOut[index],{
                duration: 1000,
                toValue: 0,
                useNativeDriver: false,
            }
        ).start(()=>{this.remove(index)});
    }
    

    searchAnimation(index){
        Animated.sequence([
            Animated.timing(
                this.state.currentColor[index],{
                    duration: 500,
                    toValue: 0,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                this.state.currentColor[index],{
                    duration: 500,
                    toValue: 1,
                    useNativeDriver: false,
                }
            )
        ]).start(()=>{(this.state.intValue === this.state.LDDEarray[index]) ? alert('Elemento encontrado no indice: ' + index) : this.percorreArray(index+1)});
    }

    percorreArray(index){
        var value = this.state.intValue;
        if (value > this.state.LDDEarray[index]){
            this.searchAnimation(index);
        }
        else if (value === this.state.LDDEarray[index]){
            this.searchAnimation(index);
        }
        else{
            if (value !== this.state.LDDEarray[index-1] || value < this.state.LDDEarray[index-1] || index-1 === this.state.LDDEarray.length)
                alert("Elemento não encontrado");   
            return;
        }
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
                            {this.checkValue()};
                        }}
                    >
                        <Text style={styles.textStyle}>OK</Text>
                    </TouchableHighlight>
                </View>
          </View>
        );
    }

    intToColor(index){
        return (this.state.currentColor[index] === undefined) ? undefined : this.state.currentColor[index].interpolate({
            inputRange: [0,1],
            outputRange: ['rgb(104, 121, 227)', 'rgb(255,255,255)']
        })
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
                            <Square colorC={this.intToColor(index)} opa={this.state.opacOut[index]} text={num} ind={index} key={index} isLast={(index+1 < this.state.LDDEarray.length) ? 1 : 0}/>
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
                            (this.state.LDDEarray.length > 0) ? this.setModalVisible(true, "remove") : alert("Insira algum valor na LDDE");
                        }}
                    >
                        <Icon name="delete" size={30} color='white'/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            (this.state.LDDEarray.length > 0) ? this.setModalVisible(true, "search") : alert("Insira algum valor na LDDE");
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