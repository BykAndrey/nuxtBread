<template>
  <div>
    <h1>_id vue</h1>
    <router-link to="/">main</router-link>
   <nuxt-child/>
  </div>
</template>
<script>
export default {
  asyncData(){
    return {
      
    }
  },
  data(){
    return{
     
    }
  },
  meta:{
    name(param,path,id){
      return new Promise(function(res,rej){
        setTimeout(function(){
            res({
              name:"Name of component "+param,
              path:path,
              id:id});
        },150)
        
      })
    }
  }
};
</script>
