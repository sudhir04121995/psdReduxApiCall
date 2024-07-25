import React, { useEffect } from 'react'
import { MdModeEdit } from "react-icons/md";
import { fetchUserDetails } from '../../../Redux/Slice/userDetailSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/Store/store';
import { useDispatch } from 'react-redux';

export const Contact = () => {
    const dispatch = useDispatch();

  const profile_id = 'VY240033';
  const page_id = '1'; // Replace with your actual page_id logic

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    return (
        <div>
            <h2 className="flex items-center text-[30px] text-vysyamalaBlack font-bold mb-5">Contact Details
                <MdModeEdit className="text-2xl text-main ml-2 cursor-pointer" />
            </h2>

            <div>
                <div className="grid grid-rows-1 grid-cols-2">

                    <div>
                        <h5 className="text-[20px] text-ash font-semibold mb-2">Address :
                            <span className="font-normal">{userDetails?.Profile_address||'-'}</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">City :
                            <span className="font-normal">{userDetails?.Profile_city||'-'}</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">State :
                            <span className="font-normal">{userDetails?.Profile_state||'-'}</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Country :
                            <span className="font-normal">{userDetails?.Profile_country||'-'}</span></h5>
                            <h5 className="text-[20px] text-ash font-semibold mb-2">Pincode :
                            <span className="font-normal">{userDetails?.Profile_pincode||'-'}</span></h5>
                    </div>

                    <div>
                        <h5 className="text-[20px] text-ash font-semibold mb-2">Phone :
                            <span className="font-normal"></span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Mobile :
                            <span className="font-normal">{userDetails?.Profile_mobile_no||'-'}</span></h5>

                            <h5 className="text-[20px] text-ash font-semibold mb-2">Alternative Mobile :
                            <span className="font-normal">{userDetails?.Profile_alternate_mobile||'-'}</span></h5>


                        <h5 className="text-[20px] text-ash font-semibold mb-2">WhatsApp :
                            <span className="font-normal">{userDetails?.Profile_whatsapp||'-'}</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Email :
                            <span className="font-normal"> Harini@gmail.com</span></h5>

                    </div>
                </div>
            </div>
        </div>
    )
}
