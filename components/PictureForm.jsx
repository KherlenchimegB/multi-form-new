import { ArrowRight, ArrowLeft } from "lucide-react";
const PictureForm = (props) => {
  return (
    <div className="flex flex-col justify-between items-center h-[418px] w-full mt-[20px]">
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Date of birth</span>
            <span className="text-xs text-red-600">*</span>
          </div>
          <input
            type="date"
            placeholder="Your birth date ..."
            onChange={(event) => {
              props.setNameFormData({
                ...props.nameFormData,
                birthDate: event.target.value,
              });
            }}
            onKeyDown={(event) => {
              props.handleKeyDown(event);
            }}
            value={props.nameFormData.birthDate}
            className=" w-full border border-[#CBD5E1] rounded-md p-3"
          />
          {props.errorsBirthDate && (
            <p className="text-red-700 ">{props.errorsBirthDate}</p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Profile picture</span>
            <span className="text-xs text-red-600">*</span>
          </div>
          <div className="w-full h-[200px] bg-gray-200 flex justify-center items-center">
            <input
              type="file"
              placeholder="Add image..."
              onChange={(event) => {
                props.setNameFormData({
                  ...props.nameFormData,
                  picture: event.target.value,
                });
              }}
              onKeyDown={(event) => {
                props.handleKeyDown(event);
              }}
              value={props.nameFormData.picture}
              className=" w-[20px] h-[20px] "
            />
            {props.errorsPicture && (
              <p className="text-red-700 ">{props.errorsPicture}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full gap-3">
        <button
          className="flex gap-1.5 bg-white p-3 border border-[#CBD5E1] rounded-md w-1/3"
          onClick={props.back}
        >
          <ArrowLeft /> Back
        </button>
        <button
          className="flex justify-center w-2/3 p-3 text-white bg-black rounded-md"
          onClick={props.addUser}
        >
          Continue {props.activePageNumber}/3 <ArrowRight />
        </button>
      </div>
    </div>
  );
};
export default PictureForm;
