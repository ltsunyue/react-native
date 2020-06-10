import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {connect} from "react-redux";
import action from "../action";



class FavoritePage extends Component {
    render(){
        return (
            <View style={styles.cotainer}>
                <Text style={styles.welcone}>FavoritePage</Text>
                <Button
                    title={'变换颜色'}
                    style={styles.button}
                    onPress={()=> this.props.onThemeChange('orange')}
                />
            </View>
        );
    }
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
    },
    button:{
        backgroundColor: 'red',
        borderRadius: 20
    }
});
const mapDispatchToProps=dispatch=>({
    onThemeChange:theme=>dispatch(action.onThemeChange(theme))
})
export default connect(null, mapDispatchToProps)(FavoritePage);