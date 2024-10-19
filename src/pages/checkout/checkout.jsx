import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext.jsx";
import Logo from "../../assets/logo-loja.jpg";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, calculateTotal } = useContext(CartContext);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const numeroTelefoneDestino = "5512991912571";

  const gerarNumeroPedido = () => {
    return Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
  };

  const handleMudancaTelefone = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 11) input = input.slice(0, 11);

    if (input.length > 6) {
      input = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7)}`;
    } else if (input.length > 2) {
      input = `(${input.slice(0, 2)}) ${input.slice(2)}`;
    } else if (input.length > 0) {
      input = `(${input}`;
    }

    setTelefone(input);
  };

  const handleFinalizarPedido = () => {
    const digitosTelefone = telefone.replace(/\D/g, "");

    if (nome && digitosTelefone.length === 11) {
      const numeroPedido = gerarNumeroPedido();

      const resumoPedido = cartItems
        .map(
          (item) =>
            `${item.quantity}x ${item.nome} - R$ ${(
              parseFloat(item.preco) * item.quantity
            ).toFixed(2)}`
        )
        .join("\n");

      const total = calculateTotal().toFixed(2);
      const mensagem = `Olá, meu nome é ${nome}.\n\nAqui está o resumo do meu pedido:\n\nNúmero do Pedido: ${numeroPedido};\n\n${resumoPedido};\n\nTotal a pagar: R$ ${total};\n\nPor favor, entre em contato comigo pelo número ${telefone}.`;

      const mensagemCodificada = encodeURIComponent(mensagem);
      const urlWhatsapp = `https://wa.me/${numeroTelefoneDestino}?text=${mensagemCodificada}`;

      setTimeout(() => {
        window.open(urlWhatsapp, "_blank");
      }, 500);

      setNome("");
      setTelefone("");
      toast.success("Pedido finalizado com sucesso!");
    } else {
      toast.error("Por favor, preencha todos os campos corretamente.");
    }
  };

  const handleFechar = () => {
    navigate("/");
  };

  const handleCarrinho = () => {
    navigate("/carrinho");
  };

  return (
    <div className="container font-outfit lg:w-[60%] w-[95%] mx-auto mt-4 rounded-3xl p-4 bg-gray-100 min-h-screen">
      <ToastContainer />
      <div className="flex md:flex-row flex-col justify-center md:gap-16 items-center h-[250px]">
        <img
          src={Logo}
          alt="Logotipo Juliana Modas"
          className="md:w-[250px] w-[200px] rounded-[125px] border-2 border-[#8f6f6e]"
        />
        <h2 className="md:text-6xl text-4xl font-semibold font-caveat mb-6">
          Checkout
        </h2>
      </div>
      <div className="flex text-[12px] md:text-[18px] gap-2 m-2 cursor-pointer items-center">
        <FaPlus className="text-redNormal" />
        <span onClick={handleFechar}>Adicionar Produtos</span>|
        <span onClick={handleCarrinho}>Voltar na cesta</span>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {cartItems.map((item, index) => {
            const totalPorProduto = parseFloat(item.preco) * item.quantity;

            return (
              <li
                key={index}
                className="flex justify-between items-center p-4 border-b border-gray-200"
              >
                <div className="flex flex-col md:flex-row items-center space-x-4 justify-between w-full">
                  <div className="flex flex-row justify-start w-full items-center gap-4">
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-medium">{item.nome}</h3>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                    <p className="text-gray-600 flex flex-row">
                      R$ {parseFloat(item.preco).toFixed(2)}{" "}
                      <span className="mx-2"> x {item.quantity}</span>
                    </p>
                    <p className="text-gray-800 font-semibold">
                      Total: R$ {totalPorProduto.toFixed(2)}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex justify-between items-center">
          <h3 className="md:text-xl font-bold">Total a pagar:</h3>
          <p className="md:text-2xl font-semibold">
            R$ {calculateTotal().toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col mt-6 md:w-[300px] w-90%">
          <h3 className="md:text-xl font-bold mb-4">Informações do Cliente</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Celular</label>
            <input
              type="text"
              value={telefone}
              onChange={handleMudancaTelefone}
              max={11}
              placeholder="(XX) XXXXX-XXXX"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleFinalizarPedido}
            className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all"
          >
            Enviar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
