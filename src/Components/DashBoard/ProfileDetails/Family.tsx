// // import React, { useEffect } from 'react';
// // import { MdModeEdit } from "react-icons/md";
// // import { useDispatch, useSelector } from 'react-redux';
// // import { RootState } from "../../../Redux/Store/store";
// // import { fetchUserDetails } from "../../../Redux/Slice/userDetailSlice";

// // export const Family = () => {
// //   const dispatch = useDispatch();

// //   const profile_id = 'VY240050';
// //   const page_id ='3'; // Replace with your actual page_id logic

// //   useEffect(() => {
// //     if (profile_id) {
// //       console.log('Dispatching fetchUserDetails with:', { profile_id, page_id });
// //       dispatch(fetchUserDetails({ profile_id, page_id }));
// //     }
// //   }, [dispatch, profile_id, page_id]);

// //   const userDetails = useSelector((state: RootState) => state.userDetails.details);
// //   const loading = useSelector((state: RootState) => state.userDetails.status === 'loading');
// //   const error = useSelector((state: RootState) => state.userDetails.error);

// //   console.log('Component userDetails:', userDetails);
// //   console.log('Component loading:', loading);
// //   console.log('Component error:', error);

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div>
// //       <h2 className="flex items-center text-[30px] text-vysyamalaBlack font-bold mb-5">Family Details
// //         <MdModeEdit className="text-2xl text-main ml-2 cursor-pointer" />
// //       </h2>
// //       <div>
// //         <div className="grid grid-rows-1 grid-cols-2">
// //           <div>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">About My Family :
// //               <span className="font-normal"> {userDetails?.about_family || '-'}</span></h5>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Father Name :
// //               <span className="font-normal"> {userDetails?.father_name || 'K. Karthikeyan (Late)'}</span></h5>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Father Occupation :
// //               <span className="font-normal"> {userDetails?.father_occupation || '-'}</span></h5>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Mother Name :
// //               <span className="font-normal"> {userDetails?.mother_name || 'K. Sujatha (Late)'}</span></h5>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Mother Occupation :
// //               <span className="font-normal"> {userDetails?. mother_occupation|| 'Pollachi'}</span></h5>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Family Status :
// //               <span className="font-normal"> {userDetails?.family_Status || 'Upper Middle Class'}</span></h5>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Sisters :
// //               <span className="font-normal"> {userDetails?. no_of_sister || 'No'}</span></h5>
// //           </div>
// //           <div>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Sisters Married :
// //               <span className="font-normal"> {userDetails?. no_of_sis_married || 'No'}</span></h5>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Brothers :
// //               <span className="font-normal"> {userDetails?. no_of_brother || 'No'}</span></h5>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Brothers Married :
// //               <span className="font-normal"> {userDetails?.  no_of_bro_married || 'No'}</span></h5>
// //             <h5 className="text-[20px] text-ash font-semibold mb-2">Property Details :
// //               <span className="font-normal"> {userDetails?.  property_details || '-'}</span></h5>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// import React, { ChangeEvent, useEffect, useState } from 'react';
// import { MdModeEdit } from "react-icons/md";
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from "../../../Redux/Store/store";
// import { fetchUserDetails, updateUserDetails } from "../../../Redux/Slice/userDetailSlice";

// export const Family = () => {
//   const dispatch = useDispatch();
//   const [isEditing, setIsEditing] = useState(false);
//   const [formValues, setFormValues] = useState({
//     about_family: '',
//     father_name: '',
//     father_occupation: '',
//     mother_name: '',
//     mother_occupation: '',
//     family_status: '',
//     family_value: '',
//     family_type: '',
//     no_of_sister: '',
//     hobbies: '',
//     about_self: '',
//     blood_group: '',
//     Pysically_changed: '',
//     no_of_sis_married: '',
//     no_of_brother: '',
//     no_of_bro_married: '',
//     property_details: '',
//     property_worth: '',
//     suya_gothram: '',
//     uncle_gothram: '',
//     ancestor_origin: '',
//   });

