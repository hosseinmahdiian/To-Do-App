import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container border  border-blue-700 m-auto rounded-3xl flex justify-around p-5 font-serif text-blue-950  dark:text-zinc-200 ">
      {/* conections */}
      <ul className="child:flex  child:justify-between  child:items-center child:gap-3 child-hover:cursor-pointer">
        <li>
          <p>instagram</p>
          <FaInstagram />
        </li>
        <li>
          <p>telegram</p>
          <FaTelegram />
        </li>
        <li>
          <p>whatsapp</p>
          <FaWhatsapp />
        </li>
      </ul>

      {/* company */}
      <ul>
        <li>
          <p>about us</p>
        </li>
        <li>
          <p>products</p>
        </li>
        <li>
          <a>shops</a>
        </li>
      </ul>

      {/* address*/}
      <div>
        <h5>address</h5>
        <p>Tehran / Iran</p>
      </div>
      
    </div>
  );
};

export default Footer;
