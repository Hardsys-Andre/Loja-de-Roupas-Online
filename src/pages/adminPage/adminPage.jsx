import { useState } from 'react';
import { createUser, createProduct } from '../../api/apiService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../components/Button/index";
import User from "../testeDB/UserList.jsx";
import Product from "../testeDB/productList.jsx";
import Logo from "../../assets/logo-tana-cesta.png";

function AdminPage() {
  // Estados para os usuários
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Estados para os produtos
  const [productName, setProductName] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  // Função para enviar o formulário de usuário
  const handleUserSubmit = async (event) => {
    event.preventDefault();

    const userData = { name, email };

    try {
      await createUser(userData);
      toast.success('Usuário adicionado com sucesso!');
      setName('');
      setEmail('');
    } catch {
      toast.error('Erro ao adicionar usuário.');
    }
  };

  // Função para enviar o formulário de produto
  const handleProductSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      name: productName,
      unit,
      price: parseFloat(price), // Converte string para número
      category,
      quantity: parseInt(quantity), // Converte string para número
      description,
      image
    };

    try {
      await createProduct(productData);
      toast.success('Produto adicionado com sucesso!');
      setProductName('');
      setUnit('');
      setPrice('');
      setCategory('');
      setQuantity('');
      setDescription('');
      setImage('');
    } catch {
      toast.error('Erro ao adicionar produto.');
    }
  };

  return (
    <div className=''>
      <ToastContainer />
      <div className='flex flex-row gap-4 justify-center items-center'>
        <img className='w-[200px]'
          src={Logo} alt="Logotipo Ta na Cesta" />
        <span className='text-4xl font-bold'>Área do Administrador</span>
      </div>
     <div className='flex flex-col mt-[50px] items-center'>
     <h2 className='text-2xl w-[100%] text-center font-bold bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen'>Adicionar Usuários</h2>
      <form className='flex flex-col mt-4 gap-3 items-center'
      onSubmit={handleUserSubmit}>
        <div className='flex flex-row w-[370px] gap-2 items-center justify-between'>
          <label>
            Name:
            </label>
            <input className='ml-2 w-60 bg-gray-300 border-2 border-gray-500'
              type="text"
              placeholder='Digite seu nome completo'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
        </div>
        <div className='flex flex-row w-[370px] gap-2 items-center justify-between'>
          <label>
            Email:
            </label>
            <input className='ml-2 w-60 bg-gray-300 border-2 border-gray-500'
              type="email"
              placeholder='Digite seu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        </div>
        <Button 
        className="bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen font-outfit font-semibold px-2 md:px-2 py-2 
                text-whiteNormal rounded-xl hover:text-white hover:border-4 hover:border-scale-105"
        type="submit"  
        label="Adicionar Usuário" />
      </form>
     </div>
      

      <div className='flex flex-col mt-[50px] items-center'>
      <h2 className='text-2xl w-[100%] text-center font-bold bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen'>Adicionar Produtos</h2>
      <form className='flex flex-col mt-4 gap-3 items-center'
      onSubmit={handleProductSubmit}>
        <div className='flex flex-row w-[370px] gap-2 items-center justify-between'>
          <label>
            Product Name:
          </label>
            <input className='ml-2 w-60 bg-gray-300 border-2 border-gray-500'
              type="text"
              placeholder='Digite o nome do produto'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
        </div>
        <div className='flex flex-row w-[370px] gap-2 items-center justify-between'>
          <label>
            Unit:
            </label>
            <input className='ml-2 w-60 bg-gray-300 border-2 border-gray-500'
              type="text"
              placeholder='Digite a unidade de medida'
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            />
        </div>
        <div className='flex flex-row w-[370px] gap-2 items-center justify-between'>
          <label>
            Price:
            </label>
            <input className='ml-2 w-60 bg-gray-300 border-2 border-gray-500'
              type="number"
              placeholder='Digite o preço do produto'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
        </div>
        <div className='flex flex-row w-[370px] gap-2 items-center justify-between'>
          <label>
            Category:
            </label>
            <input className='ml-2 w-60 bg-gray-300 border-2 border-gray-500'
              type="text"
              placeholder='Digite a categoria do produto'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
        </div>
        <div className='flex flex-row w-[370px] gap-2 items-center justify-between'>
          <label>
            Quantity:
            </label>
            <input className='ml-2 w-60 bg-gray-300 border-2 border-gray-500'
              type="number"
              placeholder='Digite a quantidade de produtos'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
        </div>
        <div className='flex flex-row w-[370px] gap-2 items-center justify-between'>
          <label>
            Description:
          </label>
            <input className='ml-2 w-60 bg-gray-300 border-2 border-gray-500'
              type="text"
              placeholder='Digite uma descrição do produto'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
        </div>
        <div className='flex flex-row w-[370px] gap-2 items-center justify-between'>
          <label>
            Image:
          </label>
            <input className='ml-2 w-60 bg-gray-300 border-2 border-gray-500'
              type="text"
              placeholder='Cole a URL da imagem do produto'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
        </div>
        <Button 
        className="bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen font-outfit font-semibold px-2 md:px-2 py-2 
                text-whiteNormal rounded-xl hover:text-white hover:border-4 hover:border-scale-105"
        type="submit"  
        label="Adicionar Produto" />
      </form>
      </div>
      <div>
        <User />
        <Product />

      </div>
    </div>
  );
}

export default AdminPage;
