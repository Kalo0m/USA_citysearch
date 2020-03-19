<!--<template>
  <v-card>
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            outlined
            dense
            chips
            small-chips
            label="Outlined"
            multiple
          ></v-autocomplete>
        </v-col>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            dense
            chips
            small-chips
            label="Solo"
            multiple
            solo
          ></v-autocomplete>
        </v-col>
        <v-col cols="12">
          <v-autocomplete
            v-model="value"
            :items="items"
            dense
            filled
            label="Filled"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
    values : {{values}}
    value : {{value}}
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: ['foo', 'bar', 'fizz', 'buzz'],
      values: ['foo', 'bar'],
      value: null,
    }),
  }
</script>
<style scoped>
  .autoc{
    width:80%;
    padding : 15px 20px;
  }
</style>-->
<template>
<v-card>
  <div>
    <v-toolbar :dark="true">
      <v-toolbar-title>Ville selection</v-toolbar-title>
      <div class="autoc">
        <v-autocomplete
            v-model="input"
            :items="villes"
            dense
            filled
            hide-no-data
      hide-details
            label="Filled"
            v-on:keyup="onchange"
          ></v-autocomplete>
      </div>
      <v-btn @click="onSubmit" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    
  </div>
  <v-alert v-if='this.error==true'
      dense
      class='alert'
      outlined
      type="error"
    >
      Le pays entré n'est pas bon, veuillez utiliser l'autocomplation
    </v-alert>
  </v-card>
</template>

<script>
import mapApi from "../mapsApi.js";

export default {
  name: "Searchbar",

  data: () => ({
    villes: [],
    input: '',
    error : false
  }),

  methods: {
    onSubmit: function() {
      console.log('submit');
      if(this.input != ''){
        this.error = false;
        this.$emit('envoieVille',this.input);
      }else{
        this.error = true;
      }
    },
    onchange: function(event) {
      console.log(event);
      if(event.key != 'Enter'){
        console.log(event.target.value);
        mapApi
          .getCities(event.srcElement.value)
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
<style scoped>
  .autoc{
    width:80%;
    padding : 15px 20px;
  }
  .alert{
  }
</style>