import React, { useEffect } from 'react';
import { MdModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../Redux/Store/store";
import { fetchUserDetails } from "../../../Redux/Slice/userDetailSlice";

export const Horoscope = () => {
  const dispatch = useDispatch();

  const profile_id = 'VY240050';
  const page_id = '5'; // Replace with your actual page_id logic

  useEffect(() => {
    if (profile_id) {
      console.log('Dispatching fetchUserDetails with:', { profile_id, page_id });
      dispatch(fetchUserDetails({ profile_id, page_id }));
    }
  }, [dispatch, profile_id, page_id]);

  const userDetails = useSelector((state: RootState) => state.userDetails.details);
  const loading = useSelector((state: RootState) => state.userDetails.status === 'loading');
  const error = useSelector((state: RootState) => state.userDetails.error);

  console.log('Component userDetails:', userDetails);
  console.log('Component loading:', loading);
  console.log('Component error:', error);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2 className="flex items-center text-[30px] text-vysyamalaBlack font-bold mb-5">Horoscope Details
                <MdModeEdit className="text-2xl text-main ml-2 cursor-pointer" />
            </h2>

            <div>
                <div className="grid grid-rows-1 grid-cols-2">

                    <div>
                        <h5 className="text-[20px] text-ash font-semibold mb-2">Tamil Year :
                            <span className="font-normal"> Srimukha</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Tamil Month :
                            <span className="font-normal"> Karthikai</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Tamil Day :
                            <span className="font-normal"> 18, Friday</span></h5>
                            <h5 className="text-[20px] text-ash font-semibold mb-2">Telugu Year :
                            <span className="font-normal"> -</span></h5>

                            <h5 className="text-[20px] text-ash font-semibold mb-2">Time Of Birth:
                            <span className="font-normal">{userDetails?.time_of_birth||'-'}</span></h5>
                           
                            <h5 className="text-[20px] text-ash font-semibold mb-2">Place Of Birth:
                            <span className="font-normal">{userDetails?.place_of_birth||'-'}</span></h5>

                            <h5 className="text-[20px] text-ash font-semibold mb-2">BirthStar Name:
                            <span className="font-normal">{userDetails?.birthstar_name||'-'}</span></h5>

                            <h5 className="text-[20px] text-ash font-semibold mb-2">Birth Rasi Name:
                            <span className="font-normal">{userDetails?.birth_rasi_name||'-'}</span></h5>

             
             

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Telugu Month :
                            <span className="font-normal"> -</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Telugu Day :
                            <span className="font-normal"> 22 years</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Rasi :
                            <span className="font-normal"> Kadagam</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Star - Padham :
                            <span className="font-normal"> Poosam</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Lagnam :
                            <span className="font-normal"> Magaram</span></h5>
                    </div>

                    <div>
                        <h5 className="text-[20px] text-ash font-semibold mb-2">Nallikai :
                            <span className="font-normal">{userDetails?.nalikai||'-'}</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Didi :
                            <span className="font-normal"> No</span></h5>

                            <h5 className="text-[20px] text-ash font-semibold mb-2">lagnam Didi :
                            <span className="font-normal">{userDetails?.lagnam_didi||'-'}</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Suya Gothram :
                            <span className="font-normal"> Palisetla</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Madhulam :
                            <span className="font-normal"> Vasthrakula</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Dasa  :
                            <span className="font-normal">{userDetails?.dasa_name||'-'}</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Dasa Balance :
                            <span className="font-normal">{userDetails?.dasa_balance||'-'}</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Chevvai Dosham :
                            <span className="font-normal">{userDetails?.hevvai_dosaham||'-'}</span></h5>

                        <h5 className="text-[20px] text-ash font-semibold mb-2">Sarpa Dosham :
                            <span className="font-normal">{userDetails?.ragu_dosham||'-'}</span></h5>

                            <h5 className="text-[20px] text-ash font-semibold mb-2">Horoscope Hints :
                            <span className="font-normal">{userDetails?.horoscope_hints||'-'}</span></h5>

                            <h5 className="text-[20px] text-ash font-semibold mb-2">Rasi Kattam:
                            <span className="font-normal">{userDetails?.rasi_kattam||'-'}</span></h5>

                            <h5 className="text-[20px] text-ash font-semibold mb-2">Amsa Kattam :
                            <span className="font-normal">{userDetails?.amsa_kattam||'-'}</span></h5>

           
                    </div>
                </div>
            </div>
        </div>
    )
}
