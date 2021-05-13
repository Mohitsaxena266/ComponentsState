/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ClassComponents from './classComoponents/classcomponents';
import FunctionalComponents from './functionalComponents/functionalComponents';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import Flex from './flexbox/flex';
const Components: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>This Is For Components Explain </Text>

          {/* <ClassComponents classname="hello data" /> */}
          <FunctionalComponents item="This is comming from props" />
          {/* <Flex /> */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Components;
