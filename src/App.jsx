import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes, Link, useLocation } from "react-router-dom";

const services = [
  { icon: "✦", title: "Design & Edição", text: "Artes, edição de fotos, identidade visual, banners e materiais para redes sociais." },
  { icon: "▶", title: "Vídeo & Motion", text: "Edição de vídeos, cortes para redes sociais, apresentações e conteúdo visual." },
  { icon: "</>", title: "Desenvolvimento Web", text: "Sites modernos, responsivos e rápidos com HTML, CSS, JavaScript e React." },
  { icon: "PDF", title: "Soluções Digitais", text: "Organização de PDFs, formatação de documentos, trabalhos acadêmicos e serviços digitais." }
];

const projects = [
  { tag: "WEB", title: "Hype Style", text: "Conceito de e-commerce moderno para moda urbana.", className: "project-blue" },
  { tag: "BRANDING", title: "ALCRUX Identity", text: "Sistema visual com estética tecnológica e premium.", className: "project-dark" },
  { tag: "ACADEMIC", title: "TCC & ABNT", text: "Organização visual e estruturação de projetos acadêmicos.", className: "project-silver" }
];

function Layout({ children }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const nav = [
    ["/", "Início"],
    ["/servicos", "Serviços"],
    ["/projetos", "Projetos"],
    ["/sobre", "Sobre"],
    ["/contato", "Contato"]
  ];

  return (
    <div className="site-shell">
      <header className="header">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark"><b>A</b><i>C</i></span>
          <span>
            <strong>AL<span>CRUX</span></strong>
            <small>TECNOLOGIA & CRIATIVIDADE</small>
          </span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          <span></span><span></span><span></span>
        </button>

        <nav className={open ? "nav open" : "nav"}>
          {nav.map(([path, label]) => (
            <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contato" onClick={() => setOpen(false)}>Solicitar orçamento</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div>
          <div className="footer-brand">AL<span>CRUX</span></div>
          <p>Tecnologia, criatividade e soluções digitais para transformar ideias em projetos.</p>
        </div>
        <div className="footer-links">
          <Link to="/servicos">Serviços</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} ALCRUX. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

function PageTitle({ eyebrow, title, text }) {
  return (
    <section className="page-title">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-copy">
          <span className="eyebrow">TECNOLOGIA • DESIGN • WEB</span>
          <h1>Ideias que ganham<br /><span>forma digital.</span></h1>
          <p>
            A ALCRUX une criatividade e tecnologia para criar experiências visuais,
            sites profissionais e soluções digitais sob medida.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/contato">Começar um projeto <span>↗</span></Link>
            <Link className="btn ghost" to="/projetos">Ver projetos</Link>
          </div>
          <div className="hero-stats">
            <div><b>04</b><span>áreas de atuação</span></div>
            <div><b>100%</b><span>foco no projeto</span></div>
            <div><b>∞</b><span>possibilidades</span></div>
          </div>
        </div>
        <div className="hero-art">
          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>
          <div className="ac-symbol"><b>A</b><i>C</i></div>
          <div className="code-card">
            <span>ALCRUX</span>
            <code>&lt;create /&gt;</code>
            <small>design • code • media</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div><span className="eyebrow">O QUE FAZEMOS</span><h2>Soluções para o mundo digital.</h2></div>
          <Link to="/servicos" className="text-link">Conhecer serviços ↗</Link>
        </div>
        <div className="service-grid">
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      <section className="split-banner">
        <div>
          <span className="eyebrow">ALCRUX DIGITAL</span>
          <h2>Seu projeto merece mais do que o básico.</h2>
          <p>Do primeiro conceito ao resultado final, cada detalhe é pensado para comunicar profissionalismo.</p>
        </div>
        <Link className="btn primary" to="/contato">Falar com a ALCRUX ↗</Link>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="arrow">↗</span>
    </article>
  );
}

function Services() {
  return (
    <>
      <PageTitle
        eyebrow="SERVIÇOS"
        title="Tudo para tirar sua ideia do papel."
        text="Serviços digitais pensados para pessoas, pequenos negócios, estudantes e projetos que precisam de um resultado profissional."
      />
      <section className="section compact-top">
        <div className="service-list">
          {services.map((s, i) => (
            <article className="service-row" key={s.title}>
              <div className="service-number">0{i + 1}</div>
              <div className="service-icon">{s.icon}</div>
              <div className="service-info"><h2>{s.title}</h2><p>{s.text}</p></div>
              <Link to="/contato" className="round-arrow">↗</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Projects() {
  return (
    <>
      <PageTitle
        eyebrow="PORTFÓLIO"
        title="Projetos com identidade."
        text="Uma seleção de conceitos e trabalhos que representam a direção visual e tecnológica da ALCRUX."
      />
      <section className="section compact-top">
        <div className="project-grid">
          {projects.map(p => (
            <article className={`project-card ${p.className}`} key={p.title}>
              <div className="project-visual">
                <span>{p.tag}</span>
                <div className="visual-mark">AC</div>
              </div>
              <div className="project-content"><h3>{p.title}</h3><p>{p.text}</p></div>
            </article>
          ))}
        </div>
        <div className="portfolio-note">
          <span className="eyebrow">EM CONSTANTE EVOLUÇÃO</span>
          <h2>Seu projeto pode ser o próximo.</h2>
          <Link className="btn primary" to="/contato">Criar projeto ↗</Link>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageTitle
        eyebrow="SOBRE A ALCRUX"
        title="Tecnologia com olhar criativo."
        text="A ALCRUX nasceu para reunir desenvolvimento, design, vídeo e soluções digitais em uma única marca."
      />
      <section className="section about-grid">
        <div className="about-highlight">
          <div className="large-ac"><b>A</b><i>C</i></div>
          <span>ALCRUX</span>
        </div>
        <div className="about-text">
          <span className="eyebrow">NOSSA VISÃO</span>
          <h2>Fazer o digital parecer simples.</h2>
          <p>Um bom projeto não precisa ser complicado para ser profissional. A ALCRUX busca transformar necessidades reais em soluções claras, bonitas e funcionais.</p>
          <p>Da criação de uma arte à construção de um site em React, cada trabalho recebe atenção aos detalhes, organização e uma identidade visual consistente.</p>
          <div className="values">
            <div><b>01</b><span>Criatividade</span></div>
            <div><b>02</b><span>Tecnologia</span></div>
            <div><b>03</b><span>Organização</span></div>
            <div><b>04</b><span>Resultado</span></div>
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  const [status, setStatus] = useState("idle");

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    data.append("access_key", "ccb03bc4-db86-49f1-9778-d73bfc36a1f8");
    data.append("subject", "Nova solicitação de contato - ALCRUX");
    data.append("from_name", "Site ALCRUX");
    data.append("replyto", data.get("email") || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: data
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Falha no envio");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <>
      <PageTitle
        eyebrow="CONTATO"
        title="Vamos criar algo."
        text="Conte o que você precisa. A ALCRUX pode ajudar a transformar sua ideia em um projeto digital."
      />
      <section className="section contact-grid">
        <div className="contact-info">
          <span className="eyebrow">FALE CONOSCO</span>
          <h2>Um projeto começa com uma boa conversa.</h2>
          <p>Use o formulário para enviar os detalhes do seu projeto. A mensagem será encaminhada para o e-mail da ALCRUX.</p>
          <div className="contact-item"><span>✉</span><div><small>E-mail</small><b>alcrux2009@gmail.com</b></div></div>
          <div className="contact-item"><span>◉</span><div><small>Instagram</small><b>@alcrux</b></div></div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <input type="hidden" name="_subject" value="Nova solicitação de contato - ALCRUX" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <label>Seu nome<input name="name" required placeholder="Como podemos chamar você?" /></label>
          <label>Seu e-mail<input name="email" required type="email" placeholder="voce@email.com" /></label>
          <label>Serviço<select name="service" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Design e edição</option><option>Vídeo</option><option>Desenvolvimento Web</option><option>PDF / ABNT / TCC</option><option>Outro</option></select></label>
          <label>Conte sobre o projeto<textarea name="message" required rows="5" placeholder="Explique brevemente o que você precisa..."></textarea></label>
          <button className="btn primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : status === "success" ? "Mensagem enviada ✓" : "Enviar solicitação ↗"}
          </button>
          {status === "success" && <p className="form-success">Mensagem enviada com sucesso! Em breve, a ALCRUX poderá responder pelo seu e-mail.</p>}
          {status === "error" && <p className="form-success">Não foi possível enviar agora. Verifique sua conexão e tente novamente.</p>}
        </form>
      </section>
    </>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;