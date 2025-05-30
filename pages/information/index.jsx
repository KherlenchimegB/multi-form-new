import { useState } from "react";
import { Smile } from "lucide-react";
import NameForm from "@/components/NameForm";
import InformationForm from "@/components/InformationForm";
// email, firstName, lastName, phoneNumber, username, dateOfBirth, profileImage, password, confirmPassword
export default function Home() {
  return (
    <div className=" flex justify-center items-center  min-h-screen gap-6 sm:p-20 bg-[#F4F4F4] p-8">
      <div className="w-[480px] border rounded-md h-[650px] bg-white p-8 gap-3.5">
        <div className=" h-fit gap-2 ">
          <img src="./pineLogo.png" alt="logo" className="w-[60px] h-[60px]" />
          <p className="text-[26px] font-bold text-[#202124]">Join Us! 😎 </p>
          <p className="text-[#8E8E8E] text-[18px]">
            Please provide all current information accurately.
          </p>
        </div>
        {/* name form */}
        <InformationForm activePageNumber={2} />
      </div>
    </div>
  );
}
