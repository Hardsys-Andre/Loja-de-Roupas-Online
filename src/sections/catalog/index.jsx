import ProductCarousel from "../../components/carrossel/index";
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/apiService';

const Catalog = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    // Função para buscar os produtos da API
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      if (fetchedProducts) {
        setProdutos(fetchedProducts);  // Atualiza o estado com os produtos
      }
    };

    loadProducts();
  }, []);  // O useEffect roda apenas uma vez após a montagem do componente

  // Filtro dos produtos por categoria
  const frutas = produtos.filter((p) => p.category === "frutas");
  const verduras = produtos.filter((p) => p.category === "verduras");
  const legumes = produtos.filter((p) => p.category === "legumes");
  return (
    <div className="flex flex-col w-full md:w-full pb-11 items-center bg-whiteNormal">
      <div className="flex flex-col w-[90%] mt-6 md:mt-10 lg:mt-15">
        <ProductCarousel title="Frutas" produtos={frutas} />
        <ProductCarousel title="Verduras" produtos={verduras} />
        <ProductCarousel title="Legumes" produtos={legumes} />
      </div>
    </div>
  );
};

export default Catalog;
