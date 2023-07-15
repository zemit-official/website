<template>
  <v-toolbar color="toolbar">

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <template #prepend>
        <div class="bg-background">
          <v-btn height="64" rounded="0" :to="{ name: 'home' }" class="main" block exact>
            <v-img width="64" height="64" src="@/assets/logo.png" inline />
            <span class="text-h5 ml-n3 font-italic">emit</span>
          </v-btn>
        </div>
        <v-divider />
      </template>

      <v-list nav>
        <v-list-item :key="rootItemIdx" v-for="(rootItem, rootItemIdx) in principal" :href="rootItem.href" :to="rootItem.to" :target="rootItem.target">
          <template v-if="rootItem.icon" #prepend>
            <v-icon>{{ rootItem.icon }}</v-icon>
          </template>
          <v-list-item-title v-text="rootItem.label"></v-list-item-title>
        </v-list-item>
      </v-list>

      <template #append>
        <v-divider />
        <v-footer class="bg-background">
          <p class="text-caption text-disabled mb-0">Zemit is a Trademark of Nuagiciel. Copyright © 2020-{{ year }} Nuagiciel Inc. Code licensed <a href="https://github.com/zemit-cms/core/blob/master/LICENSE.txt" target="_blank">BSD</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>.</p>
        </v-footer>
      </template>
    </v-navigation-drawer>

    <v-container class="d-flex align-center" style="gap: 1rem">
      <v-btn class="d-md-none" icon @click="drawer = !drawer">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-btn>

      <v-btn height="64" rounded="0" :to="{ name: 'home' }" class="main" exact>
        <v-img width="64" height="64" src="@/assets/logo.png" inline />
        <span class="text-h5 ml-n3 font-italic">emit</span>
      </v-btn>

      <div class="ml-6 align-center d-none d-md-flex" style="gap: 0.5rem">
        <template v-for="(rootItem, rootItemIdx) in principal">
          <v-btn :key="rootItemIdx + '_btn'" v-if="!rootItem.children" :href="rootItem.href" :to="rootItem.to" :target="rootItem.target">
            {{ rootItem.label }}
          </v-btn>
          <v-menu v-else :key="rootItemIdx" transition="slide-y-transition">
            <template #activator="{ props }">
              <v-btn v-bind="props" append-icon="mdi-chevron-down">
                {{ rootItem.label }}
              </v-btn>
            </template>
            <v-list>
              <template v-for="(subMenu, subMenuIdx) in rootItem.children">
                <template v-if="subMenu.children">
                  <v-list-subheader>{{ subMenu.label }}</v-list-subheader>
                  <v-list-item :key="deepItemIdx" v-for="(deepItem, deepItemIdx) in subMenu.children" :href="deepItem.href" :to="deepItem.to" :target="deepItem.target">
                    <template v-if="deepItem.icon" #prepend>
                      <v-icon>{{ deepItem.icon }}</v-icon>
                    </template>
                    <v-list-item-title v-text="deepItem.label"></v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item v-else :key="subMenuIdx" :href="subMenu.href" :to="subMenu.to" :target="subMenu.target">
                  <template v-if="subMenu.icon" #prepend>
                    <v-icon>{{ subMenu.icon }}</v-icon>
                  </template>
                  <v-list-item-title v-text="subMenu.label"></v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
        </template>
      </div>

      <v-spacer />

      <v-text-field
        v-model="search"
        class="d-none d-lg-block"
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
import { principal } from '@/menu'

const year = new Date().getFullYear()
const search = ref('');
const drawer = ref(false);

const onKeyUpEnter = () => {
  window.location.href = 'https://docs.zemit.com/?q=' + search.value;
}
</script>

<style lang="scss" scoped>
.v-btn--active.main :deep(.v-btn__overlay) {
  opacity: 0;
}
</style>
