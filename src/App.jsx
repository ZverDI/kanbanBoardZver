import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";
import {TaskDetail} from "./components/TaskDetail/TaskDetail";


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
     <Router>
       <div className="wrapper">
         <Header />
         <Routes>
           <Route
             path="/"
             element={<Main tasks={tasks} setTasks={setTasks} />}
           />
           <Route
             path="/task/:id"
             element={<TaskDetail tasks={tasks} />}
           />
         </Routes>
         <Footer activeCount={getActiveTaskCount()} finishedCount={getFinishedTaskCount()} />
       </div>
     </Router>
   );
}
export default App;