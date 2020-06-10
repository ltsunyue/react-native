import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from "react-native";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import {connect} from "react-redux";
import actions from "../action/index";
import Popularltem from "../common/Popularltem";

const Url = 'https://api.github.com/search/repositories?q=';
const query_str = '&sort=stars';
// import NavigationUtil from "../navigator/NavigationUtil";

class PopularPage extends Component {
    constructor(props){
        super(props);
        console.disableYellowBox = true; // 去除警告
        this.tabNames=['java','android', 'ios', 'react', 'tract', 'Native', 'php'];
    }
    _genTabs(){
        const tabs = {};
        this.tabNames.forEach((item, index)=>{
            tabs[`tab${index}`] = {
                screen: props => <PopularTabPage {...props} tabLanel={item} />,
                navigationOptions:{
                    title: item
                }
            }
        });
        return tabs;
     }
    render() {
        const TabNvigator = createAppContainer(createMaterialTopTabNavigator(
            this._genTabs(),{
                tabBarOptions:{
                    indicatorStyle:{
                        backgroundColor: "#fff",
                        height:2
                    },
                    style:{
                      backgroundColor: '#a67'
                    },
                    tabStyle: styles.tabstyle,
                    upperCaseLabel: false,
                    scrollEnabled: true,
                    labelStyle:{
                        fontSize: 13,
                        marginTop: 6,
                        marginBottom: 6
                    }
                }
            }
        ));
        return (
            <View style={styles.cotainer}>
                <TabNvigator />
                {/*<Button*/}
                {/*    title={'离线缓存框架'}*/}
                {/*    onPress={()=>{*/}
                {/*        NavigationUtil.goPage({},'DataStoreDemoPage')*/}
                {/*        // this.props.navigation.navigate('DataStoreDemoPage')*/}
                {/*    }}*/}
                {/*/>*/}
            </View>
        );
    }
}

class PopularTab1 extends Component<Props>{
    constructor(props){
        super(props);
        const {tabLanel} = this.props;
        this.storeName = tabLanel
    }
    genFetchUrl(key){
        return Url + key + query_str;
    }
    componentDidMount() {
        this.loadData();
    }
    onSelect(){
        console.log(11);
    }
    renderTtem(data){
        const item = data.item;
        return <Popularltem item={item} onSelect={this.onSelect}/>
        // return <Text>1</Text>
    }
    loadData(){
        const {onLoadPopularData} = this.props;
        const url = this.genFetchUrl(this.storeName);
        onLoadPopularData(this.storeName, url)
    }
    render(){
        const {popular} = this.props;
        let store = popular[this.storeName];
        if(!store){
           store = {
               items: [],
               isLoading: false
           }
        }
        console.log(store);
        return(
            <View>
                <FlatList
                    data={store.items}
                    keyExtractor={item=>''+item.id}
                    renderItem={data=>this.renderTtem(data)}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            titleColor={'red'}
                            colors={['red']}
                            refreshing={store.isLoading}
                            onRefresh={()=>this.loadData()}
                            tintColor={'red'}
                        />
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    popular: state.popular
});
const mapDispatchToProps = dispatch => ({
    onLoadPopularData: (storeName, url)=>{
        dispatch(actions.onLoadPopularData(storeName, url))
        // actions.onLoadPopularData(storeName, url)
    }
});
const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab1);

const styles = StyleSheet.create({
    cotainer:{
        flex: 1,
        marginTop:10,
        backgroundColor: '#fff'
    },
    welcone:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    tabstyle:{
        minWidth: 50
    }
});

export default PopularPage;