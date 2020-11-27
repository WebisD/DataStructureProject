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
            intValue: undefined,
            opacOut: Array(10).fill().map(()=>[]),
            currentColor: Array(10).fill().map(()=>[]),
            shineArrow: new Animated.Value(1),
            currentIndex: undefined,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    checkValue(){
        if (this.state.currentAction === "insert"){
            if (!this.isOptionValid()){
                return;
            }
            
            var value = parseInt(this.state.textValue);

            var position = this.hashFunction(value);

            var completeArray = this.state.opacOut;
            var tempArray = this.state.HASHaray[position];

            var index;
            for (index = 0; tempArray[index] < value; index++);

            var tempOpac = completeArray[position];
            tempOpac = [...tempOpac.slice(0, index), new Animated.Value(1), ...tempOpac.slice(index)];
            completeArray[position] = tempOpac;
            this.setState({currentIndex: position});
            this.setState({opacOut: completeArray}, ()=>{this.insertAnimation()});
        }
        else if (this.state.currentAction === "remove"){
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
            this.setState({intValue: value}, ()=>{this.removeAnimation(position, index)});
        }
        else if (this.state.currentAction === "search"){
            if (!this.isOptionValid()){
                return;
            }
            var value = parseInt(this.state.textValue);
            this.setState({intValue: value}, ()=>{this.setState({textValue: ''})});
            var position = this.hashFunction(value);

            var completeArray = this.state.currentColor;
            var tempArray = this.state.HASHaray[position];
            var colors =[];
            var index;
            for (let i = 0; i < tempArray.length; i++) {
                colors.push(new Animated.Value(1));
            }

            completeArray[position] = colors;

            this.setState({currentColor: completeArray}, ()=>{
                {this.percorreArray(position, 0)}
            });
        }   
    }

    hashFunction(x){
        return x % this.max;
    }

    insert(){

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

        var opcArray = this.state.opacOut;
        var opcTemp = opcArray[position];
        opcTemp.splice(index, 1);
        opcArray[position] = opcTemp;

        this.setState({opacOut: opcArray});


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

    insertAnimation(){
        Animated.sequence([
            Animated.timing(
                this.state.shineArrow,{
                    duration: 1000,
                    toValue: 0,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                this.state.shineArrow,{
                    duration: 500,
                    toValue: 1,
                    useNativeDriver: false,
                }
            ),
        ]).start(()=>{this.insert()});
        
    }

    removeAnimation(index, jindex){
        Animated.timing(
            this.state.opacOut[index][jindex],{
                duration: 1000,
                toValue: 0,
                useNativeDriver: false,
            }
        ).start(()=>{this.remove()});
    }
    
    searchAnimation(index, jindex){
        Animated.sequence([
            Animated.timing(
                this.state.currentColor[index][jindex],{
                    duration: 500,
                    toValue: 0,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                this.state.currentColor[index][jindex],{
                    duration: 500,
                    toValue: 1,
                    useNativeDriver: false,
                }
            )
        ]).start(()=>{(this.state.intValue === this.state.HASHaray[index][jindex]) ? alert('Elemento encontrado no indice: ' + jindex) : this.percorreArray(index, jindex+1)});
    }

    percorreArray(index, jindex){
        var value = this.state.intValue;
        if (value > this.state.HASHaray[index][jindex]){
            this.searchAnimation(index, jindex);
        }
        else if (value === this.state.HASHaray[index][jindex]){
            this.searchAnimation(index, jindex);
        }
        else{
            if (value !== this.state.HASHaray[index][jindex-1] || value < this.state.HASHaray[index][jindex-1] || index-1 === this.state.HASHaray[index].length)
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

    intToColor(index, jindex){
        return (this.state.currentColor[index][jindex] === undefined) ? undefined : this.state.currentColor[index][jindex].interpolate({
            inputRange: [0,1],
            outputRange: ['rgb(104, 121, 227)', 'rgb(255,255,255)']
        })
    }

    intToArrow(){
        return (this.state.currentIndex === undefined) ? undefined : this.state.shineArrow.interpolate({
            inputRange: [0,1],
            outputRange: ['rgb(204, 204, 0)', 'rgb(0,0,0)']
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
                    <View style={styles.innerContainer}>
                        <Elipse text={"h(x)"} index={this.state.currentIndex} colorArrow={this.intToArrow()}/>
                        <View>
                            {this.state.HASHaray.map((row, i) => (
                                <View key={i} style={styles.temp}>
                                    <Square colorC={this.intToColor(i,0)} text={i} key={i} conti={row.length}/>
                                    {(row !== undefined) ? row.map((col, j) => (
                                        (col !== undefined) ? <Square1 colorC={this.intToColor(i,j)} opa={this.state.opacOut[i][j]} text={col} key={j} isLast={(j+1 < row.length) ? 1 : 0}/> : null
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
                            this.setModalVisible(true, "search");
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

