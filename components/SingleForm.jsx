const SingleForm = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-1">
        <span>{props.firstName}</span>
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
  );
};
export default SingleForm;
