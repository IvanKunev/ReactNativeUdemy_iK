import React, { useReducer } from 'react';
import {View, StyleSheet,Text, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red: number, blue: number, green: number};
    // action === {type: 'change_red' || 'change_blue' || 'change_green', payload: 10 || - 10};

    switch (action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        default:
                return state;
    }
};

const SquareScreen =() => {

    const [state, runMyReducer] = useReducer(reducer, {red: 0, blue: 0, green: 0});
    const {red, green, blue} = state;

    return (
    <View>
        <ColorCounter 
         color="Red"
        onIncrease={() => runMyReducer({ type: 'change_red', payload: COLOR_INCREMENT })} 
        onDecrease={() => runMyReducer({ type: 'change_red', payload: -1 * COLOR_INCREMENT }) } 
        />
        <ColorCounter 
        color="Blue"
        onIncrease={() => runMyReducer({ type: 'change_blue', payload: COLOR_INCREMENT })} 
        onDecrease={() => runMyReducer({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
        />
        <ColorCounter 
        color="Green"
        onIncrease={() => runMyReducer({ type: 'change_green', payload: COLOR_INCREMENT })} 
        onDecrease={() => runMyReducer({ type: 'change_green', payload: -1 * COLOR_INCREMENT })} 
        />
        <View 
        style={{
             height: 150,
             width: 500, 
             backgroundColor:`rgb(${state.red},${state.green},${state.blue})`
             }}
             />
    </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;