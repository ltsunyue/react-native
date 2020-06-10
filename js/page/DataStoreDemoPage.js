import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import DataStore from "../expend/dao/DataStore";

class DataStoreDemoPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showText: '',
            value:''
        };
        this.dataDtore = new DataStore()
    }
    loadData(){
        let url = `https://api.github.com/search/repositories?q=${this.value}`;
        this.dataDtore.fetchDate(url)
            .then(data=>{
                console.log(data);
                let showText = `时间:${new Date(data.timestamp)}`;
                this.setState({
                    showText
                })
            })
    }
    render() {
        return (
            <View>
                <Text>离线缓存框架</Text>
                <View style={styles.cotainers}>
                    <TextInput
                        style={styles.cotainer}
                        onChangeText={text=>{
                            this.setState({
                                value: text
                            })
                        }}
                    />
                </View>
                <Text>{this.state.value}</Text>
                <Text>{this.state.showText}</Text>
                <Button
                    title='获取数据'
                    onPress={()=> this.loadData()}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    cotainer:{
        marginTop: 30,
        height: 40,
        width: '90%',
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    cotainers:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default DataStoreDemoPage;