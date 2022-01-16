<template>
    <GmapMap
        :center='{ lat: this.lat_recibida, lng: this.lng_recibida }'
        :zoom='12'
        style='width:100%;  height: 100%'>
        <gmap-marker 
            :position='{ 
                lat: this.lat_recibida, lng: 
                this.lng_recibida 
            }'
        />      
    </GmapMap>
</template>
 
<script>
export default {
    props: {    
        lat_recibida: {
            type: Number,
            default: 0
        },
        lng_recibida: {
            type: Number,
            default: 0
        }
    },   
    methods: {
        // Primera vez que ocupo google maps con Vue al menos, asi que dejo la referencia (https://www.digitalocean.com/community/tutorials/vuejs-vue-google-maps)
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
            })
        }
    }
}
</script>