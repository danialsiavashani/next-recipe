'use client';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import Image from 'next/image';
import RegisterImage from '@/assets/register.svg';
import { registerUserAction } from '@/app/actions/authActions';

function RegisterFormComponent() {
  return (
    <div>
      <>
        <section className="max-w-6xl mx-auto px-4 sm:px-8 grid lg:grid-cols-[1fr,600px] items-center gap-8 mt-20">
          <div className="text-center lg:text-left -mt-20">
            <h1 className="capitalize text-3xl md:text-4xl font-extrabold mb-3 mr-3 ">
              Lets make that
              <span className="text-primary"> heavenly </span>
              recipe
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              Stay on top of your daily food/baking recipes and streamline your
              recipe search with our easy-to-use recipe app.
            </p>
          </div>
          <div className="bg-white shadow-lg bordered p-6 rounded-lg w-full max-w-lg mx-auto lg:mx-0  ">
            <FormContainer action={registerUserAction}>
              <FormInput
                type="text"
                name="name"
                label="Name"
                defaultValue="danial"
              />
              <FormInput
                type="email"
                name="email"
                label="Email"
                defaultValue="danialsiavashani@yahoo.com"
              />
              <FormInput
                type="password"
                name="password"
                label="Password"
                defaultValue="123456"
              />
              <SubmitButton text="Register" className="mt-4 w-full" />
            </FormContainer>
          </div>
          <Image
            src={RegisterImage}
            alt="register"
            className="hidden lg:block -mt-20"
            width={400}
            height={300}
          />
        </section>
      </>
    </div>
  );
}
export default RegisterFormComponent;
