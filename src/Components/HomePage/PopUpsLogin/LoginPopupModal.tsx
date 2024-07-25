import React, { useState } from 'react';
import { LoginPopup } from './LoginPopup';
import { ForgetPassword } from './ForgetPassword';
import { PhoneLoginPopup } from '../PopUpsLogin/PhoneLoginPopup';
import { OtpVerify } from './OtpVerify';
import { EmailSent } from "./EmailSent";
import { useNavigate } from 'react-router-dom';
import { AccountSetup } from '../PopUpsReg/AccountSetup';
import { BasicDetails } from '../PopUpsReg/BasicDetails';
import { OtpVerification } from '../PopUpsReg/OtpVerification';





interface LoginPopupModalProps {
    onClose: () => void;
    onForgetPassword: () => void;
}

export const LoginPopupModal: React.FC<LoginPopupModalProps> = ({ onClose }) => {

    const navigate = useNavigate();


    const [showPopup, setShowPopup] = useState<"loginPopup" | "forgetPassword" | "phoneLoginPopup" | "otpVerify" | "emailSent"|"accountSetup"|"basicDetails"|"otpVerification">("loginPopup");
    const [mobileNumber, setMobileNumber] = useState<string>("");

    const navigateToForgetPassword = () => {
        setShowPopup("forgetPassword");
    };

    const navigateToEmailSent = () => {
        setShowPopup("emailSent");
    };

    const navigateToLogin = () => {
        setShowPopup("loginPopup");
    };

    const navigateToProfileIdLogin = () => {
        setShowPopup("loginPopup")
    };
    const navigateToPhoneLogin = () => {
        setShowPopup("phoneLoginPopup");
    };

    const navigateToOtpVerify = () => {
        setShowPopup("otpVerify");
    };

    const handleLogin = () => {
        console.log('Navigating to LoginHome');
        // window.location.href = '/LoginHome';   // Navigate to LoginHome page after successful login
        navigate('/LoginHome');  // Navigate to LoginHome page after successful login

    };

    const handleSendOtp = () => {
        console.log('Navigating to OtpVerify');
        navigateToOtpVerify();
    };

    const navigateToRegPopup = () => {
        setShowPopup("accountSetup");
    }

    const handleEmailSent = () => {
        console.log('Navigating to EmailSent');
        navigateToEmailSent();
    };

    const accountSetupNext = (mobile: string) => {
        setMobileNumber(mobile);
        setShowPopup("otpVerification");
    };

    const otpVerificationNext = () => {
        setShowPopup("basicDetails");
    };

    const basicDetailsNext = () => {
        console.log('User registered');
        onClose();
    };

    const regpopup = () => {
        setShowPopup("loginPopup");
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-1/4 relative">
                {showPopup === "loginPopup" && (
                    <LoginPopup onNext={handleLogin} onPhoneLogin={navigateToPhoneLogin} onForgetPassword={navigateToForgetPassword} onClose={onClose} registerPopup={navigateToRegPopup} />
                )}
                {showPopup === "forgetPassword" && (
                    <ForgetPassword onBackToLogin={navigateToLogin} onSubmit={handleEmailSent} onClose={onClose} />
                )}
                {showPopup === "phoneLoginPopup" && (
                    <PhoneLoginPopup onNext={handleSendOtp} onClose={onClose} onProfileIdLogin={navigateToProfileIdLogin} />
                )}
                {showPopup === "otpVerify" && (
                    <OtpVerify onNext={handleLogin} onClose={onClose} />
                )}
                {showPopup === "emailSent" && (
                    <EmailSent onBackToLogin={navigateToLogin} onClose={onClose} onNext={handleLogin} />
                )}
                 {showPopup === "accountSetup" && (
                    <AccountSetup  onClose={onClose} onNext={accountSetupNext} handleLoginClick={regpopup} />
                )}
                 {showPopup === "otpVerification" && (
                    <OtpVerification onNext={otpVerificationNext} onClose={onClose} mobileNumber={mobileNumber} />
                )}
                {showPopup === "basicDetails" && (
                    <BasicDetails onNext={basicDetailsNext} onClose={onClose} />
                )}
            </div>
        </div>
    );
};
