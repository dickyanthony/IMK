import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../../components/Button";
import Inputs from "../../components/Input/Input";
import { getWindowDimensions } from "../../constant";

export default function Contact(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const onSubmit = (data) => console.log(data);
  const RenderBig = () => {
    return (
      <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center mt-20 text-2xl">Contact Me</h1>
        <Inputs
          {...register("nameF", { required: true })}
          className="mt-4"
          labelText="Name"
          error={errors.nameF && "name is required"}
        />
        <Inputs
          {...register("messageF", { required: true })}
          className="mt-10"
          labelText="Message"
          error={errors.messageF && "message is required"}
        />
        <SubmitButton containerStyle={{ marginBottom: "30px" }} />
      </form>
    );
  };
  const RenderSm = () => {
    return (
      <form
        className="flex flex-col w-11/12 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center mt-20 text-2xl">Contact Me</h1>
        <Inputs
          {...register("nameF", { required: true })}
          width="full"
          className="mt-4"
          labelText="Name"
          error={errors.nameF && "name is required"}
        />
        <Inputs
          {...register("messageF", { required: true })}
          width="full"
          className="mt-10"
          labelText="Message"
          error={errors.messageF && "message is required"}
        />
        <SubmitButton containerStyle={{ marginBottom: "30px" }} />
      </form>
    );
  };
  return windowDimensions.width > 332 ? <RenderBig /> : <RenderSm />;
}
