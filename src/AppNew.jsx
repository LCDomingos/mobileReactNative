import React from 'react';
import Primeiro from './components/Primeiro';
import {View, StyleSheet} from 'react-native';
import MaxMin from './components/MaxMin';

function NewApp (){
    return (

        <View style={style.AppNew}>

            <Primeiro/>
            <MaxMin max={100} min={100}/>
        </View>
    )
}

const style = StyleSheet.create({
    AppNew: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default NewApp;
