import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, Form, Item, Input, Label, Button, Spinner } from 'native-base';
import api from '../api';
class Loading extends Component {

    render() {
        if (this.props.showLoading) {
            return (
                <View style={{ height: Object.common.getHeight, width: Object.common.getWidth, backgroundColor: 'transparent', position: 'absolute', zIndex: 10 }} >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => { api.pop() }}
                        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' }} >
                        <Spinner color='red' />
                    </TouchableOpacity>

                </View>
            );
        } else {
            return null
        }
    }
}

mapStateToProps = (state) => {
    return {
        showLoading: state.uiReducer.showLoading,
    }
}

export default connect(mapStateToProps)(Loading)