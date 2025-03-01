import InputFile from "../atoms/InputFile";
import InputForm from "../molecules/InputForm";
import Button from "../atoms/Button";

const Form = () => {
  return (
    <form action="">
      <InputFile />
      <InputForm
        label="Complete Name"
        type="text"
        placeholder="Type your name"
        name="name"
        icon="profile.svg"
      />
      <InputForm
        label="Occupation"
        type="text"
        placeholder="Type your occupation"
        name="occupation"
        icon="briefcase.svg"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="Type your valid email"
        name="email"
        icon="sms.svg"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
        icon="shield-security.svg"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="password"
        icon="shield-security.svg"
      />
      <Button type="submit" classname="w-full" primary>
        Create My Account
      </Button>
    </form>
  );
};

export default Form;
