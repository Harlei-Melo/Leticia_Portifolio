export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Meus Contatos</h2>
        <p className="text-lg">
          Sinta-se à vontade para entrar em contato comigo através dos canais abaixo:
        </p>
      </div>
      <div className="contact--info--container">
        {/* Email */}
        <div className="contact--info">
          <h3 className="text-md">Email</h3>
          <p className="text-lg">leticia.cs.artista@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="contact--info">
          <h3 className="text-md">Instagram</h3>
          <p className="text-lg">@leticia_cs_artista</p>
        </div>
      </div>
    </section>
  );
}
