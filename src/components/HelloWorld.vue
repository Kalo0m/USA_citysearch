<template>
  
    <v-toolbar
      dark
      color="teal"
      justify="center"
      align="center"
    >
      <v-toolbar-title>Ville selection</v-toolbar-title>
      <v-autocomplete
        v-model="input"
        :items="villes"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Where do you search ?"
        solo-inverted
        @keyup = 'onchange'
      ></v-autocomplete>
      <v-btn @click='onSubmit' icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  
</template>

<script>
  import Zomato from '../zomato.js'
  import mapApi from '../mapsApi.js'

  export default {
    name: 'HelloWorld',

    data: () => ({
      villes : [],
      input : ''
    }),
    methods :{
      onSubmit : function(){
        Zomato.getRestaurantsByCity(this.input).then(data=>console.log(data));
      },
      onchange : function(event){
        this.input = event.srcElement.value;
        mapApi.getCities(this.input).then(data=>{
          console.log(data);
          this.villes = data
        }).catch(err => console.log(err.message));
      }
    }
  }
</script>
