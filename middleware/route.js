export default function ({ route, store }) {
    store.commit('clearBread', breadcrumbs)
    let pathArray = route.path.split("/")
    pathArray.shift();
    console.log(pathArray)
    if(pathArray[0]==''){
        return;
    }
   
    var pa = '';
    var breadcrumbs = [];
    
    return  Promise.all(pathArray.map((path, idx) => {
        pa += "/" + path;
        return route.meta[idx].name(path, pa, idx)
    })).then(values => {

        values.forEach(t => {
            breadcrumbs.push({
                id: t.id,
                path: t.path,
                to: t.path,
                text: t.name,
            });
            store.commit('addBread', {
                id: t.id,
                path: t.path,
                to: t.path,
                text: t.name,
            })

        })

    });




    console.log(breadcrumbs);
    

     breadcrumbs;
}