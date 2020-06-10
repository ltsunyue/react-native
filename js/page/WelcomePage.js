import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";
import NavigationUtil from "../navigator/NavigationUtil";
import SplashScreen from "react-native-splash-screen";

class WelcomePage extends Component {
    constructor(props){
        super(props);
        console.disableYellowBox = true; // 去除警告
    }
    componentDidMount() {
        this.timer = setTimeout(()=>{
            SplashScreen.hide();
            NavigationUtil.resetToHomePage(this.props);
        },2000)
    }
    componentWillMount(){
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.contation}>
                <Text>WelcomePage</Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    contation: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomePage;

