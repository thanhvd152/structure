let initialState = {
    showLoading: false,
    showConfirmBox: false,
    showMessage: false,
    contentConf: '',
    titleConf: '',
    btnHuy: () => { },
    btnOK: () => { },
    titlebntHuy: '',
    titlebntOK: '',
    titleMes: '',
    contentMess: ''

}


const closerOther = (type) => {
    let obj = {
        showLoading: type == 'SHOW_LOADING' ? true : false,
        showConfirmBox: type == 'SHOW_CONFIRM_BOX' ? true : false,
        showMessage: type == 'SHOW_MESSAGE' ? true : false,
    }
    return obj
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_LOADING':
            return Object.assign({}, state, closerOther('SHOW_LOADING'))
        case 'HIDE_LOADING':
            return Object.assign({}, state, { showLoading: false })
        case 'SHOW_CONFIRM_BOX':
            return Object.assign({}, state, { contentConf: action.content, titleConf: action.title, btnHuy: action.btnHuy, btnOK: action.btnOK, titlebntHuy: action.titlebntHuy, titlebntOK: action.titlebntOK, ...closerOther('SHOW_CONFIRM_BOX') })
        case 'SHOW_MESSAGE':
            return Object.assign({}, state, { contentMess: action.content, titleMes: action.title, ...closerOther('SHOW_MESSAGE') })
        case 'HIDE_MESSAGE': return Object.assign({}, state, { showMessage: false })
        case 'HIDE_CONFIRM_BOX': return Object.assign({}, state, { showConfirmBox: false })
        default:
            return state
    }
}

export default uiReducer;