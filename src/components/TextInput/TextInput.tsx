interface iTextInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
export default function TextInput({
  id,
  label,
  placeholder,
  value,
  onChange,
  required,
}: iTextInputProps) {
  return (
    <div className="flex flex-col w-[90%] text-myWhite-base ">
      <label htmlFor={id}>{label}{required && <span className="text-myPink-dark">*</span>}</label>
      <input
        className="rounded-sm p-2 border-2 text-myBlack-base w-full mt-1 focus:outline-myPink-dark"
        type="text"
        id={id}
        placeholder={`${placeholder}${required ? "*" : ""}`}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
