const Button = ({
  type,
  primary,
  children,
  classname,
}: {
  type: "button" | "submit" | "reset";
  primary?: boolean;
  children: string;
  classname?: string;
}) => {
  return (
    <button
      type={type}
      className={`${
        primary ? "bg-[#2F6A62] text-white" : "bg-white border border-[#EAECEE]"
      } rounded-full px-5 py-3 poppins-semibold ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
