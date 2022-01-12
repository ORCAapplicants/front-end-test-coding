<template>
  <div id="app" class="container">    
    <div class="row">
      <div class="col align-self-center">
        <img src="./assets/img/logo-awto-color.png" alt="Logo Awto">     
        <p class="lead mt-3">
          <i>Guido Solar Cabrera</i>
        </p>
      </div>
    </div>
    <!-- Componente principal -->
    <div class="row mt-3">      
      <Home/>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>