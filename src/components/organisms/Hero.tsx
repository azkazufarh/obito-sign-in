import Form from "./Form";

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center bg-[#F8FAF9]">
      <div className="w-full h-full  flex justify-center items-center order-2 md:order-1">
        <div className="w-[80%] bg-white rounded my-4 p-4">
          <h1 className="text-3xl font-bold mb-8">Update Your Skill</h1>
          <Form />
        </div>
      </div>
      <img
        src="/images/hero.png"
        alt=""
        className="w-full order-1 md:order-2"
      />
    </div>
  );
};

export default Hero;
