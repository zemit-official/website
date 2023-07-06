<template>
  <v-sheet color="footer" class="d-flex align-center py-12" dark>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-img src="@/assets/logo-light.png" width="64"></v-img>

          <p class="mt-6 mb-0 text-caption">Zemit is a Phalcon powered framework that focus primarily on standards and security. We believe development must be an enjoyable and creative experience to be truly fulfilling. Zemit attempts to take the pain out of development by easing common tasks used in most web projects.</p>
        </v-col>

        <v-col cols="12" md="1"></v-col>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="4">
              <v-list bg-color="transparent" density="compact">
                <v-list-subheader class="text-caption text-white text-uppercase">Highlights</v-list-subheader>
                <v-list-item>
                  <v-list-item-title>Docs</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Getting Started</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>About</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="4">
              <v-list bg-color="transparent" density="compact">
                <v-list-subheader class="text-caption text-white text-uppercase">Support</v-list-subheader>
                <v-list-item>
                  <v-list-item-title>File bug report</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Github issues</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Latest releases</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="4">
              <v-list bg-color="transparent" density="compact">
                <v-list-subheader class="text-caption text-white text-uppercase">Social</v-list-subheader>
                <v-list-item>
                  <v-list-item-title>Github</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Twitter</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Discord</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Youtube</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-6" />

      <v-row style="opacity: 0.5">
        <v-col cols="12" md="6">
          <p class="text-caption mb-0">Zemit is a Trademark of Nuagiciel. Copyright © 2020-{{ year }} Nuagiciel Inc.</p>
        </v-col>
        <v-col cols="12" md="6" class="text-md-right">
          <p class="text-caption mb-0">Code licensed <a class="text-white" href="https://github.com/zemit-cms/core/blob/master/LICENSE.txt" target="_blank">BSD</a>, docs <a class="text-white" href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>

</style>
