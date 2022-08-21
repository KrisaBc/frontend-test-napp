import { URL } from '../../../config/config'

export function fetchProductById(id) {
    return fetch(`${URL}/product/${id}`, {
        method: 'GET',
    })
}