import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "src/redux";
import { fetchTasks, getTasks } from "src/redux/Slices/taskSlice";

const Tasks = () => {

  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector(getTasks)
  console.log('tasks', tasks);
  return (
    <>
      <button onClick={() => dispatch(fetchTasks("https://jsonplaceholder.typicode.com/todos"))}>Fetch Tasks</button>
    </>
  )
}

export default Tasks