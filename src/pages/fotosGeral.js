/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const fotos = [
  { id: 1, imagem: '/imagens/leoDoc.jpg' },
  { id: 2, imagem: '/imagens/leodoc1.jpg' },
  { id: 3, imagem: '/imagens/sangueleo.jpg' },
  { id: 4, imagem: '/imagens/vacinaleo.jpg' },
  { id: 5, imagem: '/imagens/gallmont.png' },
  
];
console.log({ fotos });

export default function Fotos() {
  return (
    <>
      {fotos.map((f, key) => (
        <img style={{width:'100px'}} key={key} src={f.imagem} />
      ))}
    </>
  );
}
