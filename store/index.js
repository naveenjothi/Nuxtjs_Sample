import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPostValues:[],
            token:null
        },
        mutations:{
            setPosts(state,posts){
                state.loadedPostValues = posts
            },
            addPost(state,posts){
                state.loadedPostValues.push(posts)
            },
            editPost(state,editedPost){
                const postIndex = state.loadedPostValues.findIndex(post => post.id === editedPost.id)
                state.loadedPostValues[postIndex] = editedPost
            },
            setToken(state,token){
                state.token = token
            },
            clearToken(state){
                state.token = null
            }
        },
        actions:{
            nuxtServerInit(vuexContext,context){
                return axios.get(process.env.baseUrl+'/posts.json')
                .then(res => {
                    var temp = []
                    for(const key in res.data){
                        temp.push({ ...res.data[key] ,id:key })
                    }
                    vuexContext.commit('setPosts',temp)
                }).catch(err => {
                    console.log(err)
                    context.dispatch(new Error())
                });
            },
            addPost(vuexContext,posts){
                const createdPost = {...posts}
                return axios.post(process.env.baseUrl+'/posts.json?auth='+vuexContext.state.token,createdPost)
                .then(res => {
                    vuexContext.commit('addPost',{...createdPost,id:res.data.name})
                })
                .catch(err => {
                    vuexContext.error(err)
                })
            },
            editPost(vuexContext,posts){
                return axios.put(process.env.baseUrl+'/posts/'+posts.id+'.json?auth='+vuexContext.state.token,posts)
                .then(res => {
                    vuexContext.commit('editPost',res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            },
            setPosts(vuexContext){
                vuexContext.commit('setPosts',posts)
            },
            authenticateUser(vuexContext,payload){
                let authURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
                if(!payload.isLogin){
                    authURL="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
                }
                return axios.post(authURL+ process.env.fbApiKey,{
                    email:payload.email,
                    password:payload.password,
                    returnSecureToken:true
                }).then((result)=>{
                    vuexContext.commit('setToken',result.data.idToken)
                    vuexContext.dispatch('setLogoutTimer',result.data.expiresIn * 1000)
                }).catch(e =>{
                    console.error(e)
                })
            },
            setLogoutTimer(vuexContext,duration){
                setTimeout(()=>{
                    vuexContext.commit('clearToken')
                },duration)
            }
        },
        getters:{
            loadedPostValues(state){
                return state.loadedPostValues
            },
            isAuthenticated(state){
                return state.token != null
            }
        }
    })
}

export default createStore;