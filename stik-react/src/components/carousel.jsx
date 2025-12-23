import React, { useRef, useEffect, useState } from "react";

const images = [
  { src: "tumb-blog-01.jpg", alt: "Imagem 1" },
  { src: "/img/thumb-blog-17-1.jpg", alt: "Imagem 2" },
  { src: "/img/thumb-blog-09-1024x683.jpg", alt: "Imagem 3" },
  { src: "/img/arranjo-de-lingerie-feminina-natureza-morta-1024x683.jpg", alt: "Imagem 4" },
  { src: "/img/IMG_9257-Editar-1024x683.jpg", alt: "Imagem 5" },
];

export default function CatalogCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Avança automaticamente a cada 3 segundos
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Navegação manual (opcional)
  const goTo = (i) => setIndex(i);

  return (
    <div className="w-full overflow-hidden relative bg-gray-100 rounded-lg shadow mb-8">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full h-64 object-cover flex-shrink-0"
            draggable={false}
          />
        ))}
      </div>
      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}