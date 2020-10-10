<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <!-- <Footer v-show="!(this.$route.path==='/login' || this.$route.path==='/register')"></Footer> -->
    <Footer v-show="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>
