<template>
  <nav>
    <v-toolbar flat app>

      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="indigo">
      <p>Test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false
      }
    }
  }
</script>
