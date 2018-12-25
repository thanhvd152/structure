import { Component } from 'react'
import { Dimensions } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
let nav = null
store = null
let api = {
    setStore: (newStore) => {
        store = newStore
    },
    setNavigateRouter: (navigation) => {
        nav = navigation
        Component.prototype.navigateRouter = (routeName, params, action) => {
            const navigateAction = NavigationActions.navigate({
                routeName,
                params,
                action
            })
            navigation.dispatch(navigateAction)
        }
        Component.prototype.resetRouter = (route, index) => {
            const ResetAction = StackActions.reset({
                index: index,
                actions: [NavigationActions.navigate({ routeName: route })],
            })
            navigation.dispatch(ResetAction)
        }


        Component.prototype.popRouter = (num = 1) => {
            const pop = StackActions.reset({
                n: num,
            })
            navigation.dispatch(pop)
        }
    },
    getNavigationState: () => {
        return nav;
    },
    showLoading: () => {
        store.dispatch({ type: 'SHOW_LOADING' })
    },
    hideLoading: () => {
        store.dispatch({ type: 'HIDE_LOADING' })
    },
    showMessage: (content, title) => {
        store.dispatch({ type: 'SHOW_MESSAGE', content, title })
    },
    hideMessage: (content, title) => {
        store.dispatch({ type: 'HIDE_MESSAGE' })
    },
    showConfirm: (content, title, btnHuy, btnOK, titlebntHuy, titlebntOK) => {
        store.dispatch({ type: 'SHOW_CONFIRM_BOX', content, title, btnHuy, btnOK, titlebntHuy, titlebntOK })
    },
    hideConfirm: () => {
        store.dispatch({ type: 'HIDE_CONFIRM_BOX' })
    },
}

export default api;