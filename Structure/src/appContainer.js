
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Home from './containers/home'
import Login from './containers/login';
import { Icon } from 'native-base'
import Drawer from './components/drawer'
import { color, Color } from './themes/color'
import { Loading, ConfirmBox, Messagebox } from './ui'

let firstRouter = false


const RootTab = createMaterialBottomTabNavigator({
    tabhome: {
        screen: Home,
        navigationOptions: {
            // tabBarColor: 'red',
            tabBarLabel: 'thẻ của bạn',
            tabBarIcon: ({ focused, horizontal, tintColor }) => (<Icon style={{ color: tintColor }} name='md-home' />)
        }
    },
    tabLogin: {
        screen: Login,
        navigationOptions: {
            // tabBarColor: 'blue',
            tabBarLabel: 'thẻ của bạn',
            tabBarIcon: ({ focused, horizontal, tintColor }) => (<Icon style={{ color: tintColor }} name='md-home' />)
        }
    },
    tabLogin1: {
        screen: Login,
        navigationOptions: {
            // tabBarColor: 'red',
            tabBarLabel: 'thẻ của bạn',
            tabBarIcon: ({ focused, horizontal, tintColor }) => (<Icon style={{ color: tintColor }} name='md-home' />)
        }
    },
    tabLogin2: {
        screen: Login,
        navigationOptions: {
            // tabBarColor: 'green',
            tabBarLabel: 'thẻ của bạn',
            tabBarIcon: ({ focused, horizontal, tintColor }) => (<Icon style={{ color: tintColor }} name='md-home' />)
        }
    },

}, {
        shifting: true,
        initialRouteName: 'tabhome',
        activeColor: Color.colorPrimari,
        inactiveColor: 'gray',
        barStyle: { backgroundColor: '#fff' },
        backBehavior: 'none'
    });






const RootStack = createStackNavigator({
    home: {
        screen: Home,
    },
    login: {
        screen: Login
    },
    bottomTab: {
        screen: RootTab
    }
}, {
        initialRouteName: 'bottomTab',
        headerMode: 'float'
    })

const RootDrawer = createDrawerNavigator({
    Home: {
        screen: RootStack,
    },

}, {
        contentComponent: props => <Drawer {...props} />
    });

const RootApp = createAppContainer(RootDrawer)

export default class AppContainer extends Component {

    handleNavigationChange = (prevState, newState, action) => {
        if (newState.index == 0) {
            firstRouter = true
        } else {
            firstRouter = false
        }
        ///handle backAndroid///
    }

    render() {
        return (
            <View style={{ flex: 1 }}>


                {/* Container */}
                <RootApp
                    onNavigationStateChange={this.handleNavigationChange}
                    uriPrefix="/app/thanhvd" />

                {/* UI */}
                <ConfirmBox />
                <Loading />
                <Messagebox />

            </View>)
    }
}
