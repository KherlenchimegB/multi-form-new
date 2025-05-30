import { useState } from "react";
import PictureForm from "@/components/PictureForm";
import NameForm from "@/components/NameForm";
import InformationForm from "@/components/InformationForm";

export default function Home() {
  const [activePageNumber, setActivePageNumber] = useState(1);
  // const [isValidFirstName, setisValidFirstName] = useState(true);
  // const [isValidLastName, setisValidLastName] = useState(true);
  // const [isValidUserName, setisValidUserName] = useState(true);
  const [isValidData, setIsValidData] = useState({
    isValidFirstName: true,
    isValidLastName: true,
    isValidUserName: true,
    isValidPhoneNumber: true,
    isValidEmail: true,
    isValidPassword: true,
  });
  const [nameFormData, setNameFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    picture: "",
    birthDate: "",
  });

  const addUser = () => {
    switch (activePageNumber) {
      case 1: {
        if (
          nameFormData.firstName !== "" &&
          nameFormData.lastName !== "" &&
          nameFormData.userName !== ""
        ) {
          const newUser = {
            firstName: nameFormData.firstName,
            lastName: nameFormData.lastName,
            userName: nameFormData.userName,
          };
          setNameFormData({ ...nameFormData, newUser });
          if (activePageNumber < 4) {
            setActivePageNumber(activePageNumber + 1);
            console.log("activePageNumber", activePageNumber);
          }
          setIsValidData((isValidData.isValidFirstName = true));
          console.log("isValidFirstName", isValidData.isValidFirstName);
          setIsValidData(isValidData.isValidLastName);
          setIsValidData(isValidData.isValidUserName);
        } else {
          if (nameFormData.firstName !== "") {
            setIsValidData(!isValidData.isValidFirstName);
          }
          if (nameFormData.lastName !== "") {
            setIsValidData(!isValidData.isValidLastName);
          }
          if (nameFormData.userName !== "") {
            setIsValidData(!isValidData.isValidUserName);
          }
        }
      }
      case 2:
        if (
          validateEmail(nameFormData.email) &&
          validatePhoneNumber(nameFormData.phoneNumber) &&
          nameFormData.password === nameFormData.confirmPassword
        ) {
          const newUser = {
            phoneNumber: nameFormData.phoneNumber,
            email: nameFormData.email,
            password: nameFormData.password,
            confirmPassword: nameFormData.confirmPassword,
          };
          setNameFormData({ ...nameFormData, newUser });
          if (activePageNumber < 4) {
            setActivePageNumber(activePageNumber + 1);
            console.log("activePageNumber", activePageNumber);
          }
          setIsValidData(isValidData.isValidEmail);
          setIsValidData(isValidData.isValidPhoneNumber);
          console.log("isValidPhoneNumber", isValidData.isValidPhoneNumber);
          setIsValidData(isValidData.isValidEmail);
          setIsValidData(isValidData.isValidPassword);
        }
      case 3: {
        const newUser = {
          phoneNumber: nameFormData.birthDate,
          email: nameFormData.picture,
        };
        setNameFormData({ ...nameFormData, newUser });
        if (activePageNumber < 4) {
          setActivePageNumber(activePageNumber + 1);
          console.log("activePageNumber", activePageNumber);
        }
      }

      default:
        return;
    }
  };

  const back = () => {
    if (activePageNumber > 1) {
      setActivePageNumber(activePageNumber - 1);
      console.log("activePageNumber", activePageNumber);
    }
  };

  const validateEmail = (email) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validatePhoneNumber = (phonNumber) => {
    var results = /^\+?\d{8}$/;
    return results.test(phonNumber);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addUser();
    }
  };

  return (
    <div className=" flex justify-center items-center min-h-screen gap-16 bg-[#F4F4F4] p-8">
      <div
        className={`"w-[480px] border-none rounded-md ${
          activePageNumber < 4 ? " h-[650px] " : " h-[200px] "
        } bg-white p-8 gap-auto"`}
      >
        <div className=" h-fit gap-2">
          <img src="./pineLogo.png" alt="logo" className="w-[60px] h-[60px]" />
          <p className="text-[26px] font-bold text-[#202124]">Join Us! 😎 </p>
          <p className="text-[#8E8E8E] text-[18px]">
            {activePageNumber < 4
              ? "Please provide all current information accurately."
              : "We have received your submission. Thank you!"}
          </p>
        </div>
        {/* name form */}
        {activePageNumber === 1 && (
          <NameForm
            activePageNumber={activePageNumber}
            setNameFormData={setNameFormData}
            handleKeyDown={handleKeyDown}
            nameFormData={nameFormData}
            addUser={addUser}
            isValidFirstName={isValidData.isValidFirstName}
            isValidLastName={isValidData.isValidLastName}
            isValidUserName={isValidData.isValidUserName}
          />
        )}
        {activePageNumber === 2 && (
          <InformationForm
            activePageNumber={activePageNumber}
            setNameFormData={setNameFormData}
            handleKeyDown={handleKeyDown}
            nameFormData={nameFormData}
            addUser={addUser}
            back={back}
            validatePhoneNumber={validatePhoneNumber}
            validateEmail={validateEmail}
          />
        )}
        {activePageNumber === 3 && (
          <PictureForm
            activePageNumber={activePageNumber}
            setNameFormData={setNameFormData}
            handleKeyDown={handleKeyDown}
            nameFormData={nameFormData}
            addUser={addUser}
            back={back}
          />
        )}
      </div>
    </div>
  );
}
