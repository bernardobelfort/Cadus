import { Link } from 'react-router-dom';
import { User, Briefcase, UserCheck, ClipboardList, CheckCircle, ArrowRight, Smartphone, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroIllustration from '@/assets/hero-illustration.png';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' as const },
  }),
};

/* Hero illustration with organic blob shapes */
const HeroIllustration = () => (
  <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[520px] flex items-center justify-center py-4 md:py-8">
    {/* Blob 1 — large teal */}
    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[360px] md:w-[520px] h-[280px] sm:h-[360px] md:h-[520px] z-0" viewBox="0 0 500 500" fill="none">
      <path d="M400,280Q370,460,200,400Q30,340,80,200Q130,60,300,80Q470,100,400,280Z" fill="hsl(184, 78%, 22%)" fillOpacity="0.22" />
    </svg>

    {/* Blob 2 — amber accent */}
    <svg className="absolute -right-4 md:-right-10 -bottom-2 md:-bottom-4 w-[200px] sm:w-[280px] md:w-[380px] h-[200px] sm:h-[280px] md:h-[380px] z-0" viewBox="0 0 500 500" fill="none">
      <path d="M420,300Q380,480,200,420Q20,360,60,200Q100,40,280,60Q460,80,420,300Z" fill="hsl(25, 76%, 63%)" fillOpacity="0.25" />
    </svg>

    {/* Blob 3 — teal vibrante */}
    <svg className="absolute -left-3 md:-left-6 -top-1 md:-top-2 w-[140px] sm:w-[200px] md:w-[260px] h-[140px] sm:h-[200px] md:h-[260px] z-0" viewBox="0 0 500 500" fill="none">
      <path d="M380,260Q340,420,200,380Q60,340,100,200Q140,60,300,100Q460,140,380,260Z" fill="hsl(184, 60%, 35%)" fillOpacity="0.18" />
    </svg>

    {/* Blob 4 — small dot */}
    <svg className="absolute right-2 md:right-4 top-1 md:top-2 w-[80px] md:w-[140px] h-[80px] md:h-[140px] z-0" viewBox="0 0 500 500" fill="none">
      <circle cx="250" cy="250" r="200" fill="hsl(184, 78%, 22%)" fillOpacity="0.14" />
    </svg>

    {/* Illustration */}
    <img
      src={heroIllustration}
      alt="Pessoas diversas conectadas digitalmente ao sistema Cadus"
      className="relative z-10 w-full max-w-[240px] sm:max-w-[320px] md:max-w-[480px] h-auto drop-shadow-xl"
    />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero — mobile-first */}
      <section className="hero-gradient py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container relative z-10">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8 lg:gap-12">
            <motion.div
              className="flex-1 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-display font-800 text-primary-foreground leading-[1.1] tracking-tight">
                Seus dados prontos
                <br />
                <span className="text-highlight">antes</span> da consulta.
              </h1>
              <p className="text-primary-foreground/80 mt-4 md:mt-5 text-base md:text-lg lg:text-xl max-w-lg mx-auto md:mx-0 font-body leading-relaxed">
                Preencha seu cadastro pelo celular, no seu tempo. Quando chegar
                na clínica, já sabem quem você é.
              </p>
              <div className="flex flex-col w-full sm:flex-row sm:w-auto gap-3 mt-8 md:mt-10 justify-center md:justify-start">
                <Link
                  to="/cadastro?role=paciente"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-card text-primary font-display font-700 text-[15px] md:text-base transition-all duration-200 hover:shadow-lg hover:scale-[1.02] min-h-[50px]"
                >
                  <User size={20} />
                  Sou Paciente
                </Link>
                <Link
                  to="/cadastro?role=profissional"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-display font-700 text-[15px] md:text-base transition-all duration-200 hover:bg-primary-foreground/10 min-h-[50px]"
                >
                  <Briefcase size={20} />
                  Sou Profissional
                </Link>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 mt-6 md:mt-8 text-primary-foreground/60 text-[12px] md:text-sm font-body">
                <span className="flex items-center gap-1.5"><Smartphone size={14} /> Pelo celular</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> 5 minutos</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Dados seguros</span>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como funciona? */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="section-title">Como funciona?</h2>
            <p className="section-subtitle max-w-md mx-auto">Três passos simples. Sem complicação.</p>
          </motion.div>

          <div className="relative">
            {/* Linha conectora horizontal — desktop */}
            <motion.svg
              className="absolute top-[52px] h-[4px] hidden md:block z-0"
              style={{ left: 'calc(16.66% + 4px)', right: 'calc(16.66% + 4px)' }}
              viewBox="0 0 800 4"
              fill="none"
              preserveAspectRatio="none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.line
                x1="0" y1="2" x2="800" y2="2"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8 6"
                strokeOpacity="0.25"
                variants={{
                  hidden: { pathLength: 0 },
                  visible: { pathLength: 1, transition: { duration: 1.2, delay: 0.3, ease: "easeInOut" } },
                }}
              />
            </motion.svg>

            {/* Linha conectora vertical — mobile */}
            <div className="absolute left-[28px] top-[60px] bottom-[60px] w-px border-l-2 border-dashed border-primary/20 md:hidden z-0" />

            <div className="grid md:grid-cols-3 gap-6 md:gap-6 relative z-10">
              {[
                {
                  num: '01',
                  icon: <UserCheck size={24} className="text-primary-foreground" />,
                  title: 'Escolha seu perfil',
                  desc: 'Paciente, profissional, gestor ou aluno — cada um tem seu caminho.',
                },
                {
                  num: '02',
                  icon: <ClipboardList size={24} className="text-primary-foreground" />,
                  title: 'Preencha seus dados',
                  desc: 'Responda no seu ritmo. Seus dados ficam salvos automaticamente.',
                },
                {
                  num: '03',
                  icon: <CheckCircle size={24} className="text-primary-foreground" />,
                  title: 'Tudo pronto',
                  desc: 'Seus dados já estão no sistema. É só chegar e ser atendido.',
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="relative group flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  {/* Ícone */}
                  <div className="relative shrink-0 mb-0 md:mb-5">
                    <div className="w-14 h-14 md:w-[104px] md:h-[104px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary to-[#14919B] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      <div className="scale-100 md:scale-[1.6]">{step.icon}</div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-border/50 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300 flex-1 md:flex-none md:w-full overflow-hidden">
                    <span className="absolute -top-2 -right-1 text-[3.5rem] md:text-[5rem] font-display font-800 text-primary/[0.04] leading-none select-none pointer-events-none">
                      {step.num}
                    </span>

                    <span className="text-[11px] md:text-xs font-display font-700 text-muted-foreground tracking-widest uppercase">
                      Passo {step.num}
                    </span>
                    <h3 className="font-display font-700 text-base md:text-xl text-foreground mt-1 md:mt-1.5">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[13px] md:text-sm mt-1 md:mt-1.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/40 relative overflow-hidden">
        {/* Decorative blobs */}
        <svg className="absolute -right-32 -top-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.04]" viewBox="0 0 500 500" fill="none">
          <path d="M400,280Q370,460,200,400Q30,340,80,200Q130,60,300,80Q470,100,400,280Z" fill="hsl(var(--primary))" />
        </svg>
        <svg className="absolute -left-24 -bottom-24 w-[200px] md:w-[350px] h-[200px] md:h-[350px] opacity-[0.03]" viewBox="0 0 500 500" fill="none">
          <path d="M420,300Q380,480,200,420Q20,360,60,200Q100,40,280,60Q460,80,420,300Z" fill="hsl(var(--secondary))" />
        </svg>

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="section-title">
              Para quem é o <span className="font-display font-800 text-primary">cadus<span className="text-highlight">.</span></span>
            </h2>
            <p className="section-subtitle max-w-md mx-auto">Cada perfil tem seu caminho. Escolha o seu.</p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <User size={24} className="text-primary-foreground md:hidden" />,
                iconLg: <User size={28} className="text-primary-foreground hidden md:block" />,
                iconBg: 'bg-gradient-to-br from-primary to-[#14919B]',
                title: 'Para você, paciente',
                desc: 'Preencha sua ficha pelo celular, antes de chegar na clínica.',
                benefits: ['Cadastro fácil e rápido', 'Seu histórico sempre salvo', 'Controle do seu prontuário'],
                accentColor: 'border-primary/20 hover:border-primary/40',
                checkColor: 'text-primary',
              },
              {
                icon: <Briefcase size={24} className="text-primary-foreground md:hidden" />,
                iconLg: <Briefcase size={28} className="text-primary-foreground hidden md:block" />,
                iconBg: 'bg-gradient-to-br from-secondary to-[#D4845A]',
                title: 'Para profissionais e equipes',
                desc: 'Profissionais, gestores e alunos — acesse os dados quando precisar.',
                benefits: ['Dados a qualquer momento', 'Acesso de onde estiver', 'Gestão simples e completa'],
                accentColor: 'border-secondary/20 hover:border-secondary/40',
                checkColor: 'text-secondary',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={`bg-card rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm border-2 ${card.accentColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${card.iconBg} flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg`}>
                  {card.icon}
                  {card.iconLg}
                </div>
                <h3 className="font-display font-700 text-lg md:text-xl text-foreground mb-1.5 md:mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-[13px] md:text-sm mb-5 md:mb-6 leading-relaxed max-w-xs mx-auto">{card.desc}</p>
                <div className="space-y-2.5 md:space-y-3 text-left max-w-[240px] mx-auto">
                  {card.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2.5 md:gap-3">
                      <CheckCircle size={16} className={`${card.checkColor} shrink-0`} />
                      <span className="text-[13px] md:text-sm text-foreground font-body">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-gradient py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Blobs */}
        <svg className="absolute -left-10 md:-left-20 -bottom-10 md:-bottom-20 w-[250px] md:w-[450px] h-[250px] md:h-[450px] z-0" viewBox="0 0 500 500" fill="none">
          <path d="M400,280Q370,460,200,400Q30,340,80,200Q130,60,300,80Q470,100,400,280Z" fill="white" fillOpacity="0.07" />
        </svg>
        <svg className="absolute -right-8 md:-right-16 -top-8 md:-top-16 w-[200px] md:w-[380px] h-[200px] md:h-[380px] z-0" viewBox="0 0 500 500" fill="none">
          <path d="M420,300Q380,480,200,420Q20,360,60,200Q100,40,280,60Q460,80,420,300Z" fill="hsl(25, 76%, 63%)" fillOpacity="0.12" />
        </svg>

        <div className="container text-center relative z-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-800 text-primary-foreground tracking-tight leading-tight">
              Seus dados, antes da consulta<span className="text-highlight">.</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <p className="text-primary-foreground/70 mt-3 md:mt-4 text-base md:text-lg font-body max-w-2xl mx-auto">
              Cadastre-se agora e chegue na clínica pronto para ser atendido.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col w-full sm:flex-row sm:w-auto gap-3 mt-8 md:mt-10 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <Link
              to="/cadastro?role=paciente"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-9 md:py-4 rounded-full bg-card text-primary font-display font-700 text-[15px] md:text-base transition-all duration-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] min-h-[50px]"
            >
              <User size={18} />
              Cadastro de Paciente
            </Link>
            <Link
              to="/cadastro?role=profissional"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-9 md:py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-display font-700 text-[15px] md:text-base transition-all duration-200 hover:bg-primary-foreground/10 min-h-[50px]"
            >
              <Briefcase size={18} />
              Cadastro de Profissional
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
