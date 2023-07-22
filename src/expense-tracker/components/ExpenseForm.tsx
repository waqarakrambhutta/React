import { z } from "zod";
import categories from "../categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const validator = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(100),
  amount: z
    .number({invalid_type_error:'Amount should be less than 100,000'})
    .min(0.01)
    .max(100_000),
  category: z.enum(categories,{
    errorMap:()=>({message:'Select the Category'})
  })
});

type ExpenseFormData = z.infer<typeof validator>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(validator) });

  return (
    <form onSubmit={handleSubmit(data=>console.log(data))}>
      <div className="mb-3">
        <label htmlFor="description" className="">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="">
          Amount
        </label>
        <input
          {...register("amount",{valueAsNumber:true})}
          id="amount"
          type="text"
          className="form-control"
        />
         {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="dropdown">Categories</label>
        <select {...register("category")} id="dropdown" className="form-select">
          <option value="">All Catagories</option>
          {categories.map((catagory) => (
            <option key={catagory} value={catagory}>
              {catagory}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
