const PictureForm = (props) => {
  return (
    <div className="flex flex-col justify-between items-center h-[418px] w-full mt-[20px]">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Date of birth</span>
            <span className="text-red-600 text-xs">*</span>
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
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Profile picture</span>
            <span className="text-red-600 text-xs">*</span>
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
          </div>
        </div>
      </div>
      <div className="flex w-full gap-3">
        <button
          className="bg-white p-3 border border-[#CBD5E1] rounded-md"
          onClick={props.back}
        >
          Back
        </button>
        <button
          className="bg-black text-white p-3 rounded-md"
          onClick={props.addUser}
        >
          Continue {props.activePageNumber}/3
        </button>
      </div>
    </div>
  );
};
export default PictureForm;
