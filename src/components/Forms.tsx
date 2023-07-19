import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Forms = () => {

  const {register, handleSubmit} = useForm()

  return (
    <form onSubmit={handleSubmit(data=>console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register('age')}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
export default Forms;
