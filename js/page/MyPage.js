import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";

function MyPage(){
    return (
        <View style={styles.cotainer}>
            <Text style={styles.welcone}>MyPage</Text>
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

export default MyPage;