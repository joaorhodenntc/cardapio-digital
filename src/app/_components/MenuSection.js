// src/components/MenuSection.js
import React from "react";

const MenuSection = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="px-4 py-2 border-t border-gray-300">
            {item.subtitle && (
              <p className="text-xl text-[#374F9D] font-extrabold mb-4 flex justify-center uppercase">
                {item.subtitle}
              </p>
            )}
            <h3 className="text-xl font-bold text-[#F39151] uppercase">
              {item.name}
            </h3>
            {item.alcoholContent && (
              <p className="text-sm text-gray-400">
                Teor alcoólico {item.alcoholContent}
              </p>
            )}
            {item.description && (
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            )}
            {item.flavors && (
              <span className="text-sm text-gray-600">{item.flavors}</span>
            )}
            <div className="flex gap-5">
              {item.price && (
                <div className="text-lg text-gray-800 font-normal mt-2">
                  {item.volume && (
                    <span className="font-extrabold text-sm">
                      {item.volume}
                      <br />
                    </span>
                  )}
                  {item.priceNoAlcohol ? <br /> : ""}
                  {item.price}
                </div>
              )}
              {item.priceNoAlcohol && (
                <div className="text-lg text-gray-800 font-normal mt-2 text-center">
                  <span className=" text-xs bg-[#FACAB5] px-2 rounded-lg">
                    sem álcool
                  </span>
                  <br /> {item.priceNoAlcohol}
                </div>
              )}
              {item.price450 && (
                <div className="text-lg text-gray-800 font-normal mt-2">
                  <span className="font-extrabold text-sm">450ml</span>
                  <br /> {item.price450}
                </div>
              )}
              {item.price300 && (
                <div className="text-lg text-gray-800 font-normal mt-2">
                  <span className="font-extrabold text-sm">300ml</span>
                  <br /> {item.price300}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
