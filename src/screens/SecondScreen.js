import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';

const SecondScreen = ({value}) => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Hi From Second Screen. My Value Right Now : {value}</Text>
        </SafeAreaView>
    )
};

const mapStateToProps = (state) => {
    return {
        value: state.myValue
    }
}

const styles = StyleSheet.create({});

export default connect(mapStateToProps)(SecondScreen);