<template>
  <v-toolbar color="toolbar">
    <v-container class="d-flex align-center" style="gap: 1rem">
<!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

      <v-btn height="64" rounded="0" :to="{ name: 'home' }" class="main" exact>
        <v-img width="64" height="64" src="@/assets/logo.png" inline />
        <span class="text-h5 ml-n3 font-italic">emit</span>
      </v-btn>

      <div class="ml-6 d-flex align-center" style="gap: 0.5rem">
        <v-btn href="https://docs.zemit.com">Docs</v-btn>
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props" append-icon="mdi-chevron-down">
              Ecosystem
            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-subheader class="font-weight-bold text-uppercase">Social</v-list-subheader>
            <v-list-item href="https://github.com/zemit-cms" target="_blank">
              <template #prepend>
                <v-icon>mdi-github</v-icon>
              </template>
              <v-list-item-title>Github</v-list-item-title>
            </v-list-item>
            <v-list-item href="https://twitter.com/ZemitOfficial" target="_blank">
              <template #prepend>
                <v-icon>mdi-twitter</v-icon>
              </template>
              <v-list-item-title>Twitter</v-list-item-title>
            </v-list-item>

            <v-list-subheader class="mt-3 font-weight-bold text-uppercase">Documentation</v-list-subheader>

            <v-list-item href="https://docs.zemit.com">
              <template #prepend>
                <v-icon>mdi-book-open</v-icon>
              </template>
              <v-list-item-title>1.x (stable)</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props" append-icon="mdi-chevron-down">
              Support
            </v-btn>
          </template>
          <v-list>
            <v-list-item prepend-icon="mdi-bug-outline" href="https://github.com/zemit-cms/core/issues/new" target="_blank">
              <v-list-item-title>File bug report</v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-alert-circle-outline" href="https://github.com/zemit-cms/core/issues" target="_blank">
              <v-list-item-title>Github issues</v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-tag-multiple" href="https://github.com/zemit-cms/core/tags" target="_blank">
              <v-list-item-title>Latest releases</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn :to="{ name: 'about' }">About</v-btn>
      </div>

      <v-spacer />

      <v-text-field
        v-model="search"
        placeholder="Search docs"
        hide-details
        variant="outlined"
        density="compact"
        prepend-inner-icon="mdi-magnify"
        @keyup.enter="onKeyUpEnter"
      ></v-text-field>

      <v-btn
        variant="outlined"
        size="large"
        href="https://docs.zemit.com/quick-start"
      >
        Get Started
      </v-btn>
    </v-container>
  </v-toolbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const search = ref('');

const onKeyUpEnter = () => {
  window.location.href = 'https://docs.zemit.com/?q=' + search.value;
}
</script>

<style lang="scss" scoped>
.v-btn--active.main :deep(.v-btn__overlay) {
  opacity: 0;
}
</style>
