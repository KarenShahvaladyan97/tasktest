import {all, fork} from 'redux-saga/effects'
import product from "../sagas/products";

export default function* watchers() {
    yield all([
        product
    ].map(fork))
}
