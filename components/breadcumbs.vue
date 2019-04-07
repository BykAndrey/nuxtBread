<template>
  <div class="bread">
    <h1 v-limit-characters="1">bread</h1>

    <router-link to="/">main</router-link>
    <nuxt-link to="/catalog">catalog</nuxt-link>
    <nuxt-link to="/catalog/subcat">subcat</nuxt-link>
    <nuxt-link to="/catalog/subcat/1">/catalog/subcat/1</nuxt-link>
    <nuxt-link to="/catalog/subcat/1/comments">/catalog/subcat/1/comments</nuxt-link>
     <nuxt-link to="/catalog/subcat/1/comments/1">/catalog/subcat/1/comments/1</nuxt-link>
    <nuxt-link to="/catalog/subcat/1/comments/2">/catalog/subcat/1/comments/2</nuxt-link>
  <hr>
  <div class="bre">
    <router-link v-for="item in st" :key="item.id" :to="item.to" >{{item.text}}</router-link></div>
  </div>
</template>
<script>
export default {
  computed: {
    st(){
      return this.$store.getters.getbread
    },
    
  }
};
</script>
<style>
a {
  display: block;
  padding: 10px
}
.bre{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
