<template>
    <div>
         <v-layout justify-start wrap>
        <v-flex  class="xs12 sm6 md4 lg4"  v-for="(rest, index) in dasa" :key="index.id">
            <span >
                 <v-card >
                       <v-img
                    :src="`${rest.restaurant.featured_image}`"
                    aspect-ratio="2.75"
                    >
                </v-img>
                 </v-card>
            </span>
             <h3>{{rest.restaurant.name}}</h3>
            {{rest.restaurant.location.city}}
           Location: {{rest.restaurant.location.address}}
        </v-flex>
         </v-layout>
    </div>
</template>
<script>
import { mapGetters} from 'vuex'

export default {
      data() {
        return {
            data: '',
        }
    },
    computed:{
      ...mapGetters({
           dasa: 'getP'
       }),
    },

}
</script>
<style>
 a {
   color: #fff;
   text-decoration: none;
 }
 .fer {
   padding:20px;
 }
</style>

