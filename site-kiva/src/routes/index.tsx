import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield,
  MapPin,
  Star,
  Bell,
  Car,
  Smartphone,
  Navigation,
  CheckCircle2,
  ArrowRight,
  Menu,
  Sparkles,
  Mail,
} from "lucide-react";
import heroImg from "../assets/hero-passenger.jpg";
import driverImg from "../assets/driver.jpg";
import appMockup from "../assets/app-mockup.jpg";
import logoKiva from "../assets/kiva-logo.png";
import { Instagram } from "lucide-react";
import { MessageCircle } from "lucide-react";
import raposaKiva from "../assets/raposa-kiva.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kiva Drive | Mobilidade segura para mulheres" },
      {
        name: "description",
        content:
          "Kiva Drive é a plataforma de mobilidade focada em segurança, com motoristas verificadas, rastreamento em tempo real e suporte 24h.",
      },
      { property: "og:title", content: "Kiva Drive | Mobilidade segura" },
      {
        property: "og:description",
        content:
          "Corridas monitoradas, motoristas verificadas e foco total na segurança das passageiras.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", href: "/favicon.png" },
    ],
  }),
  component: Index,
});

function Nav() {
  const links = [
    ["Início", "#inicio"],
    ["Segurança", "#seguranca"],
    ["Como funciona", "#como-funciona"],
    ["Motoristas", "#motoristas"],
    ["App", "#app"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-bold text-lg">
          <img
            src={logoKiva}
            alt="Kiva Drive"
            className="w-10 h-10 object-contain"
          />
          <span>Kiva Drive</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hover:text-foreground transition"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#app"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Baixar app <ArrowRight className="w-4 h-4" />
          </a>
          <button className="md:hidden p-2" aria-label="menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32 text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,oklch(0.62_0.26_350/0.6),transparent_50%),radial-gradient(circle_at_80%_60%,oklch(0.72_0.22_340/0.5),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium backdrop-blur">
            <Sparkles className="w-3.5 h-3.5" /> Plataforma criada por e para
            mulheres
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
            Sua corrida,
            <br />
            <span className="bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
              do seu jeito.
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-md">
            Mobilidade segura, com motoristas verificadas, rastreamento em tempo
            real e suporte sempre que você precisar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.kivadrive.passageira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-4 font-semibold shadow-[var(--shadow-elegant)] hover:scale-[1.02] transition"
            >
              👩 Sou Passageira
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.kivamotorista.kivaapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-7 py-4 font-semibold hover:bg-white/20 transition backdrop-blur"
            >
              🚗 Sou Motorista
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary-glow" /> 100% verificadas
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary-glow" /> 4.9 avaliação
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-[image:var(--gradient-primary)] opacity-30 blur-3xl rounded-[3rem]" />
          <img
            src={heroImg}
            alt="Passageira sorrindo dentro de carro Kiva Drive"
            width={1600}
            height={1200}
            className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -left-6 bg-background text-foreground rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-[220px]">
            <div className="w-10 h-10 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">
                Motorista chegando
              </p>
              <p className="text-sm font-semibold">2 min · Ana M.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    ["100%", "Segurança"],
    ["4.9★", "Avaliação média"],
    ["24/7", "Suporte ao vivo"],
  ];
  return (
    <section className="py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(([value, label]) => (
          <div key={label}>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Safety() {
  const features = [
    {
      icon: Shield,
      title: "Motoristas verificadas",
      desc: "Documentos, antecedentes criminais e CNH com EAR validados antes da aprovação.",
    },
    {
      icon: Navigation,
      title: "Rastreamento em tempo real",
      desc: "Acompanhe todo o trajeto no app e compartilhe com quem você confia.",
    },
    {
      icon: Bell,
      title: "Botão de emergência",
      desc: "Acionamento imediato do suporte e contatos de confiança em um toque.",
    },
    {
      icon: Star,
      title: "Avaliações transparentes",
      desc: "Passageiras e motoristas avaliam cada corrida para manter a qualidade.",
    },
  ];
  return (
    <section id="seguranca" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Segurança
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Em cada corrida,
            <br />
            em cada quilômetro.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Construímos a Kiva Drive com camadas de segurança para que você
            chegue tranquila, sempre.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-[var(--shadow-elegant)] transition"
            >
              <div className="w-12 h-12 rounded-xl bg-accent grid place-items-center text-primary group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground transition">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Baixe o app",
      desc: "Instale o app oficial da Kiva Drive e crie sua conta em minutos.",
    },
    {
      n: "02",
      title: "Solicite uma corrida",
      desc: "Escolha seu destino e encontre uma motorista verificada por perto.",
    },
    {
      n: "03",
      title: "Acompanhe pelo mapa",
      desc: "Veja em tempo real a chegada e o trajeto da sua corrida.",
    },
    {
      n: "04",
      title: "Chegue com segurança",
      desc: "Avalie a viagem e ajude a manter a comunidade Kiva forte.",
    },
  ];
  return (
    <section id="como-funciona" className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={raposaKiva}
                alt="Mascote Kiva Drive"
                className="w-24 h-24 object-contain"
              />

              <div className="bg-primary/10 border border-primary/20 rounded-2xl px-4 py-3">
                <p className="text-sm font-medium">
                  Vou te mostrar como funciona a Kiva Drive
                </p>
              </div>
            </div>

            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Como funciona
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Simples como deve ser.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Da solicitação ao destino, a experiência foi desenhada para ser
            rápida, intuitiva e segura.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative p-8 rounded-3xl bg-background border border-border"
            >
              <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Drivers() {
  const reqs = [
    "CNH válida com EAR (Exerce Atividade Remunerada)",
    "Certidão de Antecedentes Criminais atualizada",
    "Veículo dentro dos padrões da plataforma",
    "Documentação aprovada pelo time Kiva",
  ];
  return (
    <section id="motoristas" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 bg-[image:var(--gradient-primary)] opacity-15 blur-3xl rounded-[3rem]" />
          <img
            src={driverImg}
            alt="Motorista mulher aprovada na Kiva Drive"
            loading="lazy"
            width={1200}
            height={1400}
            className="relative rounded-3xl object-cover w-full aspect-[4/5] shadow-xl"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Para motoristas
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Dirija com a Kiva.
            <br />
            Tenha mais liberdade.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Para garantir a segurança das passageiras e a qualidade da
            plataforma, todas as motoristas passam por uma análise antes da
            aprovação.
          </p>
          <ul className="mt-8 space-y-4">
            {reqs.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-foreground">{r}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 rounded-xl bg-accent/60 border border-primary/20 text-sm">
            ⚠️ Cadastros sem os requisitos obrigatórios não poderão ser
            aprovados.
          </div>
          <a
            href="#app"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 font-semibold hover:opacity-90 transition"
          >
            Quero ser motorista <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  return (
    <section
      id="app"
      className="py-24 text-white relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_70%_30%,oklch(0.62_0.26_350/0.6),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium">
            <Smartphone className="w-3.5 h-3.5" /> Já disponível
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Baixe o app oficial
            <br />
            da Kiva Drive.
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-md">
            Download protegido e verificado para motoristas e passageiras.
            Disponível agora na Google Play Store.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:bg-white/90 transition"
            >
              <span className="text-2xl">▶</span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] opacity-70">DISPONÍVEL NO</span>
                <span className="text-base">Google Play</span>
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/20 transition backdrop-blur"
            >
              <span className="text-2xl"></span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] opacity-70">EM BREVE</span>
                <span className="text-base">App Store</span>
              </span>
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-30 blur-3xl rounded-full" />
          <img
            src={appMockup}
            alt="App Kiva Drive em smartphone"
            loading="lazy"
            width={1000}
            height={1200}
            className="relative max-w-sm w-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-lg">
            <img
              src={logoKiva}
              alt="Kiva Drive"
              className="w-10 h-10 object-contain"
            />
            <span>Kiva Drive</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Mobilidade segura, criada para mulheres. A Kiva Drive respeita a
            privacidade dos usuários — seus dados são protegidos e usados apenas
            para garantir a melhor experiência.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Plataforma</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#seguranca" className="hover:text-foreground">
                Segurança
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-foreground">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#motoristas" className="hover:text-foreground">
                Seja motorista
              </a>
            </li>
            <li>
              <a href="#app" className="hover:text-foreground">
                Baixar app
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contato</h4>
          <a
            href="mailto:KivaDriveOficial@Outlook.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail className="w-4 h-4" />
            KivaDriveOficial@Outlook.com
          </a>
        </div>

        <a
          href="https://instagram.com/kivadriveoficial"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-3 text-lg font-medium hover:text-pink-500 transition"
        >
          <Instagram className="w-7 h-7" />
          @kivadrive
        </a>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 Kiva Drive. Todos os direitos reservados.</span>
          <span>Privacidade e proteção de dados</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5562982402207"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl animate-bounce hover:animate-none hover:scale-110 transition"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:block">Fale conosco</span>
    </a>
  );
}

function Index() {
  return (
    <div className="font-[var(--font-display)] antialiased">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Safety />
        <HowItWorks />
        <Drivers />
        <AppSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
