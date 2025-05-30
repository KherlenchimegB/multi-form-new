const InformationForm = (props) => {
  return (
    <div className="flex flex-col justify-between items-center h-[418px] w-full mt-[20px]">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Email</span>
            <span className="text-red-600 text-xs">*</span>
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
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Phone number</span>
            <span className="text-red-600 text-xs">*</span>
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
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Password</span>
            <span className="text-red-600 text-xs">*</span>
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
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <span>Confirm password</span>
            <span className="text-red-600 text-xs">*</span>
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
export default InformationForm;
