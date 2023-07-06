<template>
  <div class="fill-height overflow-hidden position-relative">
    <div class="banner"></div>

    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <h1 class="text-h1 font-weight-black">
          The Phalcon Framework
          <br><span class="text-h2 text-primary">for Building Large and Secure Solutions</span>
        </h1>

        <v-container class="my-6" style="max-width: 45rem">
          <p class="mb-0 text-body-1">Zemit is a framework built on top of Phalcon PHP that simplifies the usage of Phalcon and allows for consistent, standard coding across multiple projects.</p>
        </v-container>

        <div class="d-flex align-center justify-center" style="gap: 1rem">
          <v-btn
            color="toolbar"
            prepend-icon="mdi-download"
            rounded
            size="x-large"
            href="https://docs.zemit.com/quick-start#install-zemit-cms"
          >
            <span>Get Zemit</span>
          </v-btn>

          <v-btn
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
  //
</script>

<style lang="scss" scoped>
.banner {
  background-color: rgb(var(--v-theme-primary));
  position: absolute;
  top: 50%;
  right: -50vw;
  width: 175vh;
  height: 175vh;
  z-index: 0;
  opacity: 0.15;
  transform: translateY(-50%) rotateZ(45deg);
}
</style>
