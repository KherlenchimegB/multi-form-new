import { ArrowRight, ArrowLeft } from "lucide-react";
const InformationForm = (props) => {
  return (
    <div className="flex flex-col justify-between items-center h-[418px] w-full mt-[20px]">
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Email</span>
            <span className="text-xs text-red-600">*</span>
          </div>
          <input
            type="email"
            placeholder="Your email ..."
            onChange={(event) => {
              props.setNameFormData({
                ...props.nameFormData,
                email: event.target.value,
              });
            }}
            onKeyDown={(event) => {
              props.handleKeyDown(event);
            }}
            value={props.nameFormData.email}
            className=" w-full border border-[#CBD5E1] rounded-md p-3"
          />
          {props.errorsEmail && (
            <p className="text-red-700 ">{props.errorsEmail}</p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Phone number</span>
            <span className="text-xs text-red-600">*</span>
          </div>
          <input
            type="text"
            placeholder="Phone number..."
            onChange={(event) => {
              props.setNameFormData({
                ...props.nameFormData,
                phoneNumber: event.target.value,
              });
            }}
            onKeyDown={(event) => {
              props.handleKeyDown(event);
            }}
            value={props.nameFormData.phoneNumber}
            className=" w-full border border-[#CBD5E1] rounded-md p-3"
          />
          {props.errorsPhoneNumber && (
            <p className="text-red-700 ">{props.errorsPhoneNumber}</p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Password</span>
            <span className="text-xs text-red-600">*</span>
          </div>
          <input
            type="Password"
            placeholder="Your password"
            onChange={(event) => {
              props.setNameFormData({
                ...props.nameFormData,
                password: event.target.value,
              });
            }}
            onKeyDown={(event) => {
              props.handleKeyDown(event);
            }}
            value={props.nameFormData.password}
            className=" w-full border border-[#CBD5E1] rounded-md p-3"
          />
          {props.errorsPassword && (
            <p className="text-red-700 ">{props.errorsPassword}</p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Confirm password</span>
            <span className="text-xs text-red-600">*</span>
          </div>
          <input
            type="Password"
            placeholder="Confirm password"
            onChange={(event) => {
              props.setNameFormData({
                ...props.nameFormData,
                confirmPassword: event.target.value,
              });
            }}
            onKeyDown={(event) => {
              props.handleKeyDown(event);
            }}
            value={props.nameFormData.confirmPassword}
            className=" w-full border border-[#CBD5E1] rounded-md p-3"
          />
          {props.errorsConfirmPassword && (
            <p className="text-red-700 ">{props.errorsConfirmPassword}</p>
          )}
        </div>
      </div>
      <div className="flex w-full gap-3">
        <button
          className="flex gap-1.5 bg-white p-3 border border-[#CBD5E1] rounded-md w-1/3 transition-all duration-300 hover:opacity-80 cursor-pointer"
          onClick={props.back}
        >
          <ArrowLeft /> Back
        </button>
        <button
          className="flex justify-center w-2/3 p-3 text-white transition-all duration-300 bg-black rounded-md cursor-pointer hover:opacity-80"
          onClick={props.addUser}
        >
          Continue {props.activePageNumber} / 3 <ArrowRight />
        </button>
      </div>
    </div>
  );
};
export default InformationForm;
