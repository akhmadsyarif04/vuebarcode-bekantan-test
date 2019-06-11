<template>
  <div>
    <v-quagga class="viewport" :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader','code_128_reader','ean_8_reader','code_39_reader','code_39_vin_reader','codabar_reader','upc_reader','upc_e_reader','i2of5_reader']"></v-quagga>
  </div>
</template>

<script>
import Vue from 'vue'
import Quagga from 'vue-quaggajs';

// register component 'v-quagga'
Vue.use(Quagga);
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'
// Vue.http.headers.common['Access-Control-Request-Method'] = '*'

export default {
  name: 'VueBarcodeTest',
  data () {
    return {
      readerSize: {
        width: 640,
        height: 480
      },
      detecteds: []
    }
  },
  methods: {
    logIt (data) {
      Quagga.init({
          inputStream : {
            name : "Live",
            type : "LiveStream",
            target: document.querySelector('#yourElement')    // Or '#yourElement' (optional)
          },
          decoder : {
            readers : ["code_128_reader"]
          }
        }, function(err) {
            if (err) {
                console.log(err);
                return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });
      console.log('detected', data)
    }

  }
}
</script>
