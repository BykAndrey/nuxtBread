<template>
  <div>
    <h1>catalog/subcat/_id/comments/_comment.vue</h1>
  </div>
</template>
<script>
export default {
  meta:{
    name(param,path,id){
      return new Promise(function(res,rej){
        setTimeout(function(){
            var name =param==1?"Ivanov":'Petrov'
            res({
              name:"Name of comment "+name,
              path:path,
              id:id});
        },150)
        
      })
    }
  }
};
</script>
