<template>
  <div>
    <video id="preview" height="500" width="500"></video>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Instascan from 'instascan';
// import Instascan from 'instascan'


export default {
  data () {
    return {
    }
  },
  created() {
    // let Instascan = document.createElement('script')
    // Instascan.setAttribute('src', 'https://rawgit.com/schmich/instascan-builds/master/instascan.min.js')
    // document.head.appendChild(Instascan)
  },
  mounted: function () {
    this.QRcode ()
  },
  methods: {
    QRcode () {
      // let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
      // scanner.addListener('scan', function (content) {
      //   console.log(content);
      // });
      // Instascan.Camera.getCameras().then(function (cameras) {
      //   if (cameras.length <= 0) {
      //     console.log('No cameras found.');
      //   } else {
      //     scanner.start(cameras[0]);
      //   }
      //   console.log(cameras)
      // }).catch(function (e) {
      //   console.error(e)
      // })
    }
  }
}
</script>
