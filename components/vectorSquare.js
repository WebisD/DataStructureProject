import React from "react";
import { View, TouchableHighlight} from 'react-native';
import Svg, { Text, Rect } from 'react-native-svg';
import styles from './styles.js';
import Arrow from '../components/arrow.js';

const Square = (props) => {
    return(
        <View>   
            <Svg height="50" width="50">
                <Rect   
                    x="0.5"
                    y="0.5"
                    width="49"
                    height="49"
                    stroke="black"
                    strokeWidth="2"
                />
                <Text
                    fill="black"
                    stroke="black"
                    fontSize="20"
                    x="50%" y="65%" 
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

export default Square;