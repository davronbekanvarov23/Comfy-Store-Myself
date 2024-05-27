import { FormInput, SubmitBtn } from "../components";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className=" h-screen grid place-items-center">
      <Form className=" card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <FormInput
          label="email:"
          type="email"
          name="email"
          defaoultValue="example@mail.com"
        />
        <FormInput
          label="password:"
          type="password"
          name="password"
          defaoultValue="type here"
        />

        <div className=" mt-10">
          <SubmitBtn text="Login" />
        </div>
        <button className="btn btn-secondary btn-block capitalize">
          guest user
        </button>
        <p className="text-center">
          Not a mamber yet :
          <Link to="/register" className=" text-primary">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
