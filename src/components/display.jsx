import { IoChevronBack } from "react-icons/io5";

const Display = ({ setShow, show, id }) => {
  const doing = JSON.parse(localStorage.getItem(id));

  const clickHandeler = () => {
    setShow(!show);
  };

  return (
    <div className="w-full h-full fixed backdrop-blur-md top-0 left-0  dark:text-zinc-300  ">
      <div className="container m-auto mt-32 border rounded-2xl border-blue-600 dark:border-blue-400  dark:bg-slate-600  bg-slate-100 ">
        <span
          onClick={clickHandeler}
          className="flex gap-2 items-center border-2 border-blue-500 rounded-full m-5  h-10 w-10 cursor-pointer hover:bg-blue-300 ease-out hover:duration-300 "
        >
          <IoChevronBack className=" m-auto font-bold text-lg text-blue-400 dark:text-blue-300" />
        </span>

        <div className="">
          <div className="flex justify-around  child:flex child:md:gap-3  container m-auto">
            <span>
              <h3 className="text-xl font-mono ">Title :</h3>
              {doing.title}
            </span>

            <span>
              <h3 className="text-xl font-mono ">Tiem :</h3>
              {doing.time}
            </span>

            <span>
              <h3 className="text-xl font-mono ">Date :</h3>
              {doing.date}
            </span>
          </div>

          <div className="my-10 w-fit ml-10 md:ml-52">
            <span>
              {doing.important && (
                <h3 className="text-xl font-mono mb-4 text-green-500">This work important for you</h3>
              )}
            </span>
            <h3 className="text-xl font-mono ">Discrption :</h3>
            {!!doing.discrption ? (
              doing.discrption
            ) : (
              <h2>dose have discrption</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
