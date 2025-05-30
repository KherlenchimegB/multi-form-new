const NameForm = (props) => {
  return (
    <div className="flex flex-col justify-between items-center max-[424px]] w-full mt-[20px]">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>First name</span>
            <span className="text-red-600 text-xs">*</span>
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
          <p
            className={`${
              props.isValidFirstName ? "invisible" : " visible  text-red-700 "
            } `}
          >
            Нэрээ оруулна уу
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Last name</span>
            <span className="text-red-600 text-xs">*</span>
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
          <p
            className={`${
              props.isValidLastName ? "invisible" : " visible  text-red-700 "
            } `}
          >
            Овгоо оруулна уу.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Username</span>
            <span className="text-red-600 text-xs">*</span>
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
          <p
            className={`${
              props.isValidUserName ? "invisible" : " visible  text-red-700 "
            } `}
          >
            Хэрэглэгчийн нэрээ оруулна уу
          </p>
        </div>
      </div>
      <button
        className="bg-black p-1 text-white w-2/3 px-1.5 rounded-md"
        onClick={props.addUser}
      >
        Continue {props.activePageNumber}/3
      </button>
    </div>
  );
};
export default NameForm;
