<template>
<div>
       <v-row>
          <v-col
            :key = "item.id" v-for="item in this.bieres"
            cols="12"
            sm="6"
            md="2"
            lg="3"
          >
            <v-card>
                
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Style :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.style_name }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Catégorie :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.cat_name }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Site externe :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.website }}</v-list-item-content>
                </v-list-item>

                 </v-list>

                
            </v-card>

          </v-col>
       </v-row>
                <!--<v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Disagree
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Agree
                </v-btn>
                </v-card-actions>
            </v-card>-->
</div>
</template>

<script>
import beerApi from "../beerApi.js";
export default {
    
    props : ['bar'],
    data : function(){
        return {
            bieres : []
        }
    },
    mounted(){
        beerApi.getBieres(this.bar.id).then(data=>this.bieres=data.records.map(item=>item.fields))
    }
}
</script>