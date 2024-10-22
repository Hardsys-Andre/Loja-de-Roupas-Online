import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { CartContext } from "../../CartContext.jsx";
import { toast } from 'react-toastify';

const ProductCarousel = ({ title, roupas }) => {
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(roupas.map(() => 1));

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

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    containScroll: "trimSnaps",
    align: "start",
    slidesToScroll: 1
  });

  return (
    <div id="produtos" className="product-carousel w-full">
      <div className="section-title flex justify-between items-center">
        <h2 className="font-caveat text-[30px] md:text-[50px] lg:text-[50px] pb-2 text-left text-blackNormal">
          {title}
        </h2>
        <a href="#" className="flex items-center"></a>
      </div>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {roupas && roupas.length > 0 ? (
            roupas.map(({ nome, preco, descricao, imagem }, index) => (
              <div
                key={index}
                className="embla__slide border border-gray-200 hover:border-gray-300 rounded-lg p-2 flex-shrink-0 w-[90%] md:w-[45%] lg:w-[40%] xl:w-[35%] mx-2 select-none"
              >
                <div className="flex flex-col xl:h-[420px] lg:flex-col p-2 items-top gap-1">
                  <div className="flex flex-col-reverse gap-1 sm:flex-row xl:w-[100%] h-[450px] sm:h-[350px]">
                    <div className="flex flex-col gap-2 h-[220px] sm:w-[65%]">
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
            ))
          ) : (
            <div className="text-center p-4">Nenhum produto disponível no momento.</div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  roupas: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
      descricao: PropTypes.string,
      imagem: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductCarousel;
