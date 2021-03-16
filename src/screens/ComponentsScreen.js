import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//function that return JSX
const ComponentsScreen = () =>{
    const name = <Text>My name is Kunev</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={styles.subHeaderStyle}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize:20
    }
    
});

export default ComponentsScreen;