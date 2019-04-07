export const state=()=>({
    bread:[]
});
export const getters={
    getbread(state){
        return state.bread
    }
};
export const mutations={
    addBread(state,payload){
        state.bread.push(payload)
    },clearBread(state,payload){
        state.bread=[];
    }
}