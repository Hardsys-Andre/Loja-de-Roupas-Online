import ProductCarousel from "../../components/carrossel/index";
import { roupas } from "../../Data";

const Catalog = () => {
  // Filtro dos produtos por categoria
  const vestido = roupas.filter((p) => p.tipo === "vestido");
  const macaquinho = roupas.filter((p) => p.tipo === "macaquinho");
  const plus = roupas.filter((p) => p.tipo === "plus-size");

  return (
    <div className="flex flex-col w-full md:w-full pb-11 items-center bg-whiteNormal">
      <div className="flex flex-col w-[90%] mt-6 md:mt-10 lg:mt-15">
        <ProductCarousel title="Vestidos" roupas={vestido} />
        <ProductCarousel title="Macaquinhos" roupas={macaquinho} />
        <ProductCarousel title="Plus Size" roupas={plus} />
      </div>
    </div>
  );
};

export default Catalog;
