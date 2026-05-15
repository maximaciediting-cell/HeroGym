/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Star, 
  Clock, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  ChevronRight,
  TrendingUp,
  Users,
  ShieldCheck,
  Map as MapIcon,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const IMAGES = [
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHww_o9LTALWghSpdORvxxNrO001qxaPzm9vjGMFxwZ0QQZFbwkikkVp_fRRqfdwG-PnxX9ldUjbLmmcdlRsFEoeLSqd7MSzXtulM_PGqHoWFRFAesh0rWmbZocR5LVnlpD51G32tuxA74Z=s1600",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEqZcY4d942PZ5eY6-q43bM5ScQLIyzB6-q3zlwk8DBr6shnYzQplhUHzDv_SlpmNd2lVFz-gXH3CPSk7JO9t-00ZG7HETvSj0_A3l9MMjx4uU7dVPKGzdLBWSbbadUjIqfutHubBAUyFaO=s1600",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGCGf3mFasrcu3Dezn7zmXny5uf4qnblG1CdfVnOhIXw24YMNODCc30OZ1MR-u92Smj9Q_LiY_5vXU5odQd7LFg1NN3YeVO5iQRZ-24u2ESwsvYF067KjuOy6na7o9TSnzEJX4S-6GY7T2v=s1600"
];

