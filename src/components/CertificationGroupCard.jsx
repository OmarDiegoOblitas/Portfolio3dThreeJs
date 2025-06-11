import React, { useState } from "react";

const CertificationGroupCard = ({ platform, certificates }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 1);

  return (
    <div className="shadow-md rounded-lg p-4 card-border text-xl">
      {platform} ({certificates.length}{" "}
      {certificates.length === 1 ? "certificado" : "certificados"})
      <ul className="py-2 space-y-2">
        {visibleCertificates.map((cert, index) => (
          <li className="text-xl pl-2"
          key={cert.id}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {index + 1}. {cert.name}
            </a>
          </li>
        ))}
      </ul>
      {certificates.length > 1 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="cta-button mt-1 flex items-center justify-center w-full space-x-2"
        >
          <span>{showAll ? "Ver menos" : "Ver más"}</span>
          <span>{showAll ? "−" : "+"}</span>
        </button>
      )}
    </div>
  );
};

export default CertificationGroupCard;
