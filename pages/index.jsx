import { useState, useEffect } from "react";
import PictureForm from "@/components/PictureForm";
import NameForm from "@/components/NameForm";
import InformationForm from "@/components/InformationForm";

export default function Home() {
  const [activePageNumber, setActivePageNumber] = useState(1);
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
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormInfoValid, setIsFormInfoValid] = useState(false);
  const [isFormPictureValid, setIsFormPictureValid] = useState(false);
  useEffect(() => {
    validateForm();
  }, [nameFormData.firstName, nameFormData.lastName, nameFormData.userName]);

  useEffect(() => {
    validateMailForm();
  }, [
    nameFormData.phoneNumber,
    nameFormData.email,
    nameFormData.password,
    nameFormData.confirmPassword,
  ]);
  useEffect(() => {
    validatePictureForm();
  }, [nameFormData.picture, nameFormData.birthDate]);

  const validateForm = () => {
    let errors = {};

    if (!nameFormData.firstName) {
      errors.firstName = "Нэрээ оруулна уу";
    }
    if (!nameFormData.lastName) {
      errors.lastName = " Овгоо оруулна уу.";
    }
    if (!nameFormData.userName) {
      errors.userName = " Хэрэглэгчийн нэрээ оруулна уу";
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };
  const validatePictureForm = () => {
    let errors = {};

    if (!nameFormData.picture) {
      errors.picture = "Профайл зургаа оруулна уу";
    }
    if (!nameFormData.birthDate) {
      errors.birthDate = " Төрсөн огноогоо оруулна уу.";
    }

    setErrors(errors);
    isFormPictureValid(Object.keys(errors).length === 0);
  };
  const validateMailForm = () => {
    let errors = {};

    if (!nameFormData.phoneNumber) {
      errors.phoneNumber = "Утасны дугаараа оруулна уу.";
    } else if (!/^\+?\d{8}$/.test(nameFormData.phoneNumber)) {
      errors.phoneNumber = "Утасны дугаар дор хаяж 8 тоо байх ёстой.";
    }
    if (!nameFormData.email) {
      errors.email = "Мэйл хаягаа оруулна уу";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nameFormData.email)) {
      errors.email = "Мэйл хаяг биш байна.";
    }
    if (!nameFormData.password) {
      errors.password = "Нууц үгээ оруулна уу";
    } else if (nameFormData.password.length < 6) {
      errors.password = "Нууц үг дор хаяж 6 тэмдэгт агуулах ёстой.";
    }
    if (!nameFormData.confirmPassword) {
      errors.confirmPassword = "Нууц үгээ давтаж оруулна уу";
    } else if (nameFormData.confirmPassword.length < 6) {
      errors.confirmPassword = "Нууц үг дор хаяж 6 тэмдэгт агуулах ёстой.";
    } else if (nameFormData.password !== nameFormData.confirmPassword)
      errors.confirmPassword = "Нууц үг таарахгүй байна.";
    setErrors(errors);
    setIsFormInfoValid(Object.keys(errors).length === 0);
  };
  const addUser = () => {
    const newUser = {
      firstName: nameFormData.firstName,
      lastName: nameFormData.lastName,
      userName: nameFormData.userName,
      phoneNumber: nameFormData.phoneNumber,
      email: nameFormData.email,
      password: nameFormData.password,
      confirmPassword: nameFormData.confirmPassword,
      birthDate: nameFormData.birthDate,
      picture: nameFormData.picture,
    };
    setNameFormData({ ...nameFormData, newUser });
    console.log("nameFormData", nameFormData);

    if (activePageNumber === 1 && isFormValid) {
      setActivePageNumber(2);
    } else if (activePageNumber === 2 && isFormInfoValid) {
      setActivePageNumber(3);
    } else if (activePageNumber === 3 && isFormPictureValid)
      setActivePageNumber(4);
  };
  const back = () => {
    if (activePageNumber > 1) {
      setActivePageNumber(activePageNumber - 1);
    }
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
        <div className="gap-2 h-fit">
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
            errorsFirstName={errors.firstName}
            errorsLastName={errors.lastName}
            errorsUserName={errors.userName}
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
            errorsEmail={errors.email}
            errorsPhoneNumber={errors.phoneNumber}
            errorsPassword={errors.password}
            errorsConfirmPassword={errors.confirmPassword}
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
            errorsPicture={errors.picture}
            errorsBirthDate={errors.birthDate}
          />
        )}
      </div>
    </div>
  );
}
