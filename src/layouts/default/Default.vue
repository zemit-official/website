<template>
  <v-app>
    <Toolbar />

    <v-main style="min-height: calc(100vh - 64px)">
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
  import Toolbar from './Toolbar.vue'
  import Footer from './Footer.vue'
</script>
