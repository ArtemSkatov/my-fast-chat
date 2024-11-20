import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { addTask, toggleIsDoneTask } from "@/features/todo/model/todoSlice";
import { Card } from "@/entities/task/ui/Card";


export const TaskList = () => {
  const [value, setValue] = useState('');
  const list = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch();

  const handleCreateTask = () => {
    dispatch(addTask({ title: value, isDone: false, id: Date.now().toString() }));
  };

  return (
    <div>
      <div className="flex gap-2">
        <input className="bg-black border-white border rounded px-2 py-1 text-white" type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        <button
          className="border w-7 h-7 flex items-center justify-center rounded hover:bg-white hover:text-black"
          onClick={handleCreateTask}
        >
        </button>
      </div >
      <div className="flex flex-col gap-2">
        {list.map((task) => (
          <Card {...task} key={task.id} toggleIsDone={() =>dispatch(toggleIsDoneTask(task.id))} />
        ))}
      </div>
    </div >
  );
};