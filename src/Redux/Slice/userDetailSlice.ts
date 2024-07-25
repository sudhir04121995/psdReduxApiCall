// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface UserDetails {
//   aboutMyFamily: string;
//   fatherName: string;
//   fatherOccupation: string;
//   motherName: string;
//   motherOccupation: string;
//   familyStatus: string;
//   sisters: string;
//   sistersMarried: string;
//   brothers: string;
//   brothersMarried: string;
//   propertyDetails: string;
// }

// interface UserDetailsState {
//   details: UserDetails | null;
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }

// const initialState: UserDetailsState = {
//   details: null,
//   status: 'idle',
//   error: null,
// };

// export const fetchUserDetails = createAsyncThunk(
//   'userDetails/fetchUserDetails',
//   async ({ profile_id, page_id }: { profile_id: string; page_id: string }) => {
//     try {
//       const response = await axios.post('http://103.214.132.20:8000/auth/Get_save_details/', {
//         profile_id,
//         page_id,
//       });
//       console.log('API response:', response.data.data);
//       return response.data.data; // Assuming response.data.data contains user details
//     } catch (error) {
//       console.error('API error:', error);
//       throw Error('Failed to fetch user details');
//     }
//   }
// );


// export const updateUserDetails = createAsyncThunk(
//   'userDetails/updateUserDetails',
//   async ({ profile_id, updatedDetails }: { profile_id: string; updatedDetails: UserDetails }) => {
//     try {
//       const response = await axios.post('http://103.214.132.20:8000/auth/Family_registration/', {
//         profile_id,
//         ...updatedDetails,
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log('updateUserDetailsResponse:', response.data);
//       if (response.data.Status === 1) {
//         return response.data; // Return the response data if update is successful
//       } else {
//         throw new Error(response.data.message || 'Failed to update user details');
//       }
//     } catch (error) {
//       console.error('API error:', error);
//       throw new Error('Failed to update user details');
//     }
//   }
// );


// const userDetailsSlice = createSlice({
//   name: 'userDetails',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserDetails.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchUserDetails.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.details = action.payload;
//       })
//       .addCase(fetchUserDetails.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message || 'Failed to fetch user details';
//       })
//       .addCase(updateUserDetails.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(updateUserDetails.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.details = { ...state.details, ...action.payload.updatedDetails };
//       })
//       .addCase(updateUserDetails.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message || null;
//   })
// },
// });

// export default userDetailsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserDetails {
  aboutMyFamily: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  familyStatus: string;
  sisters: string;
  sistersMarried: string;
  brothers: string;
  brothersMarried: string;
  propertyDetails: string;
}

interface UserDetailsState {
  details: UserDetails | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserDetailsState = {
  details: null,
  status: 'idle',
  error: null,
};

export const fetchUserDetails = createAsyncThunk(
  'userDetails/fetchUserDetails',
  async ({ profile_id, page_id }: { profile_id: string; page_id: string }) => {
    try {
      const response = await axios.post('http://103.214.132.20:8000/auth/Get_save_details/', {
        profile_id,
        page_id,
      });
      console.log('API response:', response.data.data);
      return response.data.data; // Assuming response.data.data contains user details
    } catch (error) {
      console.error('API error:', error);
      throw Error('Failed to fetch user details');
    }
  }
);



// export const updateUserDetails = createAsyncThunk(
//   'userDetails/updateUserDetails',
//   async ({ profile_id, page_id, updatedDetails }: { profile_id: string; page_id: string; updatedDetails: UserDetails }) => {
//     try {
//       const response = await axios.post('http://103.214.132.20:8000/auth/Get_save_details/', {
//         profile_id,
//         page_id, 
//         ...updatedDetails,
//       });
//       console.log('storeslice:',response.data)
//       return response.data.data;
//     } catch (error) {
//       throw new Error('Failed to update user details');
//     }
//   }
// );

export const updateUserDetails = createAsyncThunk(
  'userDetails/updateUserDetails',
  async ({ profile_id, updatedDetails }: { profile_id: string; updatedDetails: any }) => {
    try {
      const response = await axios.post('http://103.214.132.20:8000/auth/Family_registration/', {
        profile_id,
        ...updatedDetails,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.Status === 1) {
        return { profile_id, updatedDetails }; // Returning updated details
      } else {
        throw new Error(response.data.message || 'Failed to update user details');
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to update user details');
    }
  }
);

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch user details';
      })
      .addCase(updateUserDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = { ...state.details, ...action.payload.updatedDetails };
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update user details';
      });
  },
});


export default userDetailsSlice.reducer;