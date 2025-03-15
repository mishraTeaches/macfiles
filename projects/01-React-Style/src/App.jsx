// import AuthInputs from './components/AuthInputs.jsx';
import React, { useState } from "react";
// import Header from './components/Header.jsx';
import { LikedUnliked } from "./components/LikedUnlikedState";
import { ModalDialog } from "./components/DialogComponent";

// import StarRating from "./components/StarRating";
// import TrafficLight from "./components/TrafficLight";
// import JobStories from "./components/APIcallingReactjs";
// import HeavyComponent from "./components/HeavyComponent";

// import NumberList from "./components/useMemovsUsecallback";

//import Stopwatch from "./components/Stopwatch";
// import { ExampleUseEffectandUseEffectEvent } from "./components/useEffectuseEffectEvent";

// const config = {
//   red: {
//     backgroundColor: "red",
//     duration: 4000,
//     next: "green",
//   },
//   yellow: {
//     backgroundColor: "yellow",
//     duration: 500,
//     next: "red",
//   },
//   green: {
//     backgroundColor: "green",
//     duration: 3000,
//     next: "yellow",
//   },
// };

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false); // Modal starts open
  const [title, setTitle] = useState("Modal Dialog");
  // const [rating, setRating] = useState(3);
  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  //   console.log("New Rating:", newRating);
  // };
  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);
  // const [input, setInput] = useState("");
  // const [otherState, setOtherState] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <main>
        {!isModalOpen && <button onClick={handleOpen}>Open Modal</button>}
        {/* <AuthInputs /> */}
        {/* <Stopwatch /> */}
        {/* <ExampleUseEffectandUseEffectEvent /> */}
        {/* {<NumberList />} */}
        {/* {
          <StarRating
            maxStars={5}
            initialRating={rating}
            onRatingChange={handleRatingChange}
          />
        } */}
        {/* <div className="wrapper">
          <TrafficLight initialColor="green" config={config} />
        </div> */}
        {/* <JobStories /> */}

        {/* <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => setOtherState(otherState + 1)}>
            Update Other State
          </button>
          <HeavyComponent value={input} />
        </div> */}
        {/* <LikedUnliked /> */}
        {isModalOpen && (
          <ModalDialog title={title} onClose={handleClose}>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections.
          </ModalDialog>
        )}
      </main>
    </>
  );
}

// import { useState } from "react";
// import AddTask from "./components/AddTasks.jsx";
// import TaskList from "./components/TasksList.jsx";

// export default function TaskApp() {
//   const [tasks, setTasks] = useState(initialTasks);

//   function handleAddTask(text) {
//     setTasks([
//       ...tasks,
//       {
//         id: nextId++,
//         text: text,
//         done: false,
//       },
//     ]);
//   }

//   function handleChangeTask(task) {
//     setTasks(
//       tasks.map((t) => {
//         if (t.id === task.id) {
//           return task;
//         } else {
//           return t;
//         }
//       })
//     );
//   }

//   function handleDeleteTask(taskId) {
//     setTasks(tasks.filter((t) => t.id !== taskId));
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Visit Kafka Museum,and have some food after this,so that you wont shout again", done: true },
//   { id: 1, text: "Watch a puppet show", done: false },
//   { id: 2, text: "Lennon Wall pic", done: false },
// ];
