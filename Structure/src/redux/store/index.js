import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/rootReducer'
import logger from 'redux-logger'
const configStore = () => {
    const store = createStore(rootReducer, applyMiddleware(logger))
    return store
}
export default configStore