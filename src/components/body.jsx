import { useEffect, useMemo, useState } from "react";
import Form from "./form";
import { v4 as uuid } from "uuid";
import ToDoList from "./toDoList";
import toast from "react-hot-toast";
// import { IoAddOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

const Body = () => {
  const [doing, setDoing] = useState({});
  const [toDo, setToDo] = useState([]);
  const [add, setAdd] = useState(false);

  const newUuid = uuid();

  const keys = Object.keys(localStorage);

  useMemo(() => {
    keys.map((item) => {
      if (item != "them") 
        setToDo((toDo) => [...toDo, JSON.parse(localStorage.getItem(item))]);
      
    });
  }, []);

  const todoHandeler = (e) => {
    toast.success("Add Successfully");
    e.preventDefault();
    localStorage.setItem(newUuid, JSON.stringify({ ...doing, id: newUuid }));
    setDoing({
      title: "",
      discrption: "",
      time: "",
      date: "",
      important: false,
      id: "",
    });
    setToDo((toDo) => [...toDo, JSON.parse(localStorage.getItem(newUuid))]);
  };

  {
    if (!add)
      return (
        <>
          {toDo.length == 0 ? (
            <div className="flex gap-1 m-auto items-center font-mono container justify-around my-6">
              <h2 className="font-mono text-3xl">Add Todo </h2>
              <IoAddOutline
                onClick={() => {
                  setAdd(!add);
                }}
                className="w-10 h-10 md:w-14 md:h-14  border-4 border-blue-200 rounded-full text-blue-600 cursor-pointer"
              />
            </div>
          ) : (
            <ToDoList toDo={toDo} add={add} setAdd={setAdd} />
          )}
        </>
      );
  }
  {
    if (add)
      return (
        <div className="container m-auto my-6 ">
          <Form
            todoHandeler={todoHandeler}
            setDoing={setDoing}
            doing={doing}
            add={add}
            setAdd={setAdd}
          />
        </div>
      );
  }
};

export default Body;
