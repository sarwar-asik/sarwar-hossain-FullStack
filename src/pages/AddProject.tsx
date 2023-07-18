import React from "react";
import { useForm } from "react-hook-form";

const AddProject = () => {
  const { register, handleSubmit,formState:{ errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="live">Live:</label>
        <input
          type="text"
          id="live"
          {...register("live", { required: true })}
        />
        {errors.live && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="source">Source:</label>
        <input
          type="text"
          id="source"
          {...register("source", { required: true })}
        />
        {errors.source && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="text"
          id="time"
          {...register("time", { required: true })}
        />
        {errors.time && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="img">Image URL:</label>
        <input type="text" id="img" {...register("img", { required: true })} />
        {errors.img && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="tech">Tech:</label>
        <input
          type="text"
          id="tech"
          {...register("tech", { required: true })}
        />
        {errors.tech && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="image1">Car Image 1:</label>
        <input
          type="text"
          id="image1"
          {...register("image1", { required: true })}
        />
        {errors.image1 && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="image2">Car Image 2:</label>
        <input
          type="text"
          id="image2"
          {...register("image2", { required: true })}
        />
        {errors.image2 && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="image3">Car Image 3:</label>
        <input
          type="text"
          id="image3"
          {...register("image3", { required: true })}
        />
        {errors.image3 && <span>This field is required</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProject;
