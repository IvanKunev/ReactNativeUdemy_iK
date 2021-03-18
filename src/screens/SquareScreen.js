import React, { useReducer } from 'react';
import {View, StyleSheet,Text, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red: number, blue: number, green: number};
    // action === {colorToChange: 'red' || 'blue' || 'green', amount: 10 || - 10};

    switch (action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
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
        onIncrease={() => runMyReducer({ colorToChange: 'red', amount: COLOR_INCREMENT })} 
        onDecrease={() => runMyReducer({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT }) } 
        />
        <ColorCounter 
        color="Blue"
        onIncrease={() => runMyReducer({ colorToChange: 'blue', amount: COLOR_INCREMENT })} 
        onDecrease={() => runMyReducer({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
        />
        <ColorCounter 
        color="Green"
        onIncrease={() => runMyReducer({ colorToChange: 'green', amount: COLOR_INCREMENT })} 
        onDecrease={() => runMyReducer({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })} 
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