import React from "react";
import { Animated} from 'react-native';
import Quadrado from '../src/square.svg';
import Svg, { Text, Line} from 'react-native-svg';
import styles from './styles.js';
import Arrow from './arrow.js';

class Square extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <Animated.View  style={styles.Square} opacity={this.props.opa}>
                <Svg height="50" width="137" viewBox="0 0 80 50" style={{position: 'relative', marginLeft: -30}}>
                    <Svg height="50" width="80">
                        <Quadrado height="50" width="80" fill={(this.props.colorC === undefined) ? null : this.props.colorC}/>
                        <Text
                            fill="black"
                            stroke="purple"
                            fontSize="20"
                            fontWeight="bold"
                            x="50%" y="65%" 
                            dominant-baseline="middle" 
                            text-anchor="middle"
                            textAnchor="middle"
                        >
                        {this.props.text}
                        </Text>
                    </Svg>
                    {(this.props.ind != 0) ? <Arrow from={[10,35]} to={[-19,35]} last={1}/> 
                        : 
                        <Line x1="16" x2="0" y2="50" stroke="black"/>}
                    {(this.props.isLast > 0) ? <Arrow from={[70,15]} to={[99,15]} last={1}/> 
                        :
                        <Line x1="80" y1="-2.18557e-08" x2="63.5" y2="50" stroke="black"/>}
                </Svg>
            </Animated.View>
        );
    }
};

export default Animated.createAnimatedComponent(Square);