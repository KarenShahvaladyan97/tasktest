import {call, put, takeLatest} from 'redux-saga/effects'
import {CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "../actions";
import * as api from "../../api";

function* getProducts({payload}) {
    try {
        const data = yield call(api.getProducts, payload)
        yield put({
            type: GET_DATA_SUCCESS,
            payload: {
                data,
                currentCount: payload + 10,
            }
        })
    } catch (e) {console.log('handleGetDataRequest', e)}

}

function* createNewProduct({payload}) {
    try {
        const data =  yield call(api.createProduct,payload)
        console.log(data)
        yield put({
            type: CREATE_PRODUCT_SUCCESS,
            payload: {data}
        })

    } catch (e) { console.log('handleCreateNewProduct',e)}
}

function* deleteProduct({payload}) {
    try {
        yield call(api.deleteProduct(payload))
    } catch (e) {console.log('handleDeleteProduct',e)}
}

export default function* watcher() {
    yield takeLatest(GET_DATA_REQUEST, getProducts)
    yield takeLatest(CREATE_PRODUCT, createNewProduct)
    yield takeLatest(DELETE_PRODUCT, deleteProduct)
}
