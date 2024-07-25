import Thankyou from "../assets/images/Thankyou.png";
import DetailedReg from "../assets/images/DetailedReg.png";
import QuickReg from "../assets/images/QuickReg.png";
import { Link } from "react-router-dom";

export const ThankYou = () => {
  return (
    <div className="bg-gray py-20">
      <div className="container bg-white mx-auto rounded-[12px] shadow-md pt-24 pb-32 px-32">
        <div>
          <img src={Thankyou} alt="Thankyou image" className="mx-auto" />
        </div>

        <div>
          <h5 className="text-[20px] text-ash font-bold text-center mb-2">
            We appreciate your interest in registering your <br /> profile in
            Vysyamala!
          </h5>
          <p className="font-normal text-center text-ashSecondary">
            We provide two options for registering your profile
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 justify-center items-center">
          <div className="px-8 py-10 border-2 border-gray rounded-xl">
            <div className="flex justify-between space-x-3">
              <div>
                <img src={DetailedReg} alt="DetailedReg image" />
              </div>

              <div className="flex-1">
                <h5 className="text-[20px] text-ash font-semibold">
                  Detailed registration
                </h5>
                <p className="text-ashSecondary">
                  Usually takes 5-8 mins. If you have enough time to upload
                  detailed information.
                </p>

                <div className="mt-5">
                  <Link to="/ContactDetails">
                    <button className="bg-main text-white px-5 py-2.5 rounded-md font-semibold">
                      Register Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 py-10 border-2 border-gray rounded-xl">
            <div className="flex justify-between space-x-3">
              <div>
                <img src={QuickReg} alt="DetailedReg image" />
              </div>
              <div className="flex-1">
                <h5 className="text-[20px] text-ash font-semibold">
                  Quick Registration
                </h5>
                <p className="text-ashSecondary">
                  Usually takes 2-3 mins. I am busy, I need Vysyamala Team to
                  update the detailed horoscope.
                </p>

                <div className="mt-5">
                  <button className="text-main px-5 py-2.5 border-2 border-main rounded-md font-semibold">
                    Upload Horoscope and Photo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
