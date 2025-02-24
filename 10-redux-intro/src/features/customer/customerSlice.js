import { createSlice } from "@reduxjs/toolkit";

const initialCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState:initialCustomer,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.fullName;
        state.nationalId = action.nationalId;
        state.createdAt = action.createdAt;
      },
    },
  },
});

// export default function customerReducer(state = initialCustomer, action) {
//     switch (action.type) {
//       case "customer/createCustomer":
//         return {
//           ...state,
//           fullName: action.payload.fullName,
//           nationalId: action.payload.nationalId,
//           createdAt: action.payload.createdAt,
//         };
//       case "customer/updateName":
//         return {
//           ...state,
//           fullName: action.payload.fullName,
//         };
//       default:
//         return state;
//     }
//   }

//   export function createCustomer(fullName, nationalId) {
//     return {
//       type: "customer/createCustomer",
//       payload: {
//         fullName: fullName,
//         nationalId: nationalId,
//         createdAt: new Date().toISOString(),
//       },
//     };
//   }

export const { createCustomer } = customerSlice.actions;
export default customerSlice.reducer;
