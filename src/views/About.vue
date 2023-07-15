<template>
  <v-sheet color="background" class="h-100 d-flex align-center py-12">
    <v-container>

      <h1 class="text-h3 font-weight-bold">The Zemit Team</h1>
      <p class="my-8 text-body-1" style="max-width: 40rem">Zemit is a team of passionate developers from all around the world. We love building tools that make your life as a developer enjoyable, fun, and fulfilling. Follow us on Twitter and GitHub to keep up with what we're working on!</p>

      <v-row>
        <v-col v-for="(person, personIdx) in persons" :key="personIdx" cols="12" sm="6" md="4" lg="3" xl="2">
          <v-card :href="person.github" target="_blank">
            <v-img aspect-ratio="1" class="bw-hover" :src="person.picture" cover></v-img>
            <v-card-title class="text-primary">{{ person.name }}</v-card-title>
            <v-card-text class="mt-n2">{{ person.location }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
const persons = [
  { picture: 'https://avatars.githubusercontent.com/u/4306188?v=4', name: 'Julien Turbide', location: 'Canada', github: 'https://github.com/jturbide', },
  { picture: 'https://avatars.githubusercontent.com/u/10353756?v=4', name: 'Danny Coulombe', location: 'Mexico', github: 'https://github.com/dannycoulombe', },
];
</script>

<style lang="scss" scoped>
.bw-hover {
  filter: grayscale(1);
  transition: filter 200ms ease-in;

  &:hover {
    filter: grayscale(0);
  }
}
</style>
