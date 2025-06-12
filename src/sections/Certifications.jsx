import React from "react";
import TitleHeader from "../components/TitleHeader";
import CertificationGroupCard from "../components/CertificationGroupCard";

const certificationsData = [
  {
    platform: "Coursera",
    certificates: [
      {
        id: 1,
        url: "https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74",
        name: "Advanced React",
      },
      {
        id: 2,
        url: "https://coursera.org/share/8227fc3baabf40c5d59634fedfff3d03",
        name: "React Basics",
      },
      {
        id: 3,
        url: "https://coursera.org/share/3b4b9dd220f7b9cf895bbadbccb051d2",
        name: "Version Control",
      },
      {
        id: 4,
        url: "https://coursera.org/share/26bf41143f614fc9ae089bba43b451cb",
        name: "Programming with JavaScript",
      },
      {
        id: 5,
        url: "https://coursera.org/share/0e941f0db67db9987438bc21491894f7",
        name: "HTML and CSS in depth",
      },
      {
        id: 6,
        url: "https://coursera.org/share/38f9e8063f9cb0c18714828b6302c73e",
        name: "Introduction to Front-End Development",
      },
    ],
  },
  {
    platform: "Platzi",
    certificates: [
      {
        id: 1,
        url: "https://platzi.com/p/omar79521audi/curso/1272-sql-mysql/diploma/detalle/",
        name: "Curso de SQL y MySQL",
      },
      {
        id: 2,
        url: "https://platzi.com/p/omar79521audi/curso/2556-react-native/diploma/detalle/",
        name: "Curso de Introducción a React Native",
      },
      {
        id: 3,
        url: "https://platzi.com/p/omar79521audi/curso/2444-react/diploma/detalle/",
        name: "Curso de Introducción a React.js",
      },
      {
        id: 4,
        url: "https://platzi.com/p/omar79521audi/curso/2878-typescript/diploma/detalle/",
        name: "Curso de Fundamentos de TypeScript",
      },
      {
        id: 5,
        url: "https://platzi.com/p/omar79521audi/curso/5316-nodejs-graphql/diploma/detalle/",
        name: "Curso de GraphQL con Node.js",
      },
      {
        id: 6,
        url: "https://platzi.com/p/omar79521audi/curso/2478-angular/diploma/detalle/",
        name: "Curso de Fundamentos de Angular",
      },
      {
        id: 7,
        url: "https://platzi.com/p/omar79521audi/curso/1689-nodejs-mongo-websockets/diploma/detalle/",
        name: "Curso de Node.js: Base de Datos con MongoDB y WebSockets",
      },
      {
        id: 8,
        url: "https://platzi.com/p/omar79521audi/curso/2066-docker/diploma/detalle/",
        name: "Curso de Docker",
      },
      {
        id: 9,
        url: "https://platzi.com/p/omar79521audi/curso/6935-ai/diploma/detalle/",
        name: "Curso Gratis de Inteligencia Artificial: ChatGPT, DALL-E y Hugging Face",
      },
      {
        id: 10,
        url: "https://platzi.com/p/omar79521audi/curso/2518-productividad-startups/diploma/detalle/",
        name: "Productividad y Manejo del Tiempo para Startups",
      },
    ],
  },
  {
    platform: "LinkedIn",
    certificates: [
      {
        id: 1,
        url: "https://www.linkedin.com/learning/certificates/e3c7cfb19894f9d600d2daea88c9525d594a58662a7a9ef127206edff8893985",
        name: "Angular esencial",
      },
      {
        id: 2,
        url: "https://www.linkedin.com/learning/certificates/1e3ef442885d16ab39186930675b87f60b535de8885de67cd404596a7a674485",
        name: "Vue avanzado 2",
      },
      {
        id: 3,
        url: "https://www.linkedin.com/learning/certificates/1b1966c880a74db9258eeb3cdfdd85b95b1110efd25ec0bfc3b7ddb1802a744a",
        name: "Vue avanzado 1",
      },
      {
        id: 4,
        url: "https://www.linkedin.com/learning/certificates/678d1a3aaf07f8b8a2bc6642952fc7ddb3e71f5b088e15d1e07ec143985497f5",
        name: "React Hooks esencial",
      },
      {
        id: 5,
        url: "https://www.linkedin.com/learning/certificates/c3c77aa7009a2d36aeb4daae796f3a6774fa5a990a59f5011350749aded54e5e",
        name: "React avanzado 2",
      },
      {
        id: 6,
        url: "https://www.linkedin.com/learning/certificates/f00915b1887209f98fd2ac5a9dd09b7061dde0344cfb329165e002841be8b848",
        name: "React avanzado 1 ",
      },
      {
        id: 7,
        url: "https://www.linkedin.com/learning/certificates/4e60b51218c7b1982b9b68f6b88ec97c320eefdb7d22e72812ab9652fd6b1a81",
        name: "TypeScript avanzado",
      },
      {
        id: 8,
        url: "https://www.linkedin.com/learning/certificates/03f7ce25bd7eec5bc9bf8a452abadd0dd84e286ea8727a7606ede930f36de2b7",
        name: "TypeScript esencial",
      },
      {
        id: 9,
        url: "https://www.linkedin.com/learning/certificates/10d785b90f9975d4771d2482ef592734541bc6c280535878a7240761cd894f27",
        name: "JavaScript Avanzado 2",
      },
      {
        id: 10,
        url: "https://www.linkedin.com/learning/certificates/3dadb7ba14165b29d59e810623f0de9dac567b397874e67fbb0c11cc3a277958",
        name: "JavaScript",
      },
      {
        id: 11,
        url: "https://www.linkedin.com/learning/certificates/b6d8965b2302934f63bd35030d360176127165532abb55c520764c5c00210e4c",
        name: "Azure Diseño e implementación de soluciones DevOps de Microsoft",
      },
      {
        id: 12,
        url: "https://www.linkedin.com/learning/certificates/d655b543505121d30ab4a22bf2830d759131618141096d87709a479e1bd8e1ef",
        name: "Amazon Web Services para profesionales IT",
      },
      {
        id: 13,
        url: "https://www.linkedin.com/learning/certificates/be93ae0ccec9a0c89341c7ae093bf0c93c20f844b527803f67d1f7564a6cfe75",
        name: "Fundamentos de AWS Cloud Services",
      },
      {
        id: 14,
        url: "https://www.linkedin.com/learning/certificates/aceca7e056820fa6e6adc476561730a1028489641c50ad5f88c94cb4c9a2d763",
        name: "GitHub para programadores",
      },
      {
        id: 15,
        url: "https://www.linkedin.com/learning/certificates/a0d150c0d0a4253f1dac60e9ff1d44871d2e0a30f01ed210960ff5b58fcf9025",
        name: "MongoDB esencial",
      },
      {
        id: 16,
        url: "https://www.linkedin.com/learning/certificates/10ced6d884fd8cf7f791c1e971efc5c1c1f2459a792b3b542e6d3cb52f15994b",
        name: "Bases de datos",
      },
      {
        id: 17,
        url: "https://www.linkedin.com/learning/certificates/c0c28c3cdb166e2effe01173b8289853d5287578f1f685c0678c8b97d2ccb6df",
        name: "Pruebas de software y QA",
      },
      {
        id: 18,
        url: "https://www.linkedin.com/learning/certificates/a9361362ad1dcf80432d85e50d032aa84b20921712d48a0f22fb49c41b7c93b4",
        name: "DevOps esencial",
      },
      {
        id: 19,
        url: "https://www.linkedin.com/learning/certificates/09d0ac12c0f9a3b7563bea318fe5572fb419086c3907ec0f52902e96df8f1724",
        name: "data science: Conceptos básicos",
      },
      {
        id: 20,
        url: "https://www.linkedin.com/learning/certificates/442a4df01516017c8f556896b16f5b58d9da25bd0d8a05386fa3c83673dd858a",
        name: "Machine learning",
      },
      {
        id: 21,
        url: "https://www.linkedin.com/learning/certificates/bfa10d34d838dc96915b30f2f108de2ec1c6915118c63038636d9c2117e78038",
        name: ".NET 7 esencial",
      },
      {
        id: 22,
        url: "https://www.linkedin.com/learning/certificates/cebe539070eb8e90cf30113aae13b652342b13bb684e6e8c345ee0e318eaeb28ß",
        name: "Go esencial",
      },
      {
        id: 23,
        url: "https://www.linkedin.com/learning/certificates/176aed46f77a1892b709cd4abd660da3b747e4ef293e1b10c28718518c3ae9e0",
        name: "Python esencial",
      },
      {
        id: 24,
        url: "https://www.linkedin.com/learning/certificates/d44afa66875c77f1ca56d614a9168d308238e24df7f6fe9e7be4b9799cfb8465",
        name: "PHP esencial",
      },
    ],
  },
];
const Certifications = () => {
  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 mx-auto">
        <TitleHeader
          title=" 📄 Certifications"
          sub="🏆 Certificates by platform"
        />

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((group) => (
            <CertificationGroupCard
              key={group.platform}
              platform={group.platform}
              certificates={group.certificates}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
