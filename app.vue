<template>
  <div>
    <NuxtLayout/>
      <NuxtPage />
    <Footer />
  </div>
</template>
<script>
import Footer  from '~/components/Footer.vue';
export default{
  name: 'default',
  components:{
    Footer
  }
}
</script>