const InputForm = ({
  label,
  type,
  placeholder,
  name,
  icon,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  icon: string;
}) => {
  return (
    <div className="w-full mb-4">
      <label htmlFor="" className="mb-4">
        {label}
      </label>
      <div className="relative w-full">
        {" "}
        <span className="absolute inset-y-0 left-6 flex items-center text-gray-500">
          <img src={`/icons/${icon}`} alt="Icon" className="w-5 h-5" />
        </span>
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          className="w-full ps-14 pe-4 py-4 px-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2F6A62] font-bold"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default InputForm;
