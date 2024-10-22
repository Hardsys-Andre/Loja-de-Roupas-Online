import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CartContext } from "../../CartContext.jsx";
import ScrollingBanner from "../../components/ScrollingBanner";
import { destaques } from "../../Data";
import useEmblaCarousel from 'embla-carousel-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Destaques = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    containScroll: 'trimSnaps',
    dragFree: true,
    align: 'start'
  });
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(destaques.map(() => 1));

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success('Item adicionado ao carrinho');
  };

  return (
    <div className="flex flex-col w-full md:w-full mt-6 pb-11 md:mt-10 lg:mt-20 items-center bg-[#482f2a]">
      <ToastContainer />
      <div className="bg-gradient-to-r from-[#8f6f6e] via-[#8f6f6e] to-[#482f2a] w-full font-outfit font-semibold py-2 text-whiteNormal text-center">
        <ScrollingBanner />
      </div>
      <div className="flex flex-col mt-6 md:mt-10 w-full">
        <h2
          className="font-caveat white-normal text-[30px] md:text-[50px] lg:text-[50px] pb-4 text-left text-whiteNormal px-4"
        >
          Destaques
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {destaques.map(({ nome, preco, imagem, descricao }, index) => (
              <div
                key={index}
                className="bg-whiteNormal justify-center lg:px-4 py-2 font-outfit text-[14px] lg:text-[16px] xl:text-[20px] text-black-normal rounded-lg flex-shrink-0 w-[90%] md:w-[45%] lg:w-[40%] xl:w-[35%] mx-2 select-none"
              >
                <div className="flex flex-col xl:h-[420px] lg:flex-col p-2 items-top gap-1">
                  <div className="flex flex-col-reverse gap-1 sm:flex-row xl:w-[100%] h-[410px] sm:h-[350px]">
                    <div className="flex flex-col gap-2 h-[180px] sm:w-[65%]">
                      <h2 className="font-bold">{nome}</h2>
                      <p className="text-darkFadeColor text-[12px] lg:text-[14px]">
                        {descricao}
                      </p>
                    </div>
                    <div className="xl:w-[35%]">
                      <img
                        className="w-[100%] h-[220px] sm:h-[300px] sm:object-cover pointer-events-none"
                        src={imagem}
                        alt={nome}
                      />
                    </div>
                  </div>
                    <div className="flex flex-col gap-4">
                      <hr className="text-darkFadeColor"></hr>
                      <div className="flex items-center justify-between">
                        <p className="product-price font-bold text-2xl">
                          R$ {preco.toFixed(2)}
                        </p>
                        <div className="flex items-center w-[80px] border-2 rounded">
                          <button
                            className="px-2 text-lg font-bold"
                            onClick={() => decrementQuantity(index)}
                          >
                            -
                          </button>
                          <span className="flex-grow text-center">
                            {quantities[index]}
                          </span>
                          <button
                            className="px-2 text-lg font-bold"
                            onClick={() => incrementQuantity(index)}
                          >
                            +
                          </button>
                        </div>
                        <div
                          className="bg-redNormal p-2 rounded-full cursor-pointer"
                          onClick={() =>
                            handleAddToCart({
                              nome,
                              preco,
                              imagem,
                              descricao,
                              quantidade: quantities[index],
                            })
                          }
                        >
                          <FaPlus className="text-whiteNormal" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destaques;
