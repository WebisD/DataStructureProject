import React from "react";
import { Animated} from 'react-native';
import Svg, { Text, Ellipse } from 'react-native-svg';
import Arrow from './arrow.js';


class Elipse extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Animated.View>
                <Svg height="90%" width="100%">
                    <Arrow colorArrow={(this.props.index === 0) ? this.props.colorArrow : undefined} from={[138,255]} to={[215,35]} last={1}/>
                    <Arrow colorArrow={(this.props.index === 1) ? this.props.colorArrow : undefined} from={[138,255]} to={[215,85]} last={1}/>
                    <Arrow colorArrow={(this.props.index === 2) ? this.props.colorArrow : undefined} from={[138,255]} to={[215,135]} last={1}/>
                    <Arrow colorArrow={(this.props.index === 3) ? this.props.colorArrow : undefined} from={[138,255]} to={[215,185]} last={1}/>
                    <Arrow colorArrow={(this.props.index === 4) ? this.props.colorArrow : undefined} from={[138,255]} to={[215,235]} last={1}/>
                    <Arrow colorArrow={(this.props.index === 5) ? this.props.colorArrow : undefined} from={[140,255]} to={[215,285]} last={1}/>
                    <Arrow colorArrow={(this.props.index === 6) ? this.props.colorArrow : undefined} from={[140,255]} to={[215,325]} last={1}/>
                    <Arrow colorArrow={(this.props.index === 7) ? this.props.colorArrow : undefined} from={[140,255]} to={[215,375]} last={1}/>
                    <Arrow colorArrow={(this.props.index === 8) ? this.props.colorArrow : undefined} from={[140,255]} to={[215,425]} last={1}/>
                    <Arrow colorArrow={(this.props.index === 9) ? this.props.colorArrow : undefined} from={[140,255]} to={[215,475]} last={1}/>
                    
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
                        {this.props.text}
                        </Text>
                    </Svg>
                </Svg>
            </Animated.View>
        );
    }
};

export default Animated.createAnimatedComponent(Elipse);