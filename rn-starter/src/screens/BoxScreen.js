import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.parentStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>

    );
};

const styles = StyleSheet.create({
    parentStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection : 'row',
        justifyContent : 'space-between'
        
    },
    textOneStyle:{
     height: 50,
     width: 50,
     backgroundColor: 'red'
    },
    textTwoStyle:{
     height: 50,
     width: 50,
     backgroundColor: 'green',
     alignSelf: 'flex-end'
   
    },
    textThreeStyle:{
     height: 50,
     width: 50,
     backgroundColor: 'pink'
    }
});

export default BoxScreen;