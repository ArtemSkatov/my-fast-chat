import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Task } from "../types/task";

export const Card = ({ title, isDone, toggleIsDone }: { toggleIsDone: () => void; } & Task) => {
  return (
    <div className="border-white border rounded-md p-3 flex justify-between items-center">
      <p>{title}</p>
      <button onClick={toggleIsDone}>{isDone ? <FaRegCheckCircle className="w-5 h-5" /> : <IoMdCloseCircleOutline className="w-5 h-5" />}</button>
    </div>
  );
};
