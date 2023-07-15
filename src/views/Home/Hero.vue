<template>
  <div class="fill-height overflow-hidden position-relative">
    <div class="banner"></div>

    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <h1 class="text-h3 text-sm-h2 text-lg-h1 font-weight-black">
          The Phalcon Framework
          <br><span class="text-h4 text-sm-h3 text-lg-h2 text-primary">for Building Flexible and Secure Solutions</span>
        </h1>

        <v-container class="my-6" style="max-width: 45rem">
          <p class="mb-0 text-body-1">Zemit is a framework built on top of Phalcon PHP that simplifies the usage of Phalcon and allows for consistent, standard coding across multiple projects.</p>
        </v-container>

        <div class="d-flex flex-wrap align-center justify-center" style="gap: 1rem">
          <v-btn
            :block="xs"
            color="toolbar"
            prepend-icon="mdi-download"
            rounded
            size="x-large"
            href="https://docs.zemit.com/quick-start#install-zemit-cms"
          >
            <span>Get Zemit</span>
          </v-btn>

          <v-btn
            :block="xs"
            variant="outlined"
            rounded
            size="x-large"
            href="https://docs.zemit.com"
          >
            <span>Read the docs</span>
          </v-btn>
        </div>

        <div class="mt-6 text-caption">
          Currently v5.3.0 · v4.6.x docs · <a href="https://github.com/zemit-cms/core/tags">All releases</a>
        </div>
      </v-responsive>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const xs = useDisplay().xs
</script>

<style lang="scss" scoped>
.banner {
  background-color: rgb(var(--v-theme-primary));
  position: absolute;
  top: 50%;
  right: -50%;
  width: 150vw;
  height: 150vw;
  z-index: 0;
  opacity: 0.15;
  transform: translateY(-50%) translateX(50%) rotateZ(45deg);
}
</style>
