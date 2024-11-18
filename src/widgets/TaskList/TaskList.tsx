import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useState } from "react";
import { addToDo } from "@/features/todo/model/todoSlice";


export const TaskList = () => {
  const [value, setValue] = useState('');
  const list = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch();

  return (
    <div>
      {list.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        <button onClick={() => dispatch(addToDo({ title: value, isDone: false, id: Date.now().toString() }))} > +</button>
      </div>
    </div>
  );
};