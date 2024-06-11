import { MdDeleteOutline } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import Display from "./display";
import toast from "react-hot-toast";

const ToDoList = ({ toDo, add, setAdd }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const detailHandeler = (e) => {
    // console.log(e);
    setId(e);
    setShow(!show);
    console.log("this");
  };

  const deleteHadeler = (e) => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    toast.error("deleted todo");
    localStorage.removeItem(e);
  };

  return (
    <>
      <div className=" my-4 m-auto  container">
        <div className=" flex justify-between">
          <h3 className="text-2xl font-mono"> Todo List :</h3>

          <span className="flex gap-1 items-center font-mono">
            <div className="bg-blue-200 border-1 w-4 h-4  items-center"> </div>
            Background Color Is Important
          </span>
          <IoAddOutline
            onClick={() => {
              setAdd(!add);
            }}
            className="w-10 h-10 md:w-14 md:h-14  border-4 border-blue-200 rounded-full text-blue-600 cursor-pointer"
          />
        </div>
        <div className="md:mx-14 md:my-5 flex justify-between  child:w-28 mt-5 child:font-bold">
          <span className="!w-8 "></span>
          <span>Title</span>
          <span>Time</span>
          <span>Date</span>
          <span className="!w-8"></span>
        </div>
        {toDo.map((item) => (
          <div
            key={item.id}
            className={`md:mx-14 md:my-5 my-4 md:p-4 p-2 rounded-2xl border-2 flex justify-between child:w-28 ${
              item.important && `bg-blue-200`
            }`}
          >
            <button
              className="!w-8"
              onClick={() => detailHandeler(item.id)}
              name="btn Dstails"
            >
              <CgDetailsMore />
            </button>
            <span>
              {show && item.id == id && (
                <Display setShow={setShow} show={show} id={item.id} />
              )}
            </span>
            <span className="line-clamp-1">{item.title}</span>
            <span>{item.time}</span>
            <span>{item.date}</span>
            <button
              className="!w-8"
              name="btn Delete"
              onClick={() => deleteHadeler(item.id)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
