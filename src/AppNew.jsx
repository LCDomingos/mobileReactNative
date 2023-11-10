import React from 'react';
import Primeiro from './components/Primeiro';
import {View, StyleSheet} from 'react-native';
import MaxMin from './components/MaxMin';
import Contador from './components/Contador';

function NewApp (){
    return (

        <View style={style.AppNew}>

            <Primeiro/>
            <MaxMin max={100} min={100}/>

            
        <Contador inicial={100} passo={5}/>
        <Contador/>

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
