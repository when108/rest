<template>
  <v-app dark>
    
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
    <v-form >
        <v-text-field v-model="searchInput" class="normal-padding icon-color" label="search" height="20"  outline required single-line 
        append-icon="search" @click:append="Sa()"></v-text-field>
    </v-form>

    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Restaurants'
    }

  },
  methods: {
    Sa() {
     this.$router.push({path:'search'})
      this.$store.dispatch('search', this.searchInput)
      
    }
  }

}
</script>
<style>
.normal-padding {
  margin-top: 5px !important;
}
</style>