const STICKY_NAV_CLASSES = "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Galeria", href: "#galeria" },
    { name: "Membresías", href: "#membresias" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-zinc-950 grain">
      {/* Navbar */}
      <nav className={`${STICKY_NAV_CLASSES} ${isScrolled ? "glass shadow-2xl py-3" : "bg-transparent"}`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            <Dumbbell className="text-zinc-950 w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            HERO GYM
            <span className="text-brand ml-1">PAZ</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white transition-colors font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/543516534195"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand text-zinc-950 px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-brand/20"
          >
            Únete ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden glass pt-24 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-display font-bold text-white border-b border-zinc-800 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/543516534195"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-brand text-zinc-950 py-4 rounded-2xl font-bold text-center text-xl shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chatea con nosotros
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pl-[24px] pt-[81px] pb-[45px] pr-6 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand/5 blur-[120px] rounded-full" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse">
              <Star className="w-4 h-4 text-brand fill-brand" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand">El mejor calificado de Córdoba</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
              DESATA AL <span className="text-brand">HÉROE</span> <br />
              QUE LLEVAS DENTRO
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              Transforma tu cuerpo y mente en el gimnasio más exclusivo de General Paz. 
              Equipamiento de élite, ambiente profesional y una comunidad inigualable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/543516534195"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand text-zinc-950 px-8 py-4 rounded-full text-center font-bold text-lg hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] transition-all transform hover:-translate-y-1"
              >
                Empezar Entrenamiento
              </a>
              <a 
                href="#galeria"
                className="w-full sm:w-auto glass text-white px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-zinc-800 transition-all"
              >
                Ver Instalaciones
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-display font-black">5.0</span>
                <div className="flex text-brand">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-brand" />)}
                </div>
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Puntuación Google</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-display font-black">06:00</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Hora de Apertura</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="servicios" className="py-24 px-6 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">¿Por qué Hero Gym?</h2>
              <p className="text-zinc-500 max-w-xl mx-auto font-medium">Marcamos la diferencia con un enfoque 360° en tu bienestar físico y mental.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Equipamiento Pro",
                  desc: "Máquinas de última generación diseñadas para la máxima eficiencia biomecánica."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Coaching Experto",
                  desc: "Nuestros entrenadores están certificados para llevarte al siguiente nivel de forma segura."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8" />,
                  title: "Ambiente Premium",
                  desc: "Espacios limpios, amplios y diseñados para que tu única preocupación sea entrenar."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="glass p-10 rounded-[2.5rem] group hover:border-brand/30 transition-all"
                >
                  <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-zinc-950 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section id="galeria" className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Nuestro Templo</h2>
                <p className="text-zinc-500 font-medium">Echa un vistazo a la energía que se vive en cada rincón.</p>
              </div>
              <a href="#" className="flex items-center gap-2 text-brand font-bold hover:underline">
                Ver más fotos <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px] md:h-[800px]">
              {/* Image 2 (Tall) */}
              <div className="md:col-span-4 rounded-[2.5rem] overflow-hidden group relative border border-zinc-800 shadow-2xl">
                <img 
                  src={IMAGES[1]} 
                  alt="Instalaciones Hero Gym" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-end items-end">
                   <p className="text-white font-bold text-xl">Zona de Pesas Libres</p>
                </div>
              </div>
              {/* Image 3 (Tall) */}
              <div className="md:col-span-4 rounded-[2.5rem] overflow-hidden group relative border border-zinc-800 shadow-2xl">
                <img 
                  src={IMAGES[2]} 
                  alt="Atmosfera Hero Gym" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-end items-end">
                   <p className="text-white font-bold text-xl">Cardio & Resistencia</p>
                </div>
              </div>
              {/* Right column with Image 1 and text */}
              <div className="md:col-span-4 flex flex-col gap-6">
                <div className="flex-1 glass rounded-[2.5rem] p-10 flex flex-col justify-center border-l-4 border-l-brand">
                  <Star className="w-12 h-12 text-brand mb-6 fill-brand" />
                  <p className="italic text-xl text-zinc-100 mb-6 font-medium leading-relaxed">
                    "El mejor gimnasio de la zona. Las máquinas son nuevas y el ambiente es de respeto y motivación constante."
                  </p>
                  <p className="font-bold text-white">— Juan Martinez, Miembro Hero</p>
                </div>
                <div className="h-2/5 rounded-[2.5rem] overflow-hidden relative border border-zinc-800">
                  <img src={IMAGES[0]} alt="Gimnasio Hero Gym" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing/Memberships Section */}
        <section id="membresias" className="py-24 px-6 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Planes diseñados para vos</h2>
              <p className="text-zinc-500 font-medium">Sin contratos largos. Sin letra chica. Solo resultados.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Pase Diario",
                  price: "$",
                  features: ["Acceso a todas las máquinas", "Uso de duchas y vestuarios", "Ambiente climatizado"],
                  popular: false
                },
                {
                  name: "Plan Mensual",
                  price: "$$",
                  features: ["Acceso ilimitado", "Rutina personalizada gratis", "Acceso a clases grupales", "Evaluación física inicial"],
                  popular: true
                },
                {
                  name: "Plan Trimestral",
                  price: "$$$",
                  features: ["Beneficio por pago adelantado", "Asesoría nutricional básica", "Entrenamiento personalizado", "Kit Hero de bienvenida"],
                  popular: false
                }
              ].map((plan, i) => (
                <div 
                  key={i}
                  className={`p-10 rounded-[2.5rem] flex flex-col relative transition-all ${plan.popular ? "bg-zinc-100 text-zinc-950 scale-105 shadow-[0_0_60px_rgba(255,255,255,0.1)]" : "glass text-white"}`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-zinc-950 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                      Recomendado
                    </span>
                  )}
                  <h3 className="text-2xl font-display font-black mb-2 uppercase">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-display font-black">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? "text-zinc-600" : "text-zinc-500"} font-bold lowercase`}>/ por periodo</span>
                  </div>
                  
                  <ul className="flex-1 space-y-4 mb-10">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? "text-brand-dark" : "text-brand"}`} />
                        <span className="font-medium text-sm leading-tight">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://wa.me/543516534195?text=Hola,%20quisiera%20más%20información%20sobre%20el%20${encodeURIComponent(plan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 text-center rounded-full font-black tracking-widest uppercase text-sm transform transition-all hover:scale-[1.02] active:scale-[0.98] ${plan.popular ? "bg-zinc-950 text-white shadow-xl shadow-zinc-400/20" : "bg-brand text-zinc-950 shadow-lg shadow-brand/20"}`}
                  >
                    Elegir Plan
                  </a>
                </div>
              ))}
            </div>
            
            <p className="text-center mt-12 text-zinc-500 text-sm font-medium">
              * Consultá por promociones vigentes y métodos de pago en recepción.
            </p>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="contacto" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Ubicación y Contacto</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-zinc-950 transition-all shadow-lg border-zinc-800">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-500 mb-1">Dirección</h4>
                    <p className="text-xl font-display font-bold text-white">Domingo F. Sarmiento 886</p>
                    <p className="text-zinc-500 font-medium">Córdoba, Argentina</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-zinc-950 transition-all shadow-lg border-zinc-800">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-500 mb-1">Teléfono</h4>
                    <p className="text-xl font-display font-bold text-brand">+54 351 653-4195</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-zinc-950 transition-all shadow-lg border-zinc-800">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-500 mb-1">Horarios</h4>
                    <p className="text-xl font-display font-bold text-white">Lun - Vie: 06:00 a 23:00</p>
                    <p className="text-zinc-500 font-medium">Sáb: 09:00 - 12:00 | 17:00 - 20:00</p>
                    <p className="text-zinc-500 font-medium">Dom: 17:00 - 20:00</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/543516534195" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-[#25D366]/20 transform transition-all hover:-translate-y-1">
                   <MessageCircle className="w-5 h-5 fill-white" /> WhatsApp
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Domingo+F.+Sarmiento+886,+X5000+C%C3%B3rdoba,+Argentina" target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-white text-zinc-950 py-4 rounded-2xl font-bold shadow-lg transform transition-all hover:-translate-y-1">
                   <MapIcon className="w-5 h-5" /> Cómo llegar
                </a>
                <a href="https://www.instagram.com/herogymcba/" target="_blank" className="w-16 flex items-center justify-center bg-gradient-to-tr from-purple-600 to-orange-400 text-white rounded-2xl shadow-lg hover:shadow-orange-400/20 transform transition-all hover:-translate-y-1">
                   <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="h-[450px] relative rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl group">
              <iframe
                title="HERO GYM GENERAL PAZ Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2132644265493!2d-64.17465612423389!3d-31.411696096531327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a32f14f5316b%3A0x9cd7666a2be5de77!2sHERO%20GYM%20GENERAL%20PAZ!5e0!3m2!1sen!2sar!4v1715814058000!5m2!1sen!2sar"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-zinc-950/20 rounded-[2.5rem]"></div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 py-12">
            <div className="max-w-7xl mx-auto bg-brand rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center overflow-hidden relative">
               {/* Decorative background icon */}
               <Dumbbell className="absolute -bottom-10 -left-10 w-64 h-64 text-black/10 -rotate-12 pointer-events-none" />
               <Dumbbell className="absolute -top-10 -right-10 w-64 h-64 text-black/10 rotate-45 pointer-events-none" />
               
               <h2 className="font-display text-4xl md:text-7xl font-black text-zinc-950 mb-8 max-w-3xl leading-tight">
                 TU MEJOR VERSIÓN EMPIEZA HOY.
               </h2>
               <a 
                 href="https://wa.me/543516534195?text=Hola,%20quisiera%20solicitar%20mi%20clase%20de%20prueba%20gratis"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-zinc-950 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all text-center"
               >
                 Obtén una Clase de Prueba
               </a>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 mt-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
               <Dumbbell className="text-brand w-5 h-5" />
            </div>
            <span className="font-display font-bold text-white">
              HERO GYM <span className="text-brand">PAZ</span>
            </span>
          </div>

          <div className="flex gap-12 text-zinc-500 text-sm font-medium">
             <a href="#" className="hover:text-white transition-colors">Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Términos</a>
             <a href="#contacto" className="hover:text-white transition-colors">Soporte</a>
          </div>

          <div className="flex items-center gap-4">
             <a href="https://www.instagram.com/herogymcba/" target="_blank" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand hover:text-zinc-950 transition-all border-zinc-800">
               <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand hover:text-zinc-950 transition-all border-zinc-800">
                <Facebook className="w-5 h-5" />
             </a>
          </div>
        </div>
        <p className="text-center mt-12 text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
          © 2026 HERO GYM GENERAL PAZ. TODOS LOS DERECHOS RESERVADOS. <br/>
          HECHO CON PASIÓN EN CÓRDOBA.
        </p>
      </footer>

      {/* Floating WhatsApp Action (Mobile) */}
      <a 
        href="https://wa.me/543516534195" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] md:hidden bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] active:scale-90 transition-all border-4 border-white/20"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
      </a>
    </div>
  );
}
