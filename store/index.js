

import axios from 'axios'

export const state = () => ({

    port: []

})

export const actions = {
    getDummy({commit})
    {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => { commit('setDummy', res.data)
        })
    }
}

export const mutations = {
    setDummy(state,port)
    {
        state.port = port;
    }
}

export const getters = {
    dummmy(state)
    {
        return state.port
    }
}