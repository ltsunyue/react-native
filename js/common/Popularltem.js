import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";


class Popularltem extends Component {
    render() {
        const {item} = this.props;
        if( !item || !item['owner']) return null;
        let favorButton = (
            <TouchableOpacity
                style={{padding: 6}}
                onPress={()=>{}}
                underlayColor={'transparent'}
            >
                <FontAwesome
                    name={'star-o'}
                    size={20}
                    style={{color: 'red'}}
                />
            </TouchableOpacity>
        )
        return (
            <TouchableOpacity
                onPress={this.props.onSelect}
            >
                <View style={styles.call}>
                    <Text style={styles.title}>{item['full_name']}</Text>
                    <Text style={styles.tion}>{item.description}</Text>
                    <View style={styles.res}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Author:</Text>
                            <Image
                                style={{height: 22, width: 22}}
                                source={{uri: item['owner']['avatar_url']}}
                            />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Start:</Text>
                            <Text>{item['stargazers_count']}</Text>
                        </View>
                        {favorButton}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    res:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    call:{
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderRadius: 2,
        shadowColor:  'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2
    },
    title:{
        fontSize: 16,
        marginBottom: 2,
        color: '#212121'
    },
    tion:{
        fontSize: 14,
        marginBottom: 2,
        color: '#757575'
    }
});
export default Popularltem;