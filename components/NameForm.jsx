import { ArrowRight } from "lucide-react";
import SingleForm from "./SingleForm";
const NameForm = (props) => {
  return (
    <div className="flex flex-col justify-between items-center h-[418px] w-full mt-[20px] animate-[wiggle_1s_ease-in-out_infinite] ">
      <div className="flex flex-col w-full gap-3 border-red-400 ">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>First name</span>
            <span className="text-xs text-red-600">*</span>
          </div>
          <input
            type="text"
            placeholder="Your first name ..."
            onChange={(event) => {
              props.setNameFormData({
                ...props.nameFormData,
                firstName: event.target.value,
              });
            }}
            onKeyDown={(event) => {
              props.handleKeyDown(event);
            }}
            value={props.nameFormData.firstName}
            className=" w-full border border-[#CBD5E1] rounded-md p-3"
          />
          {props.errorsFirstName && (
            <p className="text-red-700 ">{props.errorsFirstName}</p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Last name</span>
            <span className="text-xs text-red-600">*</span>
          </div>
          <input
            type="text"
            placeholder="Your last name ..."
            onChange={(event) => {
              props.setNameFormData({
                ...props.nameFormData,
                lastName: event.target.value,
              });
            }}
            onKeyDown={(event) => {
              props.handleKeyDown(event);
            }}
            value={props.nameFormData.lastName}
            className=" w-full border border-[#CBD5E1] rounded-md p-3"
          />
          {props.errorsLastName && (
            <p className="text-red-700 ">{props.errorsLastName}</p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Username</span>
            <span className="text-xs text-red-600">*</span>
          </div>
          <input
            type="text"
            placeholder="Your username ..."
            onChange={(event) => {
              props.setNameFormData({
                ...props.nameFormData,
                userName: event.target.value,
              });
            }}
            onKeyDown={(event) => {
              props.handleKeyDown(event);
            }}
            value={props.nameFormData.userName}
            className=" w-full border border-[#CBD5E1] rounded-md p-3"
          />
          {props.errorsUserName && (
            <p className="text-red-700 ">{props.errorsUserName}</p>
          )}
        </div>
      </div>
      <div className="w-full">
        <button
          className="flex justify-center w-full p-3 text-white bg-black rounded-md gap-1.5 transition-all duration-300 hover:opacity-80 cursor-pointer"
          onClick={props.addUser}
        >
          Continue {props.activePageNumber} / 3 <ArrowRight />
        </button>
      </div>
    </div>
  );
};
export default NameForm;
