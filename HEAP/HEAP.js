import React, { forwardRef, Component, NativeModules } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ScrollView,
  ActionSheetIOS,
} from "react-native";
import Square from '../components/vectorSquare';
import Circle from '../components/circle';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Svg, {Line } from 'react-native-svg';

class HEAP extends React.Component{
    constructor(props){
        super(props);
        this.state={
            HEAParray: [],
            textValue: '',
            modalVisible: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.tempArray = [];
    }

    leftSon(index){
        return 2*index + 1;
    }

    rightSon(index){
        return 2*index + 2;
    }

    dad(index){
        return Math.floor((index-1)/2);
    }

    lastDad(){
        var n = this.tempArray.length;
        if (n <= 1){
            return -1;
        }
        return this.dad(n-1);
    }

    hasChild(index){
        var n = this.tempArray.length;
        if (this.leftSon(index) < n || this.rightSon(index) < n){
            return true;
        }
        return false;
    }

    sift(index){
        if (index > this.lastDad() ) {
            return;
        }
      
        // indice do maior filho
        var maiorFilho = this.leftSon(index);

        var n = this.tempArray.length;

        if (this.rightSon(index) < n && this.tempArray[this.rightSon(index)] > this.tempArray[maiorFilho]){
            maiorFilho = this.rightSon(index);
        }

        if (this.tempArray[maiorFilho] > this.tempArray[index]){
            //Swap
            [this.tempArray[maiorFilho], this.tempArray[index]] = [this.tempArray[index], this.tempArray[maiorFilho]];
            this.sift(maiorFilho);
        } 
    }

    insert(){
        if (!this.isOptionValid()){
            return;
        }

        var value = parseInt(this.state.textValue);

        this.setState({textValue: ''});

        this.tempArray = this.state.HEAParray;
        this.tempArray.push(value);

        for (let i = this.lastDad(); i > 0; i = this.dad(i)) {
            this.sift(i);
        }

        this.sift(0);
        
        this.setState({HEAParray: this.tempArray});
        this.tempArray = [];
    }

    remove(){
        if (this.state.HEAParray.length === 0){
            alert("Nothing to delete");
            return;
        }

        this.tempArray = this.state.HEAParray;
        var n = this.tempArray.length;

        [this.tempArray[0], this.tempArray[n-1]] = [this.tempArray[n-1], this.tempArray[0]];

        this.tempArray.pop();
        this.sift(0);
        this.setState({HEAParray: this.tempArray});
        this.tempArray = [];
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
        this.setState({HEAParray: []})
    }

    handleChange(e) {
        this.setState({ textValue: e });
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible });
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
                            {this.insert()}; 
                        }}
                    >
                        <Text style={styles.textStyle}>OK</Text>
                    </TouchableHighlight>
                </View>
          </View>
        );
    }

    printTree = () => {
        this.tempArray = this.state.HEAParray;
        const matrix = [];

        matrix.push([{value:this.tempArray[0], dad: undefined, child: this.hasChild(0)}]);
        
        var pos = 2;
        var temp = [];
        for (let i = 1; i < this.tempArray.length; i++) {
            if (temp.length+1 > pos){
                matrix.push(temp);
                pos = pos*2;
                temp=[];
            }
            
            var Iindex = undefined;
            var Jindex = undefined;

            for (let j = 0; j < matrix.length; j++) {
                if (matrix[j].findIndex(element => element.value === this.tempArray[this.dad(i)]) !== -1){
                    Iindex = j;
                    Jindex = matrix[j].findIndex(element => element.value === this.tempArray[this.dad(i)]);
                }
            }

            //console.log("Pai do " + this.tempArray[i] + " : "  + this.tempArray[this.dad(i)] + " no indice: " + Iindex + " " + Jindex);
            //console.log("PAAAI" + this.dad(i));
            temp.push({value:this.tempArray[i], dad: this.dad(i), child: this.hasChild(i)});
                //            temp.push({value:this.tempArray[i], dad: this.dad(i), place: ((i%2===0) ? (matrix[Iindex][Jindex].place/* + 200*//pos + 30) : (matrix[Iindex][Jindex].place/* - 200*//pos + 30)) });

            if (i+1 == this.tempArray.length){
                matrix.push(temp);
                temp=[];
            }
            
        }

        var restofRow = Array(pos - matrix[matrix.length-1].length).fill({value:' ', dad: undefined, child: false});
        //console.log(matrix[matrix.length-1].length + " / " + pos + " - " + restofRow);
        
        matrix[matrix.length-1] = matrix[matrix.length-1].concat(restofRow);
        //console.log(matrix[matrix.length-1]);
        //console.log("AQUI JAZ o POS: " + pos);

        return(
            <ScrollView ref="scroll" centerContent={true} horizontal={true} style={{height:'70%', width:'100%' ,backgroundColor: 'white'}} onChange={()=> console.log("AAAA" + contentSize.height)}>
                <ScrollView>
                    {matrix.map((row, i) => (
                        <View key={i} style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginLeft: 10, marginRight:20}}>
                            {
                                row.map((col, j) =>(
                                    (col.value !== undefined) ? <Circle text={col.value} key={j++} quant={row.length} altura={pos} side={j} yside={i} isDad={col.child}/>: null
                                ))
                            }
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>
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

                {this.printTree()}

                <ScrollView horizontal={true} style={{backgroundColor:'#86a2c2', marginBottom: 10}}>
                    <View style={styles.structureContainer}>
                        {this.state.HEAParray.map((num, index) => (
                            <Square text={num} ind={index} key={index} isLast={0}/>
                        ))}
                    </View>
                </ScrollView>
            
                <View style={styles.bottom}>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    >
                        <Icon name="pencil-plus" size={30} color='white'/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.remove();
                        }}
                    >
                        <Icon name="delete" size={30} color='white'/>
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

export default HEAP;