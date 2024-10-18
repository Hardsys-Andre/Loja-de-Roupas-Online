import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar produtos
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://my-api-production-1531.up.railway.app/products'); // URL da API online
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch products', error);
      setLoading(false);
    }
  };

  // Chama a função fetchProducts ao carregar o componente
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className='mt-[50px] mx-5'>
      <h1 className='text-2xl w-[100%] text-center font-bold bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen'>Lista de produtos cadastrados</h1>
      <div className='flex flex-row mt-[50px]'>
        <ul className='flex flex-wrap gap-[50px]'>
        {products.map((product) => (
          <li key={product.id}>
            <h3>Product: {product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity} {product.unit}</p>
            <p className='w-[200px]'>Description: {product.description}</p>
            {/* Adicionando a imagem */}
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ProductList;
