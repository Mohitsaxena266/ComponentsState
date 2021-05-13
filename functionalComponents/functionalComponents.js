import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
const FunctionalComponents = (props) => {
  const [setvalue, getvalue] = useState(props.item);
  const changeState = () => {
    if (setvalue === 'changed value') {
      getvalue('again changed');
    } else {
      getvalue('changed value');
    }
  };
  return (
    <View>
      <Text>"value showed"{setvalue}</Text>
      <Button title=" F change State" onPress={() => changeState()} />
    </View>
  );
};
export default FunctionalComponents;
