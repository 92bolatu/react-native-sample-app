import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {Index} from './src/000-Index';
import {Composition} from "./src/001-Composition";


const StackRoute = {
    Index: Index,
    Composition: Composition
};
const StackConfig = {
    mode: 'card',
    initialRouteName: 'Index',
};

export default createStackNavigator(StackRoute, StackConfig);