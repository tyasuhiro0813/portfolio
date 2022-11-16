import { auth } from '~/plugins/firebase.js'

export const state = () => ({
    uid: "",
    uname: ""
})

export const mutations = {
    setUid(state, id){
        state.uid = id
    },
    setUname(state, name){
        state.uname = name
    }
}

export const actions = {
    
}

export const getters = {
    
}