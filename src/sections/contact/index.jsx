import BackgroundImage from "../../assets/desfile.jpg";

const Contact = () => {
  return (
    <div
      id="contato"
      className="w-full min-h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-[#482f2a] text-center p-6 relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div className="relative z-10">
        <h1 className="font-caveat white-normal md:text-[64px] text-[40px] mb-4">
          Faça seu pedido no Whatsapp
        </h1>
        <p className="md:text-[22px] font-semibold text-[18px] mb-6">
          Clique no botão abaixo e fale com um atendente
        </p>
        <a
          href="https://wa.me/5512991912571" target="_blank"
          className="md:text-[20px] bg-whatsappColor mb-16 md:mb-8 border-2 text-white px-12 py-3 rounded-full hover:border-whatsappColor transition-all"
          rel="noopener noreferrer"
        >
          Fale agora no Whatsapp
        </a>
      </div>
    </div>
  );
};

export default Contact;
