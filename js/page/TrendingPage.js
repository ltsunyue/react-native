import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";

function TrendingPage(){
    return (
        <View style={styles.cotainer}>
            <Text style={styles.welcone}>TrendingPage</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cotainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc'
    },
    welcone:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default TrendingPage;