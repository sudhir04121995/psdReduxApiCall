import React, { useState, useEffect } from "react";
import ContentBlackCard from "../Components/RegistrationForm/ContentBlackCard";
import InputField from "../Components/RegistrationForm/InputField";
import SideContent from "../Components/RegistrationForm/SideContent";
import arrow from "../assets/icons/arrow.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import config from '../API'; // Import the configuration file


// API call URLs
const COUNTRY_API_URL = `${config.apiUrl}/auth/Get_Country/`;
const STATE_API_URL = `${config.apiUrl}/auth/Get_State/`;
const CONTACT_REGISTRATION_API_URL = `${config.apiUrl}/auth/Contact_registration/`;
const COUNTRY_DATA_API_URL = `${config.apiUrl}/auth/Get_save_details/`;

// ZOD Schema
const schema = zod.object({
  address: zod.string().min(3, "Address is required"),
  country: zod.string().min(1, "Country is required"),
  state: zod.string().min(1, "State is required"),
  city: zod.string().min(3, "City is required"),
  pincode: zod.string().min(6, "Pincode is required"),
  alternatemobileNumber: zod.string().min(10, 'Mobile number must be exactly 10 characters').max(10, 'Mobile number must be exactly 10 characters').optional(),
  whatsappNumber: zod.string().min(10, 'Whatsapp number must be exactly 10 characters').max(10, 'Whatsapp number must be exactly 10 characters').optional(),
  daughterMobileNumber: zod.string().optional(),
  daughterEmail: zod.string().email().optional(),
}).required();

interface FormInputs {
  address: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  alternatemobileNumber?: string;
  whatsappNumber?: string;
  daughterMobileNumber?: string;
  daughterEmail?: string;
}

interface ContactDetailsProps {
  heading?: string;
  desc?: string;
}

interface CountryOption {
  country_id: number;
  country_name: string;
}

interface StateOption {
  state_id: number;
  state_name: string;
}

// interface CountryData {
//   ProfileId: string;
//   Profile_address: string;
//   Profile_country: string;
//   Profile_state: string;
//   Profile_city: string;
//   Profile_pincode: string;
//   Profile_alternate_mobile: string;
//   Profile_whatsapp: string;
//   Profile_mobile_no: string;
// }

