import React from "react";
import { View, TouchableHighlight} from 'react-native';
import Svg, { Text, Rect } from 'react-native-svg';
import styles from './styles.js';
import Arrow from '../components/arrow.js';

const Square = (props) => {

    /*this.Square.measure( (fx, fy, width, height, px, py) => {
        console.log('Component width is: ' + width)
        console.log('Component height is: ' + height)
        console.log('X offset to frame: ' + fx)
        console.log('Y offset to frame: ' + fy)
        console.log('X offset to page: ' + px)
        console.log('Y offset to page: ' + py)
    })*/   

    return(
        <View>
            <Svg height="50" width="80">        
                <Svg height="50" width="50">
                    <Rect   
                        x="1"
                        y="1" 
                        width="49"
                        height="49"
                        stroke="black"
                        strokeWidth="2"
                    />
                    <Text
                        fill="black"
                        stroke="black"
                        fontSize="20"
                        x="32%" y="65%" 
                        dominant-baseline="middle" 
                        text-anchor="middle"
                        textAnchor="middle"
                    >
                        {props.text}
                    </Text>
                </Svg>
                {(props.conti > 0) ? <Arrow from={[50,25]} to={[73,25]} last={1}/> : null}
            </Svg>

        </View>
    );
};

export default Square;