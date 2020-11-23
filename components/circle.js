import React, { useRef } from "react";
import { View, TouchableHighlight} from 'react-native';
import Svg, { Text, Circle } from 'react-native-svg';
import styles from './styles.js';
import Arrow from '../components/arrow.js';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Node = (props) => {
    //console.log("Node:" + props.text + " " + props.ind + " " + props.dleft + " Cara: " + props.nodes);
    console.log("position: " + props.position + " altura: " + props.altura);
    return(
        <View>   
            <Svg height="60" width="60" 
                style={{/**/position: 'absolute', 
                    //left: (props.ind===0 && props.temp===0) ? (windowWidth/2.5) : (windowWidth/props.nodes) + 100*props.dleft,
                    left: props.position,
                    top: (props.altura === 0) ? (10) : (80*props.altura),
                    /*marginLeft: 15,
                    marginRight: 15,*/
                }}
            >
                <Circle   
                    cx="30"
                    cy="30"
                    r="29"
                    strokeWidth="1"
                    stroke="blue"
                />
                <Text
                    fill="black"
                    stroke="black"
                    fontSize="20"
                    x="50%" y="60%" 
                    dominant-baseline="middle" 
                    text-anchor="middle"
                    textAnchor="middle"
                >
                    {props.text}
                </Text>
            </Svg>
        </View>
    );
};

export default Node;