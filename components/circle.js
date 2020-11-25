import React, { useRef } from "react";
import { View, TouchableHighlight} from 'react-native';
import Svg, { Text, Circle, Line } from 'react-native-svg';
import styles from './styles.js';
import Arrow from '../components/arrow.js';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Node = (props) => {
    //console.log("Node:" + props.text + " " + props.ind + " " + props.dleft + " Cara: " + props.nodes);
    //console.log("position: " + props.position + " altura: " + props.altura);
    //console.log(props.text + " TEM FILHO: " + props.isDad);
    return(
        <View /*onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.log('height:', layout.height);
            console.log('width:', layout.width);
            console.log('x:', layout.x);
            console.log('y:', layout.y);
          }}*/>  
        <Svg height="75" width={(70*props.altura)/props.quant} /*style={{backgroundColor:"#"+((1<<24)*Math.random()|0).toString(16)}}*/>
            <Svg height="60" width="60">
                <Circle   
                    cx={(70*props.altura)/props.quant/2}
                    cy="50%"
                    r="29"
                    strokeWidth="2"
                    stroke= {(props.text !== ' ') ? "blue" : 'none'}
                />
                <Text
                    fill="black"
                    stroke="black"
                    fontSize="20"
                    x={(70*props.altura)/props.quant/2} y="60%" 
                    dominant-baseline="middle" 
                    text-anchor="middle"
                    textAnchor="middle"
                >
                    {props.text}
                </Text>
            </Svg>
            {(props.text !== " " && props.yside !== 0) ? 
                <>
                    <Line x1={(70*props.altura)/props.quant/2} y1="10" x2={(70*props.altura)/props.quant/2} y2="0" stroke="red" strokeWidth="2" />

                    {(props.side%2 === 0) ? 
                        <Line x1={(70*props.altura)/props.quant/2} y1="1" y2="1" stroke="red" strokeWidth="2" /> 
                            : 
                        <Line x1={(70*props.altura)/props.quant/2} y1="1" x2={(70*props.altura)/props.quant} y2="1" stroke="red" strokeWidth="2" />
                    }
                </>:
                null
            }

            {(props.isDad && props.text!==' ') ? <Line x1={((70*props.altura)/props.quant/2)-0.5} y1="67" x2={((70*props.altura)/props.quant/2)-0.5} y2="75" stroke="red" strokeWidth="2" /> : null}
        </Svg>
        </View>
    );
};

export default Node;