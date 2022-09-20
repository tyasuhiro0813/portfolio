import { auth } from '~/plugins/firebase.js'

export const state = () => ({
    uid: ""
})

export const mutations = {
    setUid(state, id){
        state.uid = id
    }
}

export const actions = {
    
}

export const getters = {
    
}