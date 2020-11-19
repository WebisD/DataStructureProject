import React from "react";
import { View, TouchableHighlight} from 'react-native';
import Svg, { Text, Ellipse } from 'react-native-svg';
import Arrow from './arrow.js';
import styles from './styles.js';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Elipse = (props) => {
    return(
        <View>
            <Svg height="90%" width="100%" /*style={{ backgroundColor: '#33AAFF' }}*/>
                <Arrow id="0" from={[138,255]} to={[215,35]} last={1}/>
                <Arrow id="1" from={[138,255]} to={[215,85]} last={1}/>
                <Arrow id="2" from={[138,255]} to={[215,135]} last={1}/>
                <Arrow id="3" from={[138,255]} to={[215,185]} last={1}/>
                <Arrow id="4" from={[138,255]} to={[215,235]} last={1}/>
                <Arrow id="5" from={[140,255]} to={[215,285]} last={1}/>
                <Arrow id="6" from={[140,255]} to={[215,325]} last={1}/>
                <Arrow id="7" from={[140,255]} to={[215,375]} last={1}/>
                <Arrow id="8" from={[140,255]} to={[215,425]} last={1}/>
                <Arrow id="9" from={[140,255]} to={[215,475]} last={1}/>
                
                <Svg height="100" width="220">
                    <Ellipse 
                        cx="40%"
                        cy="50%"
                        rx="50"
                        ry="30"
                        stroke="#cccc00"
                        strokeWidth="2"
                    />
                    <Text
                        fill="black"
                        stroke="black"
                        fontSize="20"
                        x="41%" y="51%" 
                        dominant-baseline="middle" 
                        text-anchor="middle"
                        textAnchor="middle"
                    >
                    {props.text}
                    </Text>
                </Svg>
            </Svg>
        </View>
    );
};

export default Elipse;