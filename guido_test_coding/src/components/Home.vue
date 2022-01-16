<template>
  <!-- Contenedor principal -->
  <div class="content">
    <div class="row justify-content-center">
        <div class="col-3">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="IP/Dominio" aria-label="IP/Dominio" aria-describedby="Buscador" v-model="txt_busqueda">
          </div>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-primary" v-on:click="realizarBusqueda()"><i class="fas fa-search"></i> Buscar</button>
        </div>
    </div>
    <!-- Componente -->
    <Resultado :busqueda="txt_busqueda" :onDemand="cargarComponente" :key="keyComponente" v-on:recibirRespuesta="procesarRespuesta"/>    
    <!-- Componente para mensajes -->
    <ErrorComponent :key="keyError" :mensaje="mensajeError" :tipo="tipoRespuesta" :opcional="varOpcional"/>
  </div>
</template>

<script>
// Componente donde se consultará API y se desplegará resultado
import Resultado from './_resultado.vue'
import ErrorComponent from './_errorComponent.vue'

export default {
	mounted () {},
  methods: {
    // Realizar busqueda al gatillar botón
    realizarBusqueda: function () {
      // Seteo variable para identificar que se solicito la acción
      this.cargarComponente = 1
      // "Deconstruyo" componente, para una actualización "natural"
      this.keyComponente += 1
    },
    // Funcion parent, para reaccionar en base a emit de child
    procesarRespuesta: function (result) {
        // Determino si necesito mostrar error
        if(result.status !== 'success'){
          this.mensajeError = result.message
          this.tipoRespuesta = result.status
          this.varOpcional = result.query

          this.keyError += 1
        }
    }
  },
	data () {
		return {
      // Texto a buscar
      txt_busqueda: '',
      // Variable para identificar onDemand
      cargarComponente: 0,
			// Key para vista parcial
			keyComponente: 1,   
      // Key para componente de errores
      keyError: 0,
      mensajeError: '',
      tipoRespuesta: '',
      varOpcional: ''
    }
	},
	components: {	
    Resultado,
    ErrorComponent
	}
}
</script>
