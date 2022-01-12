import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// URL de API
        urlApi: 'http://ip-api.com/json/'        
	},
	mutations: {},
	actions: {},
	getters: {}
})