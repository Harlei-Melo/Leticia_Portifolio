export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Olá, eu me chamo Leticia</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Ilustradora e</span>{" "}
            <br />
            Escritora
          </h1>
          <p className="hero--section-description">
            Sou ilustradora digital freelancer, especializada em capas, mapas fictícios e pôsteres. 
            Transformo ideias em imagens que emocionam, conectando histórias e pessoas através da arte.
          </p>
        </div>
        {/* Botão de Download do CV */}
        <a href="/cv.pdf" download="Leticia_CV.pdf" className="mt btn btn-primary">
          Baixar CV
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/leh-img-final.png" alt="Hero Section" />
      </div>
    </section>
  );
}
