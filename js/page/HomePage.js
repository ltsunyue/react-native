import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
import NavigationUtil from "../navigator/NavigationUtil";

class HomePage extends Component {
    constructor(props){
        super(props);
        console.disableYellowBox = true; // 去除警告
    }
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return (<DynamicTabNavigator />);
    }
}

const styles = StyleSheet.create({
    cotainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcone:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default HomePage;