const Footer = () => {
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
      url: "https://www.instagram.com/omardiegooblitas/",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
      url: "https://www.facebook.com/omardiego.oblitas",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
      url: "https://x.com/OmarDiegoOblit1",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      url: "https://www.linkedin.com/in/omar-diego-oblitas-9380b71aa",
    },
  ];

  return (
    <footer className="footer bg-black-100 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="/blog"
              className="text-lg font-medium hover:text-blue-400 transition-colors"
            >
              Visit My Blog
            </a>
          </div>
          <div className="socials flex gap-6">
            {socialImgs.map((img) => (
              <a
                key={img.name}
                href={img.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon bg-black-50 hover:bg-blue-50 rounded-full p-2 transition-colors"
                aria-label={`Enlace a ${img.name}`}
              >
                <img
                  src={img.imgPath}
                  alt={img.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            ®️ {new Date().getFullYear()} © Omar Oblitas. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
