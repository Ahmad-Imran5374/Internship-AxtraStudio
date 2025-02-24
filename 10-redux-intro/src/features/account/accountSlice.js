import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};



const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers:{
    deposit(state,action){
      state.balance += action.payload
      state.isLoading = false
    },
    withdraw(state,action){
      state.balance -= action.payload
    },
    requestLoan:{
      prepare(amount,purpose){
        return {payload:{amount,purpose}}
      },

      reducer(state,action){
        if(state.loan>0) return;
        state.balance += action.payload.amount
        state.loan += action.payload.amount
        state.loanPurpose = action.payload.purpose
      }
    },
    payLoan(state){
      state.balance -= state.loan
      state.loan = 0
      state.loanPurpose =""
    },
    currencyConverter(state){
      state.isLoading = true
    }
  }
})



export function deposit(amount, currency) {
    if (currency === "USD") return { type: "account/deposit", payload: amount };
  
    return async function (dispatch, getState) {
      dispatch({ type: "account/currencyConverter" });
      const res = await fetch(
        `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`
      );
      const data = await res.json();
      const converted = amount * data.rates.USD;
      dispatch({ type: "account/deposit", payload: converted });
    };
  }


// export default function accountReducer(state = intialState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case "account/withdraw":
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loanPurpose: state.loanPurpose + action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//         loan: action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         //LATER
//         balance: state.balance - state.loan,
//         loan: 0,
//         loanPurpose: "",
//       };
//     case "account/currencyConverter":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/currencyConverter" });
//     const res = await fetch(
//       `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`
//     );
//     const data = await res.json();
//     const converted = amount * data.rates.USD;
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }

export const {withdraw,requestLoan,payLoan} = accountSlice.actions

export default accountSlice.reducer;