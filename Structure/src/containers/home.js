import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import api from '../api'
export default class Home extends Component {
    constructor(props) {
        super(props)
        api.setNavigateRouter(this.props.navigation)
    }


    // static navigationOption = ({ navigation }) => ({
    //     headerTitle: 'thanhvd',
    //     headerStyle: { backgroundColor: 'red' },
    //     headerTitleStyle: { color: '#fff' },
    //     headerLeft: (<TouchableOpacity
    //         style={{ marginLeft: 10 }}
    //         onPress={() => { navigation.navigate('login') }}
    //     >
    //         <Text>thanhvd</Text>
    //     </TouchableOpacity>)

    // })

    render() {
        console.log(Object.common.getWidth)
        return (
            <View style={styles.container}>
                <Text onPress={() => { api.showMessage('aaaa') }}>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});