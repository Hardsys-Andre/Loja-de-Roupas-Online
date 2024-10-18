import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// Configuração do CORS
app.use(cors());

// Middleware para permitir requisições JSON
app.use(express.json());

// Rota para listar usuários
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Rota para adicionar usuários
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = await prisma.user.create({
    data: { name, email },
  });
  res.json(newUser);
});

// Rota para listar produtos
app.get('/products', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// Rota para adicionar produtos
app.post('/products', async (req, res) => {
  const { name, unit, price, category, quantity, description } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        unit,
        price,
        category,
        quantity,
        description,
        // createdAt e updatedAt são gerenciados automaticamente pelo Prisma
      },
    });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding product' });
  }
});

// Inicialização do servidor
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
