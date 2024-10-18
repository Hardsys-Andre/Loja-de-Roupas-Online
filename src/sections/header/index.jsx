import Button from "../../components/Button/index";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Logo from "../../assets/logo-loja.jpg";

const Header = () => {
  return (
    <div className="flex flex-col w-full md:w-[95%] mt-6 md:mt-8 lg:mt-8 items-center">
      <div className="lg:hidden w-[200px] lg:w-[350px]">
        <img className="rounded-[125px] border-2 border-[#8f6f6e]"
        src={Logo} alt="Logo Juliana Modas" />
      </div>
      <a href="#destaques">
        <span className="text-[#8f6f6e] font-outfit font-extrabold text-xl md:text-xl mt-10 lg:mt-0">
          PEÇA ONLINE
        </span>
      </a>
      <span className="lg:w-[800px] font-caveat text-[40px] md:text-[60px] lg:text-[80px] text-center leading-none">
        Vestidos, Blusinhas, Calças, Pijamas e muito mais!
      </span>
      <span className="mt-6 font-outfit font-semibold text-[20px] text-center">
        Praticidade e conforto: Faça seu pedido online e receba em casa
      </span>
      <div className="flex flex-col md:flex-row font-outfit font-semibold gap-6 mt-6 text-[14px] lg:text-[16px] text-darkFadeColor text-center">
        <span className="ring-2 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
          Roupas de qualidade
        </span>
        <span className="ring-2 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
          Entrega rápida e eficiente
        </span>
        <span className="ring-2 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
          Tamanhos do P ao GG 
        </span>
        <span className="ring-2 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
          Roupas Plus Size
        </span>
      </div>
      <div className="mt-8 h-10">
        <a href="#destaques">
          <Button
            label="Peça agora e experimente"
            className="bg-gradient-to-r from-[#8f6f6e] via-[#8f6f6e] to-[#482f2a] w-full font-outfit font-semibold px-4 md:px-8 py-4 
                text-whiteNormal rounded-xl hover:text-whiteNormal hover:border-4 hover:border-scale-105"
          />
        </a>
      </div>
      <div className="flex flex-row mt-12 text-5xl gap-4">
        <FaInstagram />
        <FaFacebookSquare />
        <FaTwitterSquare />
      </div>
    </div>
  );
};

export default Header;
