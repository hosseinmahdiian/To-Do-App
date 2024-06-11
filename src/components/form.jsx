import { IoChevronBack } from "react-icons/io5";

const Form = ({ todoHandeler, doing, setDoing, add, setAdd }) => {
  const changHandeler = (e) => {
    setDoing({ ...doing, [e.target.name]: e.target.value });
  };

  
  return (
    <>
      <button
        onClick={() => {
          setAdd(!add);
        }}
        className="flex gap-2 items-center border-2 rounded-full m-5  h-10 w-10 hover:bg-blue-300 ease-out hover:duration-300 "
      >
        <IoChevronBack className=" m-auto font-bold text-lg text-blue-400 dark:text-blue-300"/>
        
      </button>

      <form className=" flex flex-col gap-2">
        <input
          className="input"
          placeholder="add title"
          type="text"
          value={doing.title}
          name={"title"}
          onChange={changHandeler}
        />
        <label
          htmlFor=""
          className={!!doing.title ? `hidden ` : ` text-red-400 font-mono ml-5 `}
        >
          Writing Title
        </label>

        <input
          className="!h-32 input"
          placeholder="add discrption"
          type="text"
          value={doing.discrption}
          name={"discrption"}
          onChange={changHandeler}
        />

        <input
          required
          className="input"
          type="time"
          value={doing.time}
          name={"time"}
          onChange={changHandeler}
        />
        <label
          htmlFor=""
          className={!!doing.time ? `hidden ` : ` text-red-400 font-mono ml-5`}
        >
          Writing Time
        </label>

        <input
          required
          className="input"
          type="date"
          value={doing.date}
          name={"date"}
          onChange={changHandeler}
        />
        <label
          htmlFor=""
          className={!!doing.date ? `hidden ` : ` text-red-400 font-mono ml-5`}
        >
          Writing Date
        </label>
        <label
          htmlFor="important"
          className="flex items-center gap-2 text-center input dark:text-zinc-300"
        >
          this is important for you ?
          <input
            className="mt-1 "
            type="checkbox"
            name="important"
            id="important"
            checked={doing.important}
            onChange={(e) => {
              setDoing({ ...doing, [e.target.name]: e.target.checked });
            }}
          />
          <span>yes</span>
        </label>
        <hr className="my-8 tex border-2 mx-aut container " />
        <button
          disabled={
            !!doing?.time && !!doing?.time && !!doing?.date ? false : true
          }
          onClick={todoHandeler}
          className={`bg-blue-400 dark:bg-blue-600 text-white font-bold input `}
        >
          Record
        </button>
      </form>
    </>
  );
};

export default Form;
