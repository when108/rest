
 import axios from 'axios';
export default { 
   
    namespaced: true,
    state() {
            return {
            Na: [],
            cat: '',
            page: ''
            }
        },
    mutations: {
            setMainC(state, data) {
                state.Na = data
            },
            setCat(state, data) {
                state.cat = data
            },
            setPage(state, data) {
                state.cat = ''
            },
            setPagepage(state, data) {
                state.page = data
            }
        },
    actions: {
        async search({commit}, data) {
            axios.get(`https://developers.zomato.com/api/v2.1/search?q=${data}`, {
                headers: {
                    "Accept": "application/json",
                    "User-key" : "a7f7775c8ae74353c873d4a5e84361b4"
                }
            }).then(res => {
                console.log(res)
                commit('setPagepage', res.data.restaurants)
            }).catch(err => {
                console.log(err)
            })
           
        },
        async setM({commit}, data) {
            const d = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${data}&entity_type=city`, {
                headers: {
                    "user-key" : "a7f7775c8ae74353c873d4a5e84361b4"
                }
            })
            commit('setMainC', d)
        },
        async setC({commit}, data) {
        const d = await this.$axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${data}&entity_type=city`, {
            headers: {
                "user-key" : "a7f7775c8ae74353c873d4a5e84361b4"
            }
        })
        commit('setCat', d.data.restaurants)
         },
        setP({commit}, data) {
            commit('setPage', data)
        }
          },
        getters:  {
              getC(state) {
                return state.cat
              },
              getP(state) {
                return state.page
              },
        }
}
