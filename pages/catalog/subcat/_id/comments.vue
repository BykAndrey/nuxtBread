<template>
  <div>
    <h1>catalog/subcat/_id/comments.vue</h1>
    <nuxt-child/>
   
  </div>
</template>
<script>
export default {
  meta:{
    name(param,path,id){
      return new Promise(function(res,rej){
     
            res({
              name:"Name of component "+param,
              path:path,
              id:id});
     
        
      })
    }
  }
};
</script>
