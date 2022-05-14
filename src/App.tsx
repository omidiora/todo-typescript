import React,{useState ,useEffect, ChangeEvent} from 'react';
import './App.css';
type ITask={
  deadline: number;
  task: string
}
const App:React.FC= () =>{
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
    if(event.target.name=="task"){
      setTask(event.target.value);
    }
    else{
      setDeadline(Number(event.target.value))
    }
  }

  const addEvent=()=>{
    let newState={deadline:deadline, task:task}
    setTodoList([...todoList ,newState]);
  }
console.log(todoList, '√√todoListtodoList')
  return (
       <div className="App">
      <div className="header">
      <div className="inputContainer">
      <input type="text" placeholder="task.." 
       value={task}
      onChange={handleChange}
      name="task" 
      />
      <input type="number" placeholder="Deadline (in days)..."  
      name="deadline"
       onChange={handleChange}
       value={deadline}
      />
      </div>
      <button onClick={addEvent}>Add Task</button>
      </div>
      <div className="todolist">
        {}
        
      </div>

      </div>
      
    
 
  );
}

export default App;
