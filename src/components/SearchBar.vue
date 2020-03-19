<template>
  <div>
    <v-toolbar dark color="teal" justify="center" align="center">
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
        @keyup="onchange"
        
      ></v-autocomplete>
      <v-btn @click="onSubmit" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import mapApi from "../mapsApi.js";

export default {
  name: "Searchbar",

  data: () => ({
    villes: [],
    input: ""
  }),
  methods: {
    onSubmit: function() {
      console.log('submit');
      this.$emit('envoieVille',this.input);
    },
    onchange: function(event) {
      
      if(event.key != 'Enter'){
        console.log('keyup')
        this.input = event.srcElement.value;
        mapApi
          .getCities(this.input)
          .then(data => {
            if (data.error_message != null) {
              console.log("erreur");
            } else {
              let tabVille = data.predictions.map(item => item.description);
              this.villes = tabVille;
            }
          })
          .catch(err => console.log("erreur" + err.message));
      }else{
        this.onSubmit();
      }
      
    },
    
  }
};
</script>
