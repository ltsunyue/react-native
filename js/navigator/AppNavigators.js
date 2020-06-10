import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomePage from "../page/HomePage.js";
import WelcomePage from "../page/WelcomePage.js";
import DataStoreDemoPage from "../page/DataStoreDemoPage";


const InitNavigator = createStackNavigator(
    {
        WelcomePage:{
            screen: WelcomePage,
            navigationOptions:{
                header: null, //隐藏头部
            },
        },
    }
);

const MainNavigator = createStackNavigator(
    {
        HomePage:{
            screen: HomePage,
            navigationOptions:{
                header: null, //隐藏头部
            },
        },
        DataStoreDemoPage:{
            screen: DataStoreDemoPage,
            navigationOptions:{
                header: null, //隐藏头部
            },
        }
    }
);

export default createAppContainer(createSwitchNavigator(
        {
            Init: InitNavigator,
            Main: MainNavigator,
        },{
            navigationOptions:{
                header: null,
            }
        }
    )
)
