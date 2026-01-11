interface iButtonProps {
  label: string;
  onClick?: () => void;
  color: "GRAY" | "PINK" | "BLUE";
  type?: "button" | "submit" | "reset";
}
export default function Button({ label, onClick, color }: iButtonProps) {
    const colorClass = {
        GRAY: "bg-myBlack-light text-myWhite-base border-2",
        PINK: "bg-myPink-dark text-myBlack-dark border-2",
        BLUE: "bg-myBlue-dark text-myWhite-light border-2",
    }
  return (
    <button 
    className={`${colorClass[color]} rounded-sm p-2 cursor-pointer w-[16rem] rounded-sm border-myWhite-light hover:bg-myWhite-light hover:text-myBlack-dark`}
    onClick={onClick}>{label}</button>
  );
}