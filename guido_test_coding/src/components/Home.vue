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
    <Resultado :busqueda="txt_busqueda" :onDemand="cargarComponente" :key="keyComponente" v-if="boolComponente"/>
  </div>
</template>

<script>
// Componente donde se consultará API y se desplegará resultado
import Resultado from './_resultado.vue'

export default {
	mounted () {},
  methods: {
    // Realizar busqueda al gatillar botón
    realizarBusqueda: function () {
      // Seteo variable para identificar que se solicito la acción
      this.cargarComponente = 1
      // "Deconstruyo" componente, para una actualización "natural"
      this.keyComponente += 1
      this.boolComponente = true
    }
  },
	data () {
		return {
      // Texto a buscar
      txt_busqueda: '',
      // Variable para identificar onDemand
      cargarComponente: 0,
			// Key para vista parcial
			keyComponente: 0,
      // Determino si construir o no el componente inicialmente
      boolComponente: false
    }
	},
	components: {	
    Resultado
	}
}
</script>
