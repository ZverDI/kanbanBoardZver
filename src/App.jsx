import './App.scss';
import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";


function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("kanbanTasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : {
        backlog: [],
        ready: [],
        inProgress: [],
        done: [],
      };
  });

  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  const getActiveTaskCount = () => (tasks.ready.length + tasks.inProgress.length);
  const getFinishedTaskCount = () => tasks.done.length;

   return (
     <div className="wrapper">
      <Header />
      <Main tasks={tasks} setTasks={setTasks}/>
      <Footer activeCount={getActiveTaskCount()} finishedCount={getFinishedTaskCount()} />
     </div>);
}
export default App;