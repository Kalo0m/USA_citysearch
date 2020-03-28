
      <template>
            <v-card>
              <v-img :src="restaurant.photos" aspect-ratio="1.7"></v-img>
              <v-card-title class="subheading font-weight-bold">{{ restaurant.name }}</v-card-title>

              <v-divider></v-divider>
              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ restaurant[key.toLowerCase()] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
      </template>

<script>
  export default {
    
    name: 'RestauItem',
    props : {
      restaurant : Object,
      keys : Array,
      sortBy : String
    },
    
    data: () => ({
      
    }),
    
    computed: {
      
      filteredKeys () {
        return this.keys.filter(key => key !== `name` && key !== `photos` )
      },
    },
  }
  </script>
  <style>
  .floatR{
    float:right;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
  }
  .title-container{
    position:relative
  }
  </style>