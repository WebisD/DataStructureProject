import React from "react";
import { Animated } from 'react-native';
import Svg, { Line, G, Path } from 'react-native-svg';

class Arrow extends React.Component{
    render(){
        return(
            <Animated.View>
                <Svg height="50" width="50">
                    {(this.props.last > 0) ? <G
                        rotation={(Math.atan2(this.props.to[1] - this.props.from[1], this.props.to[0] - this.props.from[0]) * 180 / Math.PI)-135}
                        origin={`${this.props.to[0]}, ${this.props.to[1]}`}
                    >
                        <Path d={`M ${this.props.to[0]+4} ${this.props.to[1]+4} L ${this.props.to[0]-5} ${this.props.to[1]+5} L ${this.props.to[0]-4} ${this.props.to[1]-4} z`} fill={(this.props.colorArrow !== undefined) ? this.props.colorArrow : "black"} stroke={(this.props.colorArrow !== undefined) ? this.props.colorArrow : "black"} />
                    </G> : null}
                    
                    <Line
                        x1={this.props.from[0]}
                        y1={this.props.from[1]}
                        x2={this.props.to[0]}
                        y2={this.props.to[1]}
                        stroke={(this.props.colorArrow !== undefined) ? this.props.colorArrow : "black"}
                        strokeWidth="3"
                    />
                </Svg>
            </Animated.View>
        );
    }
};

export default Animated.createAnimatedComponent(Arrow);