const ContactDetails: React.FC<ContactDetailsProps> = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormInputs>({ resolver: zodResolver(schema) });

  const [countryOptions, setCountryOptions] = useState<CountryOption[]>([]);
  const [stateOptions, setStateOptions] = useState<StateOption[]>([]);
  // const [selectedCountryName, setSelectedCountryName] = useState("");
  // const [selectedStateName, setSelectedStateName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const profileId = sessionStorage.getItem("profile_id_new");

  useEffect(() => {
    const fetchCountryData = async () => {
      if (profileId) {
        try {
          const requestData = {
            profile_id: profileId,
            page_id: 1
          };

          const response = await axios.post(COUNTRY_DATA_API_URL, requestData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });

          console.log("API Response:", response.data); // Log the entire API response

          const profileData = response.data.data; // Access the 'data' object directly

          console.log("Profile Data:", profileData); // Log the profile data

          // Set form values here after fetching data
          setValue("address", profileData.Profile_address);
          setValue("country", profileData.Profile_country);
          setValue("state", profileData.Profile_state);
          setValue("city", profileData.Profile_city);
          setValue("pincode", profileData.Profile_pincode);
          setValue("alternatemobileNumber", profileData.Profile_alternate_mobile);
          setValue("whatsappNumber", profileData.Profile_whatsapp);
          setValue("daughterMobileNumber", profileData.Profile_mobile_no);

          // // Print the values to console after setting them
          // console.log("Address:", profileData.Profile_address);
          // console.log("Country:", profileData.Profile_country);
          // console.log("State:", profileData.Profile_state);
          // console.log("City:", profileData.Profile_city);
          // console.log("Pincode:", profileData.Profile_pincode);
          // console.log("Alternate Mobile Number:", profileData.Profile_alternate_mobile);
          // console.log("Whatsapp Number:", profileData.Profile_whatsapp);
          // console.log("Daughter Mobile Number:", profileData.Profile_mobile_no);

        } catch (error) {
          console.error("Error fetching country data:", error);
        }
      } else {
        console.warn("Profile ID not found in sessionStorage");
      }
    };

    fetchCountryData();
  }, [profileId, setValue]);



  useEffect(() => {
    const fetchCountryStatus = async () => {
      try {
        const response = await axios.post(COUNTRY_API_URL);
        const options = Object.values(response.data) as CountryOption[];
        setCountryOptions(options);
      } catch (error) {
        console.error("Error fetching country options:", error);
      }
    };
    fetchCountryStatus();
  }, []);

  const selectedCountryId = watch("country");

  useEffect(() => {
    if (selectedCountryId) {
      const fetchStateStatus = async () => {
        try {
          const response = await axios.post(STATE_API_URL, { country_id: selectedCountryId });
          const options = Object.values(response.data) as StateOption[];
          setStateOptions(options);
        } catch (error) {
          console.error("Error fetching state options:", error);
        }
      };
      fetchStateStatus();

      // const country = countryOptions.find(option => option.country_id === Number(selectedCountryId));
      // if (country) {
      //   setSelectedCountryName(country.country_name);
      // }
    }
  }, [selectedCountryId, countryOptions]);

  // const selectedStateId = watch("state");

  // useEffect(() => {
  //   if (selectedStateId) {
  //     const state = stateOptions.find(option => option.state_id === Number(selectedStateId));
  //     if (state) {
  //       setSelectedStateName(state.state_name);
  //     }
  //   }
  // }, [selectedStateId, stateOptions]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);

    try {
      const profileId = sessionStorage.getItem("profile_id_new");
      if (!profileId) {
        throw new Error("ProfileId not found in sessionStorage");
      }

      const postData = {
        ProfileId: profileId,
        Profile_address: data.address,
        Profile_country: data.country,
        Profile_state: data.state,
        Profile_city: data.city,
        Profile_pincode: data.pincode,
        Profile_alternate_mobile: data.alternatemobileNumber,
        Profile_whatsapp: data.whatsappNumber,
        Profile_mobile_no: data.daughterMobileNumber,
      };

      const response = await axios.post(CONTACT_REGISTRATION_API_URL, postData);
      if (response.data.Status === 1) {
        navigate('/UploadImages');
      } else {
        console.log("Registration unsuccessful:", response.data);
      }
    } catch (error) {
      console.error("Error submitting contact details:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-20">
      <ContentBlackCard
        heading={"Contact Information"}
        desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis "
      />

      <div className="container mt-5 flex justify-between space-x-24">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
          <div>
            <InputField
              label="Address"
              {...register("address")}
              required
            />
            {errors.address && <span className="text-red-500">{errors.address.message}</span>}
          </div>

          <div>
            <label htmlFor="country" className="block mb-1">
              Country <span className="text-main">*</span>
            </label>
            <select
              id="country"
              className="outline-none w-full px-4 py-1.5 border border-ashSecondary rounded"
              {...register("country")}
            >
              <option value="" selected disabled>
                -- Select your Country --
              </option>
              {countryOptions.map((option) => (
                <option key={option.country_id} value={option.country_id}>
                  {option.country_name}
                </option>
              ))}
            </select>
            {errors.country && <span className="text-red-500">{errors.country.message}</span>}
          </div>

          <div>
            <label htmlFor="state" className="block mb-1">
              State <span className="text-main">*</span> (Based on country selection)
            </label>
            <select
              id="state"
              className="outline-none w-full px-4 py-1.5 border border-ashSecondary rounded"
              {...register("state")}
            >
              <option value="" selected disabled>
                -- Select State --
              </option>
              {stateOptions.map((option) => (
                <option key={option.state_id} value={option.state_id}>
                  {option.state_name}
                </option>
              ))}
            </select>
            {errors.state && <span className="text-red-500">{errors.state.message}</span>}
          </div>

          <div>
            <InputField
              label="City"
              required
              {...register("city")}
            />
            {errors.city && <span className="text-red-500">{errors.city.message}</span>}
          </div>

          <div>
            <InputField
              label="Pincode (Based on country selection)"
              type="text"
              required
              {...register("pincode")}
            />
            {errors.pincode && <span className="text-red-500">{errors.pincode.message}</span>}
          </div>

          <div>
            <InputField
              label="Alternate Mobile Number"
              type="tel"
              {...register("alternatemobileNumber")}
            />
            {errors.alternatemobileNumber && <span className="text-red-500">{errors.alternatemobileNumber.message}</span>}
          </div>

          <div>
            <InputField
              label="Whatsapp Number"
              type="tel"
              {...register("whatsappNumber")}
            />
            {errors.whatsappNumber && <span className="text-red-500">{errors.whatsappNumber.message}</span>}
          </div>

          <div className="!mt-12">
            <h1 className="font-bold text-xl text-primary mb-3">
              For Admin Verification
            </h1>

            <div className="space-y-5">
              <div>
                <InputField
                  label="Daughter Mobile Number"
                  type="text"
                  {...register("daughterMobileNumber")}
                />
                {errors.daughterMobileNumber && <span className="text-red-500">{errors.daughterMobileNumber.message}</span>}
              </div>

              <div>
                <InputField
                  label="Daughter Email"
                  type="email"
                  {...register("daughterEmail")}
                />
                {errors.daughterEmail && <span className="text-red-500">{errors.daughterEmail.message}</span>}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button className="flex items-center py-[10px] px-14 bg-gradient text-white rounded-[6px] mt-2" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Next'}
                <span>
                  <img src={arrow} alt="next arrow" className="ml-2" />
                </span>
              </button>
            </div>
          </div>
        </form>

        <SideContent />
      </div>
    </div>
  );
};

export default ContactDetails;
