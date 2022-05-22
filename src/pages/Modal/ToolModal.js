import React from 'react';
import { useForm } from "react-hook-form";

const ToolModal = ({tool}) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>

      {/* <label for="tool-modal"  class="btn modal-button">open modal</label> */}
{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="tool-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="tool-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <form onSubmit={handleSubmit(onSubmit)}>
      <input className='input input-bordered input-info w-full max-w-xs' {...register("name", { required: true })} /> <br />
      {errors.name?.type === 'required' && "Name is required"} <br />
      
      <input className='input input-bordered input-info w-full max-w-xs my-5' {...register("email", { required: true })} /> <br />
      {errors.email && "Email name is required"}
      
      <input className='input input-bordered input-info bg-info w-full max-w-xs' type="submit" />
    </form>
   
  </div>
</div>
        </div>
    );
};

export default ToolModal;