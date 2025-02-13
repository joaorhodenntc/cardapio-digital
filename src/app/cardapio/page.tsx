"use client";
import React, { useState, useEffect, useRef } from "react";
import MenuSection from "../_components/MenuSection";
import { menuData } from "../../data/menuData";
import Image from "next/image";

const Cardapio = () => {
  const [imageSrc, setImageSrc] = useState("/brita-logo.png");
  const [isFixed, setIsFixed] = useState(false);
  const [selectedSection, setSelectedSection] = useState("chopes");

  // Referências para as seções
  const chopesRef = useRef(null);
  const cevasRef = useRef(null);
  const drinksAutoraisRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setImageSrc("/brita-logo-lg.png");
      } else {
        setImageSrc("/brita-logo.png");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito para observar as seções e atualizar o select
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // 50% da seção precisa estar visível
      }
    );

    // Observa as seções
    if (chopesRef.current) observer.observe(chopesRef.current);
    if (cevasRef.current) observer.observe(cevasRef.current);
    if (drinksAutoraisRef.current) observer.observe(drinksAutoraisRef.current);

    // Limpa o observer ao desmontar o componente
    return () => {
      if (chopesRef.current) observer.unobserve(chopesRef.current);
      if (cevasRef.current) observer.unobserve(cevasRef.current);
      if (drinksAutoraisRef.current) {
        observer.unobserve(drinksAutoraisRef.current);
      }
    };
  }, []);

  const handleSelectChange = (e: any) => {
    const selectedValue = e.target.value;
    const section = document.getElementById(selectedValue);

    if (section) {
      setSelectedSection(selectedValue);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-5">
      <Image
        src={imageSrc}
        alt="Logo"
        layout="responsive"
        width={100}
        height={100}
      />

      <div
        className={`w-full flex justify-center px-5 h-16 py-3 transition-all duration-200 fixed ${
          isFixed
            ? "top-0 left-0 z-50 bg-[#f39251b0] mt-0"
            : "mt-5 bg-[#f3925100]"
        }`}
      >
        <select
          className="w-full z-10 pl-3 max-w-3xl rounded-md"
          onChange={handleSelectChange}
          value={selectedSection}
        >
          <option value="chopes">Chopes</option>
          <option value="cevas">Cevas</option>
          <option value="drinksAutorais">Drinks Autorais</option>
        </select>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div
          id="chopes"
          ref={chopesRef}
          className="scroll-mt-20 relative mt-20"
        >
          <MenuSection title="CHOPES" items={menuData.chopp} />
        </div>
        <div id="cevas" ref={cevasRef} className="scroll-mt-20">
          <MenuSection title="CEVAS" items={menuData.cevas} />
        </div>
        <div
          id="drinksAutorais"
          ref={drinksAutoraisRef}
          className="scroll-mt-20"
        >
          <MenuSection
            title="DRINKS AUTORAIS"
            items={menuData.drinksAutorais}
          />
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
