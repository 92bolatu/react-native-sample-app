import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import IndexScreen from './src/IndexScreen';
import SourceScreen from "./src/SourceScreen";
import Indexes from './src/Indexes';

const StackRoute = {
    Index: IndexScreen,
    Source: SourceScreen,
};

Object.keys(Indexes).forEach(k => StackRoute[k] = Indexes[k]);

const StackConfig = {
    mode: 'card',
    initialRouteName: 'Index',
};

export default createStackNavigator(StackRoute, StackConfig);