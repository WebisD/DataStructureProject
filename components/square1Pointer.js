import React from "react";
import { View, TouchableHighlight} from 'react-native';
import Quadrado from '../src/squareHash.svg';
import Svg, { Text, Line } from 'react-native-svg';
import styles from './styles.js';
import Arrow from './arrow.js';

const Square = (props) => {
    return(
        <View>
            <Svg height="50" width="100">
                <Svg height="50" width="80">
                    <Quadrado height="50" width="80"/>
                    <Text
                        fill="black"
                        stroke="purple"
                        fontSize="20"
                        fontWeight="bold"
                        x="40%" y="65%" 
                        dominant-baseline="middle" 
                        text-anchor="middle"
                        textAnchor="middle"
                    >
                    {props.text}
                    </Text>
                </Svg>
                {
                    (props.isLast > 0) ? 
                    <Arrow from={[70,25]} to={[93,25]} last={props.isLast}/> 
                        :
                    <Line x1="80" y1="-2.18557e-08" x2="60" y2="50" stroke="black"/>
                }
            </Svg>
        </View>
    );
};

export default Square;