// const actions = {
//     async onAuthStateChangedAction(state, { authUser, claims }) {
//         console.log("Action Occurred!")
//       if (!authUser) {
//         // remove state
//         console.log("Setting user")
//         state.commit('SET_USER', null)
  
//         //redirect from here
//         this.$router.push({
//           path: '/auth/signin',
//         })
//       } else {
//         const { uid, email } = authUser
//         state.commit('SET_USER', {
//           uid,
//           email,
//         })
//       }
//     },
//   }
  
//   const mutations = {
//     SET_USER(state, user) {
//       state.user = user
//     },
//   }
  
//   const state = () => ({
//     user: null,
//   })
  
//   const getters = {
//     getUser(state) {
//       return state.user
//     },
//   }
  
//   export default {
//     state,
//     actions,
//     mutations,
//     getters,
//   }
  