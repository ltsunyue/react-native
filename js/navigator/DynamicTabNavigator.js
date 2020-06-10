import React from 'react';
import PopularPage from "../page/PopularPage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TrendingPage from "../page/TrendingPage";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyPage from "../page/MyPage";
import FavoritePage from "../page/FavoritePage";
import Entypo from "react-native-vector-icons/Entypo";

import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator, BottomTabBar} from "react-navigation-tabs";
import {connect} from "react-redux";

const TABS = {
    PopularPage:{
        screen:PopularPage,
        navigationOptions:{
            tabBarLabel:'最热',
            tabBarIcon:({tintColor, focused})=>(
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    TrendingPage:{
        screen:TrendingPage,
        navigationOptions:{
            tabBarLabel:'趋势',
            tabBarIcon:({tintColor, focused})=>(
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            tabBarLabel:'收藏',
            tabBarIcon:({tintColor, focused})=>(
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    FavoritePage:{
        screen:FavoritePage,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor, focused})=>(
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    }
};
class DynamicTabNavigator extends React.Component{
    constructor(props){
        super(props);
        console.disableYellowBox = true;
    }
    _tabNavigation(){
        if(this.Tabs){
            return this.Tabs
        }
        const {PopularPage,FavoritePage,TrendingPage,MyPage} = TABS;
        const tabs = {PopularPage,FavoritePage,TrendingPage,MyPage};
        return this.Tabs = createAppContainer(createBottomTabNavigator(
            tabs,{
                tabBarComponent: props => {
                    return <BottomTabBar
                        {...props}
                        activeTintColor={this.props.theme}
                    />
                }
            }
        ))
    }
    render(){
        const Tab = this._tabNavigation();
        return (
            <Tab />
        )
    }
}

const mapStateToProps=state=>({
   theme: state.theme.theme
});
export default connect(mapStateToProps)(DynamicTabNavigator)
