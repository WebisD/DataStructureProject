import React from "react";
import { Animated} from 'react-native';
import Quadrado from '../src/squareHash.svg';
import Svg, { Text, Line } from 'react-native-svg';
import Arrow from './arrow.js';

class Square extends React.Component{
    render(){
        return(
            <Animated.View opacity={this.props.opa}>
                <Svg height="50" width="100">
                    <Svg height="50" width="80">
                        <Quadrado height="50" width="80" fill={(this.props.colorC === undefined) ? "white" : this.props.colorC}/>
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
                        {this.props.text}
                        </Text>
                    </Svg>
                    {
                        (this.props.isLast > 0) ? 
                        <Arrow from={[70,25]} to={[93,25]} last={this.props.isLast}/> 
                            :
                        <Line x1="80" y1="-2.18557e-08" x2="60" y2="50" stroke="black"/>
                    }
                </Svg>
            </Animated.View>
        );
    }
};

export default Animated.createAnimatedComponent(Square);