//   const profile_id = 'VY240050';
//   const page_id = '3'; // Replace with your actual page_id logic

//   useEffect(() => {
//     if (profile_id) {
//       console.log('Dispatching fetchUserDetails with:', { profile_id, page_id });
//       dispatch(fetchUserDetails({ profile_id, page_id }));
//     }
//   }, [dispatch, profile_id, page_id]);

//   const userDetails = useSelector((state: RootState) => state.userDetails.details);
//   const loading = useSelector((state: RootState) => state.userDetails.status === 'loading');
//   const error = useSelector((state: RootState) => state.userDetails.error);

//   console.log('userDetails:', userDetails);
//   console.log('Component loading:', loading);
//   console.log('Component error:', error);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
// const handleEditClick=()=>{
//   setIsEditing(isEditing)
// }

// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setFormValues({
//     ...formValues,
//     [name]: value,
//   });
// };

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   try {
//     await dispatch(updateUserDetails({ userId: profile_id, updatedDetails: formValues }));
//     setIsEditing(false); // Exit edit mode after successful update
//   } catch (error) {
//     console.error('Failed to update user details:', error);
//     // Handle error state if needed
//   }
// };
//   return (
//     <div>
//       <h2 className="flex items-center text-[30px] text-vysyamalaBlack font-bold mb-5">Family Details
//         <MdModeEdit className="text-2xl text-main ml-2 cursor-pointer" onClick={handleEditClick} />
//       </h2>
//       <div>
//           <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-2 gap-x-4">
//           <div>
//         <div className="grid grid-rows-1 grid-cols-2">
//           <div>
//           <h5 className="text-[20px] text-ash font-semibold mb-2">About My Family:
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value={userDetails?.about_family || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.about_family || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Father Name :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value={userDetails?.father_name || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.father_name || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Father Occupation :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value={userDetails?.father_occupation || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.father_occupation || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Mother Name :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value={userDetails?.mother_name || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.mother_name || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Mother Occupation :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value={userDetails?.mother_occupation || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.mother_occupation || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Family Status :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value={userDetails?.family_status || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.family_status || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Family Value :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value={userDetails?.family_value || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.family_value || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Family Type :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.family_type || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal"> {userDetails?.family_type || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Sisters :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.no_of_sister || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.no_of_sister || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Hobbies :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.hobbies || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.hobbies || '-'}</span>
//                             )}
//                         </h5>
           
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">About YourSelf :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.about_self || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal"> {userDetails?.about_self || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Blood Group :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.blood_group || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.blood_group || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Physically Challenged:
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value=  {userDetails?.Pysically_changed || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal"> {userDetails?.Pysically_changed || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Sisters :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.no_of_sister || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.no_of_sister || '-'}</span>
//                             )}
//              </h5>
         
//           </div>
//           <div>
//           <h5 className="text-[20px] text-ash font-semibold mb-2">Sisters Married :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value=  {userDetails?.no_of_sis_married || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal"> {userDetails?.no_of_sis_married || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Brothers :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value=  {userDetails?.no_of_brother || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal"> {userDetails?.no_of_brother || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Brothers Married :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.no_of_bro_married || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.no_of_bro_married || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Property Details :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.property_details || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.property_details || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Property Worth :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.property_worth || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.property_worth || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Suya Gothram :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.suya_gothram || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.suya_gothram || '-'}</span>
//                             )}
//                         </h5>
              
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Uncle Orgin :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value=  {userDetails?.uncle_gothram || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal"> {userDetails?.uncle_gothram || '-'}</span>
//                             )}
//                         </h5>
//                         <h5 className="text-[20px] text-ash font-semibold mb-2">Ancester Orgin :
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     name="aboutFamily"
//                                     value= {userDetails?.ancestor_origin || '-'}
//                                     onChange={handleChange}
//                                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                                 />
//                             ) : (
//                                 <span className="font-normal">{userDetails?.ancestor_origin || '-'}</span>
//                             )}
//                         </h5>
             
//           </div>
//         </div>
//         </div>
//         {isEditing && (
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
//             Save Changes
//           </button>
//         )}
//       </form>
//     </div>
//       </div>
    
//   );
// // };
// import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import { MdModeEdit } from 'react-icons/md';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../Redux/Store/store';
// import { fetchUserDetails, updateUserDetails } from '../../../Redux/Slice/userDetailSlice';

// export const Family = () => {
//   const dispatch = useDispatch();
//   const [isEditing, setIsEditing] = useState(false);
//   const [formValues, setFormValues] = useState({
//     about_family: '',
//     father_name: '',
//     father_occupation: '',
//     mother_name: '',
//     mother_occupation: '',
//     family_status: '',
//     family_value: '',
//     family_type: '',
//     no_of_sister: '',
//     hobbies: '',
//     about_self: '',
//     blood_group: '',
//     Pysically_changed: '',
//     no_of_sis_married: '',
//     no_of_brother: '',
//     no_of_bro_married: '',
//     property_details: '',
//     property_worth: '',
//     suya_gothram: '',
//     uncle_gothram: '',
//     ancestor_origin: '',
//   });

//   const profile_id = 'VY240050';
//   const page_id = '3'; // Replace with your actual page_id logic

//   useEffect(() => {
//     if (profile_id) {
//       console.log('Dispatching fetchUserDetails with:', { profile_id, page_id });
//       dispatch(fetchUserDetails({ profile_id, page_id }));
//     }
//   }, [dispatch, profile_id, page_id]);

//   const userDetails = useSelector((state: RootState) => state.userDetails.details);
//   const loading = useSelector((state: RootState) => state.userDetails.status === 'loading');
//   const error = useSelector((state: RootState) => state.userDetails.error);

//   console.log('userDetails:', userDetails);
//   console.log('Component loading:', loading);
//   console.log('Component error:', error);

//   const handleEditClick = () => {
//     setIsEditing(true);
//     setFormValues({
//       about_family: userDetails?.about_family || '',
//       father_name: userDetails?.father_name || '',
//       father_occupation: userDetails?.father_occupation || '',
//       mother_name: userDetails?.mother_name || '',
//       mother_occupation: userDetails?.mother_occupation || '',
//       family_status: userDetails?.family_status || '',
//       family_value: userDetails?.family_value || '',
//       family_type: userDetails?.family_type || '',
//       no_of_sister: userDetails?.no_of_sister || '',
//       hobbies: userDetails?.hobbies || '',
//       about_self: userDetails?.about_self || '',
//       blood_group: userDetails?.blood_group || '',
//       Pysically_changed: userDetails?.Pysically_changed || '',
//       no_of_sis_married: userDetails?.no_of_sis_married || '',
//       no_of_brother: userDetails?.no_of_brother || '',
//       no_of_bro_married: userDetails?.no_of_bro_married || '',
//       property_details: userDetails?.property_details || '',
//       property_worth: userDetails?.property_worth || '',
//       suya_gothram: userDetails?.suya_gothram || '',
//       uncle_gothram: userDetails?.uncle_gothram || '',
//       ancestor_origin: userDetails?.ancestor_origin || '',
//     });
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await dispatch(updateUserDetails({ profile_id, page_id, updatedDetails: formValues }));
//       setIsEditing(false); // Exit edit mode after successful update
//     } catch (error) {
//       console.error('Failed to update user details:', error);
//       // Handle error state if needed
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h2 className="flex items-center text-[30px] text-vysyamalaBlack font-bold mb-5">
//         Family Details{' '}
//         {!isEditing && (
//           <MdModeEdit
//             className="text-2xl text-main ml-2 cursor-pointer"
//             onClick={handleEditClick}
//           />
//         )}
//       </h2>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-x-4">
//             <div>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 About My Family:
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="about_family"
//                     value={formValues.about_family}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.about_family || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Father Name :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="father_name"
//                     value={formValues.father_name}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.father_name || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Father Occupation :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="father_occupation"
//                     value={formValues.father_occupation}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.father_occupation || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Mother Name :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="mother_name"
//                     value={formValues.mother_name}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.mother_name || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Mother Occupation :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="mother_occupation"
//                     value={formValues.mother_occupation}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.mother_occupation || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Family Status :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="family_status"
//                     value={formValues.family_status}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.family_status || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Family Value :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="family_value"
//                     value={formValues.family_value}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.family_value || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Family Type :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="family_type"
//                     value={formValues.family_type}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.family_type || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Sisters :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="no_of_sister"
//                     value={formValues.no_of_sister}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.no_of_sister || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Hobbies :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="hobbies"
//                     value={formValues.hobbies}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.hobbies || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 About Self :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="about_self"
//                     value={formValues.about_self}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.about_self || '-'}</span>
//                 )}
//               </h5>
//             </div>
//             <div>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Blood Group :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="blood_group"
//                     value={formValues.blood_group}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.blood_group || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Physically Changed :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="Pysically_changed"
//                     value={formValues.Pysically_changed}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.Pysically_changed || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 No. of Sisters Married :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="no_of_sis_married"
//                     value={formValues.no_of_sis_married}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.no_of_sis_married || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 No. of Brothers :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="no_of_brother"
//                     value={formValues.no_of_brother}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.no_of_brother || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 No. of Brothers Married :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="no_of_bro_married"
//                     value={formValues.no_of_bro_married}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.no_of_bro_married || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Property Details :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="property_details"
//                     value={formValues.property_details}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.property_details || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Property Worth :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="property_worth"
//                     value={formValues.property_worth}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.property_worth || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Suya Gothram :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="suya_gothram"
//                     value={formValues.suya_gothram}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.suya_gothram || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Uncle Gothram :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="uncle_gothram"
//                     value={formValues.uncle_gothram}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.uncle_gothram || '-'}</span>
//                 )}
//               </h5>
//               <h5 className="text-[20px] text-ash font-semibold mb-2">
//                 Ancestor Origin :
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="ancestor_origin"
//                     value={formValues.ancestor_origin}
//                     onChange={handleChange}
//                     className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <span className="font-normal">{userDetails?.ancestor_origin || '-'}</span>
//                 )}
//               </h5>
//             </div>
//           </div>
//           {isEditing && (
//             <div className="mt-4">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 className="ml-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
//                 onClick={() => setIsEditing(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Family;


import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../Redux/Store/store';
import { fetchUserDetails, updateUserDetails } from '../../../Redux/Slice/userDetailSlice';

import { z } from 'zod';

interface FamilyFormValues {
  about_family?: string;
  father_name: string;
  father_occupation?: string;
  mother_name: string;
  mother_occupation?: string;
  family_name?: string;
  family_status?: string;
  family_value?: string;
  family_type?: string;
  no_of_sister?: string;
  hobbies?: string;
  about_self?: string;
  blood_group?: string;
  Pysically_changed?: string;
  no_of_sis_married?: string;
  no_of_brother?: string;
  no_of_bro_married?: string;
  property_details?: string;
  property_worth?: string;
  suya_gothram?: string;
  uncle_gothram?: string;
  ancestor_origin?: string;
}


const familySchema = z.object({
  about_family: z.string().min(3, { message: 'About family is required' }),
  father_name: z.string().min(3, { message: 'Father name is required' }),
  father_occupation: z.string().min(3, { message: 'Father occupation   is required' }),
  mother_name: z.string().min(3, { message: 'Mother name name is required' }),
  mother_occupation: z.string().min(3, { message: 'mother occupation name is required' }),
  family_name: z.string().min(3, { message: 'Family name is required' }),
  family_status: z.string().min(2, { message: 'Family status is required' }),
  family_value: z.string().min(2, { message: 'Family value is required' }),
  family_type: z.string().min(3, { message: 'Family type is required' }),
  no_of_sister: z.string().min(0, { message: 'no of sister is required' }),
  hobbies: z.string().min(3, { message: '  Hobbies is required' }),
  about_self: z.string().min(3, { message: 'About self is required' }),
  blood_group: z.string()
  .regex(/^[A-Z]+$/, { message: 'Blood group must be in uppercase' }) // Ensures uppercase letters
  .min(1, { message: 'Blood group is required' }),
  Pysically_changed: z.string().min(2, { message: ' Pysically changed is required' }),
  no_of_sis_married: z.string().min(0, { message: '  No of sister married is required' }),
  no_of_brother: z.string().min(0, { message: '  No of brother is required' }),
  no_of_bro_married: z.string().min(0, { message: 'No of brother married is required' }),
  property_details: z.string().min(3, { message: ' Property details is required' }),
  property_worth: z.string().min(3, { message: 'Property worth is required' }),
  suya_gothram: z.string().min(3, { message: 'Father name is required' }),
  uncle_gothram: z.string().min(3, { message: ' Uncle_gothram is required' }),
  ancestor_origin: z.string().min(3, { message: ' Ancestor_origin is required' }),
});

export const Family = () => {

  
  const dispatch: AppDispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState<FamilyFormValues>({
    about_family: '',
    father_name: '',
    father_occupation: '',
    mother_name: '',
    mother_occupation: '',
    family_name:'',
    family_status: '',
    family_value: '',
    family_type: '',
    no_of_sister: '',
    hobbies: '',
    about_self: '',
    blood_group: '',
    Pysically_changed: '',
    no_of_sis_married: '',
    no_of_brother: '',
    no_of_bro_married: '',
    property_details: '',
    property_worth: '',
    suya_gothram: '',
    uncle_gothram: '',
    ancestor_origin: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const profile_id = 'VY240065';
  const page_id = '3'; // Replace with your actual page_id logic

  useEffect(() => {
    if (profile_id) {
      console.log('Dispatching fetchUserDetails with:', { profile_id, page_id });
      dispatch(fetchUserDetails({ profile_id, page_id }));
    }
  }, [dispatch, profile_id, page_id]);

  const userDetails = useSelector((state: RootState) => state.userDetails.details);
  const loading = useSelector((state: RootState) => state.userDetails.status === 'loading');
  const error = useSelector((state: RootState) => state.userDetails.error);

  console.log('userDetails:', userDetails);
  console.log('Component loading:', loading);
  console.log('Component error:', error);

  const handleEditClick = () => {
    setIsEditing(true);
    setFormValues({
      about_family:userDetails?.about_family || '',
      father_name:userDetails?.father_name || '',
      father_occupation: userDetails?.father_occupation || '',
      mother_name: userDetails?.mother_name || '',
      mother_occupation: userDetails?.mother_occupation || '',
      family_name:userDetails?.family_name||'',
      family_status: userDetails?.family_status || '',
      family_value: userDetails?.family_value || '',
      family_type: userDetails?.family_type || '',
      no_of_sister: userDetails?.no_of_sister || '',
      hobbies: userDetails?.hobbies || '',
      about_self: userDetails?.about_self || '',
      blood_group: userDetails?.blood_group || '',
      Pysically_changed: userDetails?.Pysically_changed || '',
      no_of_sis_married: userDetails?.no_of_sis_married || '',
      no_of_brother: userDetails?.no_of_brother || '',
      no_of_bro_married: userDetails?.no_of_bro_married || '',
      property_details: userDetails?.property_details || '',
      property_worth: userDetails?.property_worth || '',
      suya_gothram: userDetails?.suya_gothram || '',
      uncle_gothram: userDetails?.uncle_gothram || '',
      ancestor_origin: userDetails?.ancestor_origin || '',
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    // Clear the error for the specific field being edited
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     await dispatch(updateUserDetails({ profile_id,  updatedDetails: formValues }));
  //     setIsEditing(false); // Exit edit mode after successful update
  //   } catch (error) {
  //     console.error('Failed to update user details:', error);
  //     // Handle error state if needed
  //   }
  // };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate the form values against the schema
      const validation = familySchema.safeParse(formValues);
      if (!validation.success) {
        const fieldErrors: { [key: string]: string } = {};
        validation.error.errors.forEach(error => {
          if (error.path.length > 0) {
            fieldErrors[error.path[0]] = error.message;
          }
        });
        setErrors(fieldErrors);
        return;
      }

      // Clear any previous errors
      setErrors({});
      
      await dispatch(updateUserDetails({ profile_id, updatedDetails: formValues }));
      setIsEditing(false); // Exit edit mode after successful update
    } catch (error) {
      console.error('Failed to update user details:', error);
      // Handle error state if needed
    }
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
        <h2 className="flex items-center text-[30px] text-vysyamalaBlack font-bold mb-5">Family Details
                <MdModeEdit className="text-2xl text-main ml-2 cursor-pointer" onClick={handleEditClick} />
            </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                About My Family:
                {isEditing ? (
                  <input
                    type="text"
                    name="about_family"
                    value={formValues.about_family}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.about_family || '-'}</span>
                )}
              </h5>
              {errors.about_family && <p className="text-red-500 text-sm">{errors.about_family}</p>}

              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Father Name :
                {isEditing ? (
                  <input
                    type="text"
                    name="father_name"
                    value={formValues.father_name}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.father_name || '-'}</span>
                )}
              </h5>
              {errors.father_name && <p className="text-red-500 text-sm">{errors.father_name}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Father Occupation :
                {isEditing ? (
                  <input
                    type="text"
                    name="father_occupation"
                    value={formValues.father_occupation}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.father_occupation || '-'}</span>
                )}
              </h5>
              {errors.father_occupation && <p className="text-red-500 text-sm">{errors.father_occupation}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Mother Name :
                {isEditing ? (
                  <input
                    type="text"
                    name="mother_name"
                    value={formValues.mother_name}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.mother_name || '-'}</span>
                )}
              </h5>
              {errors.mother_name && <p className="text-red-500 text-sm">{errors.mother_name}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Mother Occupation :
                {isEditing ? (
                  <input
                    type="text"
                    name="mother_occupation"
                    value={formValues.mother_occupation}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.mother_occupation || '-'}</span>
                )}
              </h5>
              {errors.mother_occupation && <p className="text-red-500 text-sm">{errors.mother_occupation}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Family Name :
                {isEditing ? (
                  <input
                    type="text"
                    name="family_name"
                    value={formValues.family_name}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.family_name || '-'}</span>
                )}
              </h5>          
                  {errors.family_name && <p className="text-red-500 text-sm">{errors.family_name}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Family Status :
                {isEditing ? (
                  <input
                    type="text"
                    name="family_status"
                    value={formValues.family_status}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.family_status || '-'}</span>
                )}
              </h5>
              {errors.family_status && <p className="text-red-500 text-sm">{errors.family_status}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Family Value :
                {isEditing ? (
                  <input
                    type="text"
                    name="family_value"
                    value={formValues.family_value}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.family_value || '-'}</span>
                )}
              </h5>
              {errors.family_value && <p className="text-red-500 text-sm">{errors.family_value}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Family Type :
                {isEditing ? (
                  <input
                    type="text"
                    name="family_type"
                    value={formValues.family_type}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.family_type || '-'}</span>
                )}
              </h5>
              {errors.family_type  && <p className="text-red-500 text-sm">{errors.family_type }</p>}
              </>
            
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Hobbies :
                {isEditing ? (
                  <input
                    type="text"
                    name="hobbies"
                    value={formValues.hobbies}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.hobbies || '-'}</span>
                )}
              </h5>
              {errors.hobbies && <p className="text-red-500 text-sm">{errors.hobbies}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                About Self :
                {isEditing ? (
                  <input
                    type="text"
                    name="about_self"
                    value={formValues.about_self}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.about_self || '-'}</span>
                )}
              </h5>
              {errors.about_self && <p className="text-red-500 text-sm">{errors.about_self}</p>}
              </>
            </div>
            <div>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Blood Group :
                {isEditing ? (
                  <input
                    type="text"
                    name="blood_group"
                    value={formValues.blood_group}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.blood_group || '-'}</span>
                )}
              </h5>
              {errors.blood_group && <p className="text-red-500 text-sm">{errors.blood_group}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Physically Changed :
                {isEditing ? (
                  <input
                    type="text"
                    name="Pysically_changed"
                    value={formValues.Pysically_changed}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.Pysically_changed || '-'}</span>
                )}
              </h5>
              {errors.Pysically_changed && <p className="text-red-500 text-sm">{errors.Pysically_changed}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Sisters :
                {isEditing ? (
                  <input
                    type="text"
                    name="no_of_sister"
                    value={formValues.no_of_sister}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.no_of_sister || '-'}</span>
                )}
              </h5>
              {errors.no_of_sister && <p className="text-red-500 text-sm">{errors.no_of_sister}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                No. of Sisters Married :
                {isEditing ? (
                  <input
                    type="text"
                    name="no_of_sis_married"
                    value={formValues.no_of_sis_married}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.no_of_sis_married || '-'}</span>
                )}
              </h5>
              {errors.no_of_sis_married && <p className="text-red-500 text-sm">{errors.no_of_sis_married}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                No. of Brothers :
                {isEditing ? (
                  <input
                    type="text"
                    name="no_of_brother"
                    value={formValues.no_of_brother}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.no_of_brother || '-'}</span>
                )}
              </h5>
              {errors.no_of_brother && <p className="text-red-500 text-sm">{errors.no_of_brother}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                No. of Brothers Married :
                {isEditing ? (
                  <input
                    type="text"
                    name="no_of_bro_married"
                    value={formValues.no_of_bro_married}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.no_of_bro_married || '-'}</span>
                )}
              </h5>
              {errors.no_of_bro_married && <p className="text-red-500 text-sm">{errors.no_of_bro_married}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Property Details :
                {isEditing ? (
                  <input
                    type="text"
                    name="property_details"
                    value={formValues.property_details}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.property_details || '-'}</span>
                )}
              </h5>
              {errors.property_details && <p className="text-red-500 text-sm">{errors.property_details}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Property Worth :
                {isEditing ? (
                  <input
                    type="text"
                    name="property_worth"
                    value={formValues.property_worth}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.property_worth || '-'}</span>
                )}
              </h5>
              {errors.property_worth && <p className="text-red-500 text-sm">{errors.property_worth}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Suya Gothram :
                {isEditing ? (
                  <input
                    type="text"
                    name="suya_gothram"
                    value={formValues.suya_gothram}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.suya_gothram || '-'}</span>
                )}
              </h5>
              {errors.suya_gothram && <p className="text-red-500 text-sm">{errors.suya_gothram}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Uncle Gothram :
                {isEditing ? (
                  <input
                    type="text"
                    name="uncle_gothram"
                    value={formValues.uncle_gothram}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.uncle_gothram || '-'}</span>
                )}
              </h5>
              {errors.uncle_gothram && <p className="text-red-500 text-sm">{errors.uncle_gothram}</p>}
              </>
              <>
              <h5 className="text-[20px] text-ash font-semibold mb-2">
                Ancestor Origin :
                {isEditing ? (
                  <input
                    type="text"
                    name="ancestor_origin"
                    value={formValues.ancestor_origin}
                    onChange={handleChange}
                    className="font-normal border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <span className="font-normal">{userDetails?.ancestor_origin || '-'}</span>
                )}
              </h5>
              {errors.ancestor_origin && <p className="text-red-500 text-sm">{errors.ancestor_origin}</p>}
              </>
            </div>
          </div>
          {/* {isEditing && (
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                className="ml-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          )} */}

{isEditing && (
                    <div className="flex justify-end items-center space-x-5">
                        <button
                            type="button"
                            onClick={handleEditClick}
                            className="text-main flex items-center rounded-lg font-semibold px-5 py-2.5 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-white text-main flex items-center rounded-lg font-semibold border-2 px-5 py-2.5 cursor-pointer"
                        >
                            Update Changes
                        </button>
                    </div>
                )}
        </form>
      </div>
    </div>
  );
};

export default Family;