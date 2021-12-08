

import axios from 'axios'

export const state = () => ({

    port: [],
    cities: [],
    porto: []

})

export const actions = {
    getDummy({ commit }) {
        axios.get('https://api.modernegy.tech/api/v1/companies/2').then(res => {
            commit('setDummy', res.data)
        })
    },
    getCity({ commit }) {
        axios.get('https://api.modernegy.tech/api/v1/companies').then(res => {
            commit('setCity', res.data.data)
        })
    },
    getPorts({ commit }) {
        axios.get('https://api.modernegy.tech/api/v1/folios').then(res => {
            commit('setPort', res.data.data)
        })
    }
}

export const mutations = {
    setDummy(state, port) {
        state.port = port;
    },
    setCity(state, cities) {
        state.cities = cities;
    },
    setPort(state, porto) {
        state.porto = porto;
    }
}

export const getters = {
    dummmy(state) {
        return state.port
    },
    City(state) {
        return state.cities
    },
    Ports(state) {
        return state.porto;
    }
}