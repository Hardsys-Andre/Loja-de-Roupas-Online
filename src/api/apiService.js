import axios from 'axios';

// URL da sua API
const apiUrl = 'https://my-api-production-1531.up.railway.app';

// Função para buscar usuários
export async function fetchUsers() {
  try {
    const response = await axios.get(`${apiUrl}/user`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
}

// Função para buscar produtos
export async function fetchProducts() {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
}

// Função para cadastrar um usuário
export async function createUser(userData) {
  try {
    const response = await axios.post(`${apiUrl}/user`, userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Função para cadastrar um produto
export async function createProduct(productData) {
  try {
    const response = await axios.post(`${apiUrl}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error.response ? error.response.data : error.message);
    throw error;
  }
}
