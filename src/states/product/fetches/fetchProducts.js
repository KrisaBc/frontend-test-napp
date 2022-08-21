import { URL } from '../../../config/config'

export function fetchProducts() {
    return fetch(`${URL}/product`, {
        method: 'GET',
    })
}