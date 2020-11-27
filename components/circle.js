import React from "react";
import { Animated} from 'react-native';
import Svg, { Text, Circle, Line } from 'react-native-svg';

class Node extends React.Component{
    render(){
        return(
            <Animated.View opacity={this.props.opa}>  
                <Svg height="75" width={(70*this.props.altura)/this.props.quant}>
                    <Svg height="60" width="60">
                        <Circle   
                            cx={(70*this.props.altura)/this.props.quant/2}
                            cy="50%"
                            r="29"
                            strokeWidth="2"
                            stroke= {(this.props.text !== ' ') ? "blue" : 'none'}
                        />
                        <Text
                            fill="black"
                            stroke="black"
                            fontSize="20"
                            x={(70*this.props.altura)/this.props.quant/2} y="60%" 
                            dominant-baseline="middle" 
                            text-anchor="middle"
                            textAnchor="middle"
                        >
                            {this.props.text}
                        </Text>
                    </Svg>
                    {(this.props.text !== " " && this.props.yside !== 0) ? 
                        <>
                            <Line x1={(70*this.props.altura)/this.props.quant/2} y1="10" x2={(70*this.props.altura)/this.props.quant/2} y2="0" stroke="red" strokeWidth="2" />

                            {(this.props.side%2 === 0) ? 
                                <Line x1={(70*this.props.altura)/this.props.quant/2} y1="1" y2="1" stroke="red" strokeWidth="2" /> 
                                    : 
                                <Line x1={(70*this.props.altura)/this.props.quant/2} y1="1" x2={(70*this.props.altura)/this.props.quant} y2="1" stroke="red" strokeWidth="2" />
                            }
                        </>:
                        null
                    }

                    {(this.props.isDad && this.props.text!==' ') ? <Line x1={((70*this.props.altura)/this.props.quant/2)-0.5} y1="67" x2={((70*this.props.altura)/this.props.quant/2)-0.5} y2="75" stroke="red" strokeWidth="2" /> : null}
                </Svg>
            </Animated.View>
        );
    }
};

export default Animated.createAnimatedComponent(Node);