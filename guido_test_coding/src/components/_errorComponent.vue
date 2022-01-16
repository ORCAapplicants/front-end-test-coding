<template>
    <div class="container">
        <!-- To do -->
    </div>
</template>
<script>
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
export default {
    props: {    
        mensaje: {
            type: String,
            default: null
        },
        tipo: {
            type: String,
            default: null
        },
        opcional: {
            type: String,
            default: null
        }
    },   
    methods: {
        // Proceso mensaje a mostrar
        mostrarMensaje: function (mensaje, tipo){
            let txt_opcional = this.opcional ? ', búsqueda: ' + this.opcional : ''
            Swal.fire({
                icon: tipo !== 'success' ? 'error' : 'success',
                title: tipo !== 'success' ? 'Oops...' : 'Éxito',
                text: 'Respuesta: ' + mensaje + txt_opcional
            })
        }
    },
    mounted () {
        if(this.mensaje && this.tipo){
            this.mostrarMensaje(this.mensaje, this.tipo)
        }
    }
}
</script>