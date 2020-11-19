import React from "react";
import { View, TouchableHighlight} from 'react-native';
import Svg, { Text, Line, G, Path } from 'react-native-svg';
import styles from './styles.js';

const Arrow = (props) => {
    return(
        <Svg height="50" width="50">
            {(props.last > 0) ? <G
                rotation={(Math.atan2(props.to[1] - props.from[1], props.to[0] - props.from[0]) * 180 / Math.PI)-135}
                origin={`${props.to[0]}, ${props.to[1]}`}
            >
                <Path d={`M ${props.to[0]+4} ${props.to[1]+4} L ${props.to[0]-5} ${props.to[1]+5} L ${props.to[0]-4} ${props.to[1]-4} z`} fill="black" stroke="black" />
            </G> : null}
            
            <Line
                x1={props.from[0]}
                y1={props.from[1]}
                x2={props.to[0]}
                y2={props.to[1]}
                stroke="black"
                strokeWidth="3"
            />
        </Svg>
    );
};

export default Arrow;

/*<G
                rotation={(Math.atan2(props.to[1] - props.from[1], props.to[0] - props.from[0]) * 180 / Math.PI)+45}
                origin={`${props.from[0]}, ${props.from[1]}`}
            >
                <Path d={`M ${props.from[0]+8} ${props.from[1]+8} L ${props.from[0]-10} ${props.from[1]+10} L ${props.from[0]-8} ${props.from[1]-8} z`} fill="#1abc9c" stroke="#1abc9c" />
            </G>
                <G
                    rotation={(Math.atan2(props.to[1] - props.from[1], props.to[0] - props.from[0]) * 180 / Math.PI)-135}
                    origin={`${props.to[0]}, ${props.to[1]}`}
                >
                <Path d={`M ${props.to[0]+8} ${props.to[1]+8} L ${props.to[0]-10} ${props.to[1]+10} L ${props.to[0]-8} ${props.to[1]-8} z`} fill="#1abc9c" stroke="#1abc9c" />
            </G>*/