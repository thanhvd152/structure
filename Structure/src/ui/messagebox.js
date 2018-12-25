import React, { Component } from 'react';
import { Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Spinner } from 'native-base';
import api from '../api';
import { Color } from '../themes/color';
import { connect } from 'react-redux'

import * as Animatable from 'react-native-animatable';


class Messagebox extends Component {


    componentWillReceiveProps(nextState) {
        if (!nextState.showMessage) {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        } else {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        }
    }


    handleBackPress = () => {
        api.hideMessage()
        return true;
    }


    render() {
        console.log(this.props.showMessage)
        let { titleMes, contentMess } = this.props
        if (this.props.showMessage) {
            return (
                <Container
                    style={{
                        width: Object.common.getWidth,
                        height: Object.common.getHeight,
                        position: 'absolute',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10

                    }}>
                    <Animatable.View animation="bounceIn" iterationCount={1} direction="alternate" style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: Object.common.getHeight / 3 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: '#DDDDDD', paddingBottom: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 16 }}>{titleMes ? titleMes : 'Thông báo'}</Text>
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ fontSize: 15, alignSelf: 'center', lineHeight: 23 }}>
                                {contentMess}
                            </Text>
                        </View>
                        <View style={{ marginTop: 20, justifyContent: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => { api.hideMessage() }}
                                style={{ alignSelf: 'center', backgroundColor: Color.colorPrimari, height: 35, padding: 8, justifyContent: 'center', alignItems: 'center', borderRadius: 5, minWidth: 80 }}
                            >
                                <Text style={{ color: '#fff' }} >{'Đóng'}</Text>
                            </TouchableOpacity>

                        </View>
                    </Animatable.View>
                </Container>
            )
        } else {
            return null
        }
    }
}

mapStateToProps = (state) => {
    return {
        showMessage: state.uiReducer.showMessage,
        contentMess: state.uiReducer.contentMess,
        titleMes: state.uiReducer.titleMes

    }
}

export default connect(mapStateToProps)(Messagebox)