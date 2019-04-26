<template>
  <v-app class="lighten-4">
    <!-- menggunakan components navbar -->
    <Navbar />

    <v-content class="mx-4 mb-4">
      <!-- router-view tergantung pada bagian router.js apa yang ditampilkan -->
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
// memanggil file components Navbar yang telah dibuat pada folder components
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    // inisialisasi buat dipanggil pada template
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
