<template>
  <div>
    <h1>/catalog.vue </h1>
    <nuxt-child/>
  </div>
</template>
<script>
export default {


    meta: {
    name: "catalog.vue"
  },
  data(){
      return {
          title:this.$route.params.id
      }
  },
  head() {
    return {
        title:`Это название страницы${this.title}`,
      meta: [
        // Each object in this array is its own meta tag
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial scale=1" },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ]
    };
  },
  meta: {
    name(param,path,id){
      //console.log(pa)
      return  new Promise((r)=>r({name:"Катало1г",path:path,id:id}))
    }
  }
};
</script>
