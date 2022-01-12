<template>
    <div class="row mt-5 justify-content-center">
        <div class="col-4 bloque_codigo rounded">
            <samp>
                {
                <ul class="ml-3">
                    <li v-for="(item, index) in this.respuesta" v-bind:key="index" class="mb-2">
                        <span class="key font-weight-bold">{{ index }}:</span> <span class="string">{{ item }}</span> 
                    </li>     
                </ul>       
                }
            </samp>
        </div>
        <div class="col-6 ml-4">
            <GoogleMap :lat_recibida="latitud" :lng_recibida="longitud" :key="keyMapa" v-if="boolComponente" />
        </div>
        <!-- Loader -->
        <div class="vld-parent">
            <loading :active.sync="isLoading"
                    :can-cancel="true"
                    :on-cancel="onCancel"/>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

// Mapa lo dejo por separado, gatillado por este componente
import GoogleMap from './_mapaGoogle.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
    props: {
		busqueda: {
			type: String,
			default: null,
			required: true
		},
		onDemand: {
			type: Number,
			default: 0
		}
	},
    methods: {
        // Consulto API
		consultarApi: function () {
            this.isLoading = true
			this.axios.get(this.urlApi + this.busqueda, { 
                // Opciones
            }).then(response => {
                if(response.data.status === 'success'){
                    // Seteo longitud y latitud
                    this.latitud = response.data.lat
                    this.longitud = response.data.lon
                    // Reconstruyo componente de mapa
                    this.keyMapa += 1
                    this.boolComponente = true
                } else {                    
                    this.boolComponente = false
                }
                // Guardo data para mostrar en pantalla
                this.respuesta = response.data
                this.isLoading = false
            })
            .catch(error => {
                console.log(error.response)   
                this.isLoading = false  
                this.boolComponente = false
            })
		},
        onCancel() {
            console.log('User cancelled the loader.')
        }
    },
	mounted () {
        // Cargar API siempre y cuando haya sido solicitado
		if (this.onDemand === 1) {
            // Codigo
            this.consultarApi()
		}
    },
	data () {
		return {
            respuesta: [],
            // Longitud y latitud para poder pasarlo al mapa de google
            latitud: null,
            longitud: null,
            // Deconstruccion de mapa
            keyMapa: 0,
            // Loader        
            isLoading: false,
            // Determino si construir o no el componente inicialmente
            boolComponente: false
        }
	},
    components: {
        GoogleMap,
        Loading
    },
	computed: {
        ...mapState(['urlApi'])
	}
}
</script>