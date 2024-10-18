import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criando clientes
  await prisma.user.createMany({
    data: [
      { name: 'João Silva', email: 'joao.silva@example.com' },
      { name: 'Maria Souza', email: 'maria.souza@example.com' },
      { name: 'Carlos Pereira', email: 'carlos.pereira@example.com' },
    ],
    skipDuplicates: true,
  });

  // Criando produtos
  await prisma.product.createMany({
    data: [
        { name: 'Banana', unit: 'kg', price: 3.5, category: 'Frutas', quantity: 100, description: 'Banana nanica', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/banana.png' },
        { name: 'Maçã', unit: 'kg', price: 4.0, category: 'Frutas', quantity: 80, description: 'Maçã gala', image: '' },
        { name: 'Laranja', unit: 'kg', price: 2.5, category: 'Frutas', quantity: 120, description: 'Laranja pera', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/laranja.png' },
        { name: 'Tomate', unit: 'kg', price: 5.0, category: 'Legumes', quantity: 90, description: 'Tomate italiano', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/tomate.png' },
        { name: 'Alface', unit: 'unidade', price: 2.0, category: 'Verduras', quantity: 50, description: 'Alface crespa', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/alface.png' },
        { name: 'Cenoura', unit: 'kg', price: 3.0, category: 'Legumes', quantity: 70, description: 'Cenoura fresca', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/cenoura.png' },
        { name: 'Cebola', unit: 'kg', price: 4.5, category: 'Legumes', quantity: 100, description: 'Cebola branca', image: '' },
        { name: 'Batata', unit: 'kg', price: 2.8, category: 'Legumes', quantity: 150, description: 'Batata inglesa', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/batata.png' },
        { name: 'Pimentão', unit: 'kg', price: 6.0, category: 'Legumes', quantity: 60, description: 'Pimentão verde', image: '' },
        { name: 'Pepino', unit: 'kg', price: 3.2, category: 'Legumes', quantity: 90, description: 'Pepino japonês', image: '' },
        { name: 'Abobrinha', unit: 'kg', price: 4.5, category: 'Legumes', quantity: 70, description: 'Abobrinha italiana', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/abobora.png' },
        { name: 'Brócolis', unit: 'unidade', price: 5.5, category: 'Verduras', quantity: 30, description: 'Brócolis ninja', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/brocolis.png' },
        { name: 'Couve', unit: 'unidade', price: 2.5, category: 'Verduras', quantity: 40, description: 'Couve manteiga', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/couve.png' },
        { name: 'Morango', unit: 'cx', price: 7.0, category: 'Frutas', quantity: 60, description: 'Morango vermelhinho', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/morango.png' },
        { name: 'Melancia', unit: 'kg', price: 1.8, category: 'Frutas', quantity: 200, description: 'Melancia inteira', image: '' },
        { name: 'Limão', unit: 'kg', price: 2.0, category: 'Frutas', quantity: 90, description: 'Limão tahiti', image: 'https://raw.githubusercontent.com/Hardsys-Andre/HackathonEcommerce/main/src/frontend/src/assets/limao.png' },
        { name: 'Manga', unit: 'kg', price: 5.0, category: 'Frutas', quantity: 70, description: 'Manga palmer', image: '' },
        { name: 'Repolho', unit: 'unidade', price: 3.0, category: 'Verduras', quantity: 50, description: 'Repolho verde', image: '' },
        { name: 'Beterraba', unit: 'kg', price: 3.8, category: 'Legumes', quantity: 80, description: 'Beterraba roxa', image: '' },
        { name: 'Abacaxi', unit: 'unidade', price: 8.0, category: 'Frutas', quantity: 40, description: 'Abacaxi pérola', image: '' },
      ],
      skipDuplicates: true,
  });

  console.log('Clientes e produtos criados com sucesso.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
