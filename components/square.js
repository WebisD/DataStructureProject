import React from "react";
import { Animated} from 'react-native';
import Svg, { Text, Rect } from 'react-native-svg';
import Arrow from '../components/arrow.js';

class Square extends React.Component{  
    render(){
        return(
            <Animated.View>
                <Svg height="50" width="80">        
                    <Svg height="50" width="50">
                        <Rect   
                            x="1"
                            y="1" 
                            width="49"
                            height="49"
                            stroke="black"
                            strokeWidth="2"
                            fill={(this.props.colorC === undefined) ? "white" : this.props.colorC}
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
                            {this.props.text}
                        </Text>
                    </Svg>
                    {(this.props.conti > 0) ? <Arrow from={[50,25]} to={[73,25]} last={1}/> : null}
                </Svg>

            </Animated.View>
        );
    }
};

export default Animated.createAnimatedComponent(Square);