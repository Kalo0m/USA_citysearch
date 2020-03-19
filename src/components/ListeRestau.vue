<template>
  <div class='margin'>
    <v-container fluid class="container">
      <v-data-iterator
        :items="restaurants"
        :page="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        :pagination.sync="pagination"
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar
            dark
            color="blue darken-3"
            class="mb-1"
          >
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              
              label="Search"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                label="Sort by"
              ></v-select>
              <v-spacer></v-spacer>
              <v-btn-toggle
                v-model="sortDesc"
                mandatory
              >
                <v-btn
                  large
                  depressed
                  color="blue"
                  :value="false"
                >
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn
                  large
                  depressed
                  color="blue"
                  :value="true"
                >
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-toolbar>
        </template>
        <template>
      
          <v-row class="margin">
            <v-col
              v-for="item in this.restaurants"
              :key="item.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            > 
              <RestauItem v-bind:restaurant="item" v-bind:keys="keys" v-bind:sortBy="sortBy"/>
            </v-col>
          </v-row>
        </template>
        <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
  
  import zomato from "../zomato.js";
  import RestauItem from './RestauItem';

  export default {
    
    name: 'ListeRestau',
    components: {
      RestauItem
    },
    props : ['ville'],
    data: () => ({
      itemsPerPageArray: [4, 8, 12],
      pagination: {
      rowsPerPage: 5
    },
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'user_rating',
      keys: [
        'name',
        'cuisines',
        'photos',
        'user_rating',
        'phone_numbers',
        'highlights',
        'location',
        'price_range',
        'average_cost_for_two'
      ],
      restaurants : [],
      restaurantsFiltre : []
    }),
    
    mounted() {
      const ville = this.ville.split(',')[0];
      console.log('premier element : '+ville);
      zomato.getRestaurantsByCity(ville).then(data=>{
        this.restaurants = data.restaurants.map(item=>item.restaurant);
        console.log(this.restaurants);
        //this.restaurantsFiltre = this.restaurants.filter(data=>Object.keys(data).map(key=>this.keys.includes(key)))
        /*

        var tab = this.restaurants.map(item => Object.entries(item));
        tab.map(item=>item.filter(attribut=>{
          var tri = []
          console.log(this.keys);
          console.log(attribut[0]);
          console.log(this.keys.includes(attribut[0]));
          if(this.keys.includes(attribut[0])){
            tri.push(attribut);
          }
        }));
        console.log('restaus apres modif : ');
        console.log(this.restaurantsFiltre);
        */
      }).catch(err=>console.log('erreur : '+err));
    },
    computed : {
      numberOfPages () {
        return Math.ceil(this.restaurants.length / this.itemsPerPage)
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  }
  </script>
  <style>
  .margin{
    margin:50px 8%;
  }
  .container{
    width:80%
  }
  .title-container{
    width:100%
  }
  </style>
