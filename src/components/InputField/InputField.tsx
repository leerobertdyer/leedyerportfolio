import { FormData } from "@/app/(pages)/contact/page";
import { UseFormRegister } from "react-hook-form";

type PropsDefinition = {
  labelName: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  register?: UseFormRegister<FormData>;
};

export default function InputField({
  labelName,
  id,
  disabled,
  required,
  register,
}: PropsDefinition) {
    return (
        <div className='flex flex-col w-[90%] text-myWhite-base '>
          <label htmlFor={id} className=''>{labelName}</label>
          <input
            type={id === 'email' ? 'email' : 'text'}
            id={id}
            disabled={disabled ?? false}
            required={required}
            className='rounded-lg p-2 border-2 text-myBlack-base w-full mt-1 focus:outline-myPink-dark'
            {...register && register(id as 'name' | 'email', {
              required: required,
              ...(id === 'email' && {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address"
                }
              })
            })}
          />
        </div>
      );
    }
    
