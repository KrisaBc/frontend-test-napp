import { URL } from '../../../config/config'

export function fetchProductsToCart({ id, colorCode, storageCode }) {

    return fetch(`${URL}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, colorCode, storageCode })
    })
}