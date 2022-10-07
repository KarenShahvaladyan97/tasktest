export const getProducts = async (currentCount) => {
    return fetch(`https://api.escuelajs.co/api/v1/categories/2/products?offset=${currentCount}&limit=10`)
        .then((response) => response.json())
}

export function createProduct(body) {
    return fetch(`https://api.escuelajs.co/api/v1/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body
    }).then(response => response.json())
}

export function deleteProduct(id) {
    return fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
}


