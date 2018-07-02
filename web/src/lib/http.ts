import * as qs from 'querystring'

const HOST = ''

export async function post (path: string, data: {}) {
    const res = await fetch(HOST + path, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const ret = await res.json()
    if (ret.err) {
        console.log(ret.err)
        throw new Error('network error')
    }
    return ret.data
}


export async function get (path: string, data?: any) {
    let query = ''

    if (data) {
        query = qs.stringify(data)
        if (query) {
            query = '?' + query
        }
    }

    const res = await fetch(HOST + path + query, {
        method: 'GET',
        credentials: 'same-origin'
    })

    const ret = await res.json()
    if (ret.err) {
        console.log(ret.err)
        throw new Error('network error')
    }
    return ret.data
}

