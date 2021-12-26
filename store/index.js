

import axios from 'axios'

export const state = () => ({

    port: [],
    cities: [],
    porto: [],
    services: [],
    modal: false


})

export const actions = {

    async getCity({ commit }) {
        await axios.get('https://api.modernegy.tech/api/v1/companies').then(res => {
            commit('setCity', res.data.data)
        })
    },
    async getPorts({ commit }) {
        await axios.get('https://api.modernegy.tech/api/v1/folios').then(res => {
            commit('setPort', res.data.data)
        })
    },
    async getServices({ commit }) {
        await axios.get('https://api.modernegy.tech/api/v1/services').then(res => {
            commit('setServices', res.data.data)
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
    },
    setServices(state, services) {
        state.services = services;
    },
    modelo(state) {
        state.modal = !state.modal;
        console.log(state.modal)
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
    },
    Services(state) {
        return state.services
    },
    getModal(state) {
        return state.modal;
    }
}