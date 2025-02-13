// src/pages/index.js
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bem-vindo ao Restaurante
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Confira nosso cardápio digital e faça seu pedido!
      </p>
      <Link href={"/cardapio"}>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Ver Cardápio
        </button>
      </Link>
    </div>
  );
};

export default Home;
