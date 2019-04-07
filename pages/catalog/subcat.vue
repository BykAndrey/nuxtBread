<template>
  <div>
    <h1>catalog/subcat.vue</h1>
       <nuxt-child/>
   
  </div>
</template>
<script>
export default {
  meta: {
    name(param,path,id){
      return new Promise((r)=>r({name:"Под каталог",path:path,id:id}))
    }
  }
};
</script>
