import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {Index} from './src/000-Index';
import {Composition} from "./src/001-Composition";
import SourceScreen from "./src/SourceScreen";
import {SnackbarScreen} from "./src/sample/SnackbarScreen";


const StackRoute = {
    Index: Index,
    Source: SourceScreen,
    Snackbar:SnackbarScreen,
    Composition: Composition
};
const StackConfig = {
    mode: 'card',
    initialRouteName: 'Snackbar',
};

export default createStackNavigator(StackRoute, StackConfig);