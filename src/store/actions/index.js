export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS'

export function createNewProduct(product) {
    return {
        type: CREATE_PRODUCT,
        payload: product,
    }
}

export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        payload: id,
    }
}

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAIL = 'GET_DATA_FAIL'

export function getProductData(currentCount) {
    return {
        type: GET_DATA_REQUEST,
        payload: currentCount
    }
}
