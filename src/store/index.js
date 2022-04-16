import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import counterSlice from './counterSlice'


const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})

export default store


// const intialCounterState = {counter: 0}
// const counterReducer = (state = intialCounterState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//     };
//   }
//   return state;
// };

// const initialAuthState = {
//   isAuthenticated: false
// }

// const authReducer = (state = initialAuthState,action)=>{
//   if(action.type === 'login'){
//     return{
//       isAuthenticated: state.isAuthenticated = true
//     }
//   }
//   if(action.type === 'logout'){
//     return{
//       isAuthenticated: state.isAuthenticated = false
//     }
//   }
//   return state
// }
// const rootReducer  = combineReducers({
//   counterReducer: counterReducer,
//   authReducer: authReducer
// })
// const store = createStore(rootReducer);


// export default store;
