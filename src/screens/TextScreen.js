import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [pass, setPass] = useState('');

    return ( 
    <View>
        <Text>Enter Password:</Text>
        <TextInput 
         style={styles.input}
         autoCapitalize="none"
         autoCorrect={false}
         value={pass}
         onChangeText={newText => setPass(newText)}
        />
        {pass.length < 4 ? <Text>Password must be longer</Text> : null}
    </View>
    );
};

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth:1
    }
});

export default TextScreen;