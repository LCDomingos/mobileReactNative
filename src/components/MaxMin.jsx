import React from 'react'
import {Text} from 'react-native';

const MaxMin = (props) => {
    let min = props.min;
    let max = props.max;
    let igual = false;

    if(min < max){

    }else if(min === max){
        igual = true;

    }else{
        // valor min é maior que max
    }

  return (
    igual ? <Text>O valor {props.max} e {props.min} são iguais</Text>
        : <Text>O valor {props.max} é maior que valor {props.min}</Text>

  )
}

export default MaxMin