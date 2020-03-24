      <template>
      <div>
        <v-hover
            v-slot:default="{ hover }"
        >
        
            <v-card :elevation="hover ? 16 : 2 " @click="barSelected">
              <v-card-title class="subheading font-weight-bold">{{ bar.name_breweries }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ bar[key.toLowerCase()] }}</v-list-item-content>
                </v-list-item>
              </v-list>
                      <div class="text-right ">
                            <v-btn class="ma-5" rounded color="blue-grey darken-4
                            " dark>Rounded Button</v-btn>
                        </div>

            </v-card>
        </v-hover>
            <v-dialog
            v-model="dialog"
            max-width="60vw"
            >
                <ListeBieres v-bind:bar="bar" />
            
            </v-dialog>
      </div>
      </template>

<script>
    import ListeBieres from "./ListeBieres"
    export default {
    
    name: 'barItem',
    components : {
        ListeBieres    
    },
    props : {
      bar : Object,
      keys : Array,
      sortBy : String
    },
    
    data: () => ({
        dialog : false
    }),
    methods:{
        barSelected : function(){
            this.dialog = true
        }
    },
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