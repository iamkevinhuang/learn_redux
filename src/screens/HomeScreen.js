import React, {useState} from 'react';
import {StyleSheet, Text, Button, TextInput} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';

const HomeScreen = ({value, handlePlus, handleMinus}) => {
    const [number, setNumber] = useState(0);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Hi From Home Screen. My Value Right Now : {value}</Text>
            <TextInput
                placeholder='Masukkan Angka'
                value={number}
                onChangeText={(currentNumber) => setNumber(currentNumber)}
            /> 
            <Button 
                title="Tambah"
                onPress={() => handlePlus(number)}
            />
            <Button 
                title="Kurang"
                onPress={() => handleMinus(number)}
            />
            {console.log(number)}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
    return {
        value: state.myValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: (number) => dispatch({type: 'PLUS_VALUE', payload: Number(number)}),
        handleMinus: (number) => dispatch({type: 'MINUS_VALUE', payload: Number(number)}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);