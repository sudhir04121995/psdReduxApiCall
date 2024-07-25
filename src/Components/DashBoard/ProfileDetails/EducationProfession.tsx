import React, { useEffect } from 'react'
import { MdModeEdit } from "react-icons/md";
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/Store/store';
import { fetchUserDetails } from '../../../Redux/Slice/userDetailSlice';
import { useDispatch } from 'react-redux';

export const EducationProfession = () => {
  const dispatch = useDispatch();

  const profile_id = 'VY240050';
  const page_id = '4'; // Replace with your actual page_id logic

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
      <h2 className="flex items-center text-[30px] text-vysyamalaBlack font-bold mb-5">Education & Profession Details
        <MdModeEdit className="text-2xl text-main ml-2 cursor-pointer" />
      </h2>

      <div>
        <div className="grid grid-rows-1 grid-cols-2">

          <div>
            <h5 className="text-[20px] text-ash font-semibold mb-2">Education Level :
              <span className="font-normal">{userDetails?.ug_degeree||'-'}</span></h5>

            <h5 className="text-[20px] text-ash font-semibold mb-2">Education Details :
              <span className="font-normal">{userDetails?.highest_education||'-'}</span></h5>

            <h5 className="text-[20px] text-ash font-semibold mb-2">About Education :
              <span className="font-normal">{userDetails?.about_edu||'-'}</span></h5>

            <h5 className="text-[20px] text-ash font-semibold mb-2">Profession :
              <span className="font-normal"> {userDetails?.profession||'-'}</span></h5>

            <h5 className="text-[20px] text-ash font-semibold mb-2">Company Name :
              <span className="font-normal"> Ganapathi Medicals</span></h5>

            <h5 className="text-[20px] text-ash font-semibold mb-2">Business Name :
              <span className="font-normal"> Ganapathi Medicals</span></h5>

          </div>

          <div>
            <h5 className="text-[20px] text-ash font-semibold mb-2">Business Address :
              <span className="font-normal"> No.36, Puthuplayam Main Road</span></h5>

            <h5 className="text-[20px] text-ash font-semibold mb-2">Annual Income :
              <span className="font-normal">{userDetails?.anual_income||'-'}</span></h5>

              <h5 className="text-[20px] text-ash font-semibold mb-2">Actual Income :
              <span className="font-normal">{userDetails?.actual_income||'-'}</span></h5>

            <h5 className="text-[20px] text-ash font-semibold mb-2">Gross Annual Income :
              <span className="font-normal"> -</span></h5>

            <h5 className="text-[20px] text-ash font-semibold mb-2">Place of Stay :
              <span className="font-normal"> Cuddalore</span></h5>
              <h5 className="text-[20px] text-ash font-semibold mb-2">Carrer Plans :
              <span className="font-normal">{userDetails?.career_plans||'-'}</span></h5>
          </div>

        </div>
      </div>
    </div>
  )
}
