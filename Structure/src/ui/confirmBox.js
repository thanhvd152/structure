import React, { Component } from 'react';
import { Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Spinner } from 'native-base';
import api from '../api';
import { Color } from '../themes/color';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
class ConfirmBox extends Component {

    componentWillReceiveProps(nextState) {
        if (!nextState.showConfirmBox) {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        } else {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        }
    }


    handleBackPress = () => {
        api.hideConfirm()
        return true;
    }

    render() {
        let { titlebntHuy, titlebntOK, contentConf, titleConf } = this.props
        if (this.props.showConfirmBox) {
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
                    <Animatable.View animation="bounceIn" iterationCount={1} direction="alternate" style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: '#DDDDDD', paddingBottom: 5 }}>
                            <Text style={{ fontWeight: '400', fontSize: 16 }}>{titleConf}</Text>
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ fontSize: 15, alignSelf: 'center', lineHeight: 23 }}>
                                {contentConf}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => { this.props.btnHuy(); api.hideConfirm() }}
                                style={{ backgroundColor: '#DDDDDD', height: 35, padding: 8, justifyContent: 'center', alignItems: 'center', borderRadius: 5, minWidth: 80 }}
                            >
                                <Text >{titlebntHuy ? titlebntHuy : 'Từ chối'}</Text>
                            </TouchableOpacity>
                            <Text style={{ width: 25 }} />
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => { this.props.btnOK(); api.hideConfirm() }}
                                style={{ backgroundColor: Color.colorPrimari, padding: 8, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 5, minWidth: 80 }}
                            >
                                <Text style={{ color: 'white' }}>{titlebntOK ? titlebntOK : 'Đồng ý'}</Text>
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
        showConfirmBox: state.uiReducer.showConfirmBox,
        contentConf: state.uiReducer.contentConf,
        titleConf: state.uiReducer.titleConf,
        btnHuy: state.uiReducer.btnHuy,
        btnOK: state.uiReducer.btnOK,
        titlebntHuy: state.uiReducer.titlebntHuy,
        titlebntOK: state.uiReducer.titlebntOK
    }
}

export default connect(mapStateToProps)(ConfirmBox)