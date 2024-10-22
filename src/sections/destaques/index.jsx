import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from "../../CartContext.jsx";
import ScrollingBanner from "../../components/ScrollingBanner";
import { destaques } from "../../Data";

const Destaques = () => {
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

  return (
    <div className="flex flex-col w-full md:w-full mt-6 pb-11 md:mt-10 lg:mt-20 items-center bg-[#482f2a]">
      <div className="bg-gradient-to-r from-[#8f6f6e] via-[#8f6f6e] to-[#482f2a] w-full font-outfit font-semibold py-5 text-whiteNormal text-center">
        <ScrollingBanner />
      </div>
      <div className="flex flex-col w-[95%] mt-6 md:mt-10">
        <div>
          <h2
            id="destaques"
            className="highlights-title font-caveat white-normal text-[30px] md:text-[50px] lg:text-[50px] pb-4 text-left text-whiteNormal"
          >
            Destaques
          </h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              744: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation]}
            className="mySwiper highlight-products"
          >
            {destaques.map(({ nome, preco, imagem, descricao }, index) => (
              <SwiperSlide
                key={index}
                className="product-container bg-whiteNormal justify-center lg:px-4 py-2 font-outfit font-medium text-[14px] lg:text-[16px] xl:text-[20px] text-black-normal rounded-lg"
              >
                <div className="flex flex-col-reverse h-[320px] lg:flex-row p-2 items-top space-x-2">
                  <div className="flex flex-col w-[65%] h-[100%] justify-between">
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold">{nome}</h2>
                      <p className="text-darkFadeColor text-[12px] lg:text-[14px] ">
                        {descricao}
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 justify-end">
                      <hr className="text-darkFadeColor"></hr>
                      <div className="flex items-center space-x-3">
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
                          <span className="flex-grow text-center">{quantities[index]}</span>
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
                            addToCart({ nome, preco, imagem, descricao, quantidade: quantities[index] })
                          }
                        >
                          <FaPlus className="text-whiteNormal" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-image w-[35%]">
                    <img
                      className="w-[100%] h-[300px]"
                      src={imagem}
                      alt={nome}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Destaques;
