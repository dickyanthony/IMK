import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../../components/Button";
import Inputs from "../../components/Input/Input";

export default function Contact(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
}
