import { FormInput, SubmitBtn } from "../components";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className=" h-screen grid place-items-center">
      <Form className=" card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <FormInput
          label="fullname:"
          type="text"
          name="name"
          defaoultValue="Davronbek Anvarov"
        />

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
          defaoultValue="123123"
        />

        <div className=" mt-10">
          <SubmitBtn text="Register" />
        </div>
        <button className="btn btn-secondary btn-block capitalize">
          guest user
        </button>
        <p className="text-center">
          Not a mamber yet :
          <Link to="/login" className=" text-primary">
          Login
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
