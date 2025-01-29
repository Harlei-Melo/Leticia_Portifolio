import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Meus Últimos Projetos</p>
          <h2 className="section--heading">Meu Portfolio</h2>
        </div>
        <div>
          {/* Link principal para o Behance */}
          <a 
            href="https://www.behance.net/letciacs1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-github"
          >
            <img
              src="./img/be.svg"
              alt="Behance Icon"
              width="32"
              height="32"
            />
            Mais projetos
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              {/* Transformar "Veja no Behance" em um link clicável */}
              <a
                href="https://www.behance.net/letciacs1" // Atualize o link para o correto, se necessário
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm portfolio--link"
              >
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
