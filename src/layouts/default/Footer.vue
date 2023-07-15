<template>
  <v-sheet color="footer" class="d-flex align-center py-12" dark>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" class="text-center text-md-left">
          <img src="@/assets/logo-light.png" width="64" />

          <p class="mt-6 mb-0 text-caption">Zemit is a framework built on top of Phalcon PHP that simplifies the usage of Phalcon and allows for consistent, standard coding across multiple projects.</p>
        </v-col>

        <v-col cols="12" md="1"></v-col>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" sm="6" lg="3">
              <v-list bg-color="transparent" density="compact">
                <v-list-subheader class="text-caption text-white text-uppercase">Apps</v-list-subheader>
                <v-list-item :key="itemIdx" v-for="(item, itemIdx) in menu.apps" :href="item.href" :to="item.to" :target="item.target">
                  <template v-if="item.icon" #prepend>
                    <v-icon>{{ item.icon }}</v-icon>
                  </template>
                  <v-list-item-title v-text="item.label"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="6" lg="3">
              <v-list bg-color="transparent" density="compact">
                <v-list-subheader class="text-caption text-white text-uppercase">Highlights</v-list-subheader>
                <v-list-item :key="itemIdx" v-for="(item, itemIdx) in menu.highlights" :href="item.href" :to="item.to" :target="item.target">
                  <v-list-item-title v-text="item.label"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="6" lg="3">
              <v-list bg-color="transparent" density="compact">
                <v-list-subheader class="text-caption text-white text-uppercase">Support</v-list-subheader>
                <v-list-item :key="itemIdx" v-for="(item, itemIdx) in menu.support" :href="item.href" :to="item.to" :target="item.target">
                  <v-list-item-title v-text="item.label"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="6" lg="3">
              <v-list bg-color="transparent" density="compact">
                <v-list-subheader class="text-caption text-white text-uppercase">Social</v-list-subheader>
                <v-list-item :key="itemIdx" v-for="(item, itemIdx) in menu.social" :href="item.href" :to="item.to" :target="item.target">
                  <v-list-item-title v-text="item.label"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-6" />

      <v-row style="opacity: 0.5" no-gutters>
        <v-col cols="12" md="6" class="text-center text-md-left">
          <p class="text-caption mb-0">Zemit is a Trademark of Nuagiciel. Copyright © 2020-{{ year }} Nuagiciel Inc.</p>
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-right">
          <p class="text-caption mb-0">Code licensed <a class="text-white" href="https://github.com/zemit-cms/core/blob/master/LICENSE.txt" target="_blank">BSD</a>, docs <a class="text-white" href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
import menu from '@/menu';
const year = new Date().getFullYear()
</script>
