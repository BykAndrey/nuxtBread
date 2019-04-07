const Plugin = {
    install(Vue, options) {
      Vue.directive('limit-characters', {
        bind(el, binding, vnode, oldVnode) {
          const limit = binding.value || 100;
          const original = el.innerHTML;
          const summary = original.slice(0, limit);
          const expandLink = document.createElement('a');
          const collapseLink = document.createElement('a');
                  
          expandLink.innerHTML = 'Read more...';
          collapseLink.innerHTML = 'Read less...';
                  
          expandLink.style.textDecoration = collapseLink.style.textDecoration = 'underline';
          expandLink.style.cursor = collapseLink.style.cursor = 'pointer';
                  
          const expandNode = () => {
            el.innerHTML = `${original} `;
            el.appendChild(collapseLink);
          }
          
          const collapseNode = () => {
            el.innerHTML = `${summary}... `;
            el.appendChild(expandLink);
          }
  
          expandLink.addEventListener('click', expandNode);
          collapseLink.addEventListener('click', collapseNode)
  
          collapseNode();
        }
      })
    },
  };
export default Plugin