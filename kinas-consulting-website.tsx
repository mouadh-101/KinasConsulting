"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Menu,
  X,
  ChevronUp,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { sendEmail, type FormData } from "./actions/send-email";

// Constants
const EMAIL_ADDRESS = "kinasconsult@gmail.com";

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    success: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormStatus({ ...formStatus, isSubmitting: true, isSubmitted: false })

    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          success: true,
          message: result.message,
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        }) // Clear the form fields
      } else {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          success: false,
          message: result.message,
        })
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        success: false,
        message: "Une erreur s'est produite lors de l'envoi du message.",
      })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col rounded-lg bg-white p-6 shadow-lg">
      {formStatus.isSubmitted && (
        <div
          className={`mb-4 flex items-center rounded-md p-3 ${formStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}
        >
          {formStatus.success ? (
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
          ) : (
            <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
          )}
          <span>{formStatus.message}</span>
        </div>
      )}
      <div className="flex-1 space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-[#09B2A0] focus-visible:ring-[#09B2A0]"
          disabled={formStatus.isSubmitting}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-[#09B2A0] focus-visible:ring-[#09B2A0]"
          disabled={formStatus.isSubmitting}
        />
        <Input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          required
          className="border-[#09B2A0] focus-visible:ring-[#09B2A0]"
          disabled={formStatus.isSubmitting}
        />
        <Textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[180px] flex-1 border-[#09B2A0] focus-visible:ring-[#09B2A0]"
          disabled={formStatus.isSubmitting}
        />
      </div>
      <Button
        type="submit"
        className="mt-4 w-full bg-[#09B2A0] text-white transition-all duration-300 hover:bg-[#078C80] hover:shadow-md"
        disabled={formStatus.isSubmitting}
      >
        {formStatus.isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </Button>
      <p className="mt-2 text-xs text-gray-500 text-center">
        Votre message sera envoyé à {EMAIL_ADDRESS}
      </p>
    </form>
  );
};

export default function KinasConsulting() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Accueil", id: "hero" },
    { name: "À Propos", id: "about" },
    { name: "Services", id: "services" },
    { name: "Références", id: "partners" },
    { name: "Contact", id: "contact" },
  ];

  const imagePaths = [
    { src: "/logos/aam.png", link: "https://www.facebook.com/AssociationArtAMaknassy/" },
    { src: "/logos/alBadil.png", link: "https://al-badil.net/" },
    { src: "/logos/amavi.png", link: "https://www.facebook.com/asso.amavi" },
    { src: "/logos/artRue.png", link: "https://lartrue.org/" },
    { src: "/logos/cinerif.png", link: "https://www.facebook.com/Cineryf" },
    { src: "/logos/cnci.png", link: "https://cnci.tn/" },
    { src: "/logos/Menassa.png", link: "https://www.facebook.com/altertunisia" },
    { src: "/logos/safir.png", link: "https://www.safir-eu.com/" },
    { src: "/logos/tacir.png", link: "https://www.tacir.tn/" },
    { src: "/logos/tfannen.png", link: "https://www.facebook.com/TfanenTunisieCreative" },
    { src: "/logos/Zirda.png", link: "#" },
    {src:"/logos/GoethInst.png", link: "https://www.goethe.de/ins/tn/fr/index.html"},
    {src:"/logos/BritchCons.png", link: "https://www.britishcouncil.tn/fr"},
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="#" className="flex items-center gap-2" onClick={() => scrollToSection("hero")}>
              <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#09B2A0]">
                <Image
                  src="/KinasConsultingLogo.png"
                  alt="Kinas Consulting Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span
                className={cn(
                  "text-xl font-bold transition-colors",
                  scrolled ? "text-[#09B2A0]" : "text-white"
                )}
              >
                <span className="hidden sm:inline">Kinas Consulting</span>
                <span className="sm:hidden">Kinas</span>
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "relative font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#09B2A0] after:transition-all after:duration-300 hover:after:w-full",
                      scrolled
                        ? "text-[#2C2C2C] hover:text-[#09B2A0]"
                        : "text-white hover:text-[#6AE2D7]"
                    )}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className={cn("z-50 md:hidden", scrolled ? "text-[#2C2C2C]" : "text-white")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-x-0 top-20 z-40 transform bg-white shadow-lg transition-all duration-300 md:hidden",
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
          )}
        >
          <nav className="container mx-auto max-w-7xl px-4 py-4">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-[#2C2C2C] transition-all hover:bg-[#09B2A0]/10 hover:text-[#09B2A0] active:bg-[#09B2A0]/20"
                >
                  <span className="font-medium">{link.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              ))}

            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex min-h-[100vh] flex-col items-center justify-center px-4 text-white"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#078C80]/80 to-[#09B2A0]/70"></div>
        </div>
        {/* Dynamic Overlay Patterns */}
        <div className="absolute inset-0 z-5">
          <div
            className="absolute inset-0 opacity-10 animate-pattern-float-slow"
            style={{
              backgroundImage: `url("/background.jpg")`,
            }}
          ></div>
        </div>
        <div className="container relative z-20 mx-auto max-w-5xl px-4 text-center">
          <div className="animate-fadeIn">
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Kinas Consulting
            </h1>
            <p className="mb-6 text-lg font-medium italic sm:text-xl md:text-2xl animate-fadeInUp">
              Catalyseur d&apos;Impact.
            </p>
            <Button
              size="lg"
              className="bg-white px-4 py-2 text-sm sm:px-6 md:px-8 md:text-base text-[#09B2A0] transition-transform duration-300 hover:scale-105 hover:bg-[#F5F5F5] hover:text-[#078C80] animate-fadeInUp animation-delay-500"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection("about")} aria-label="Scroll down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative py-20">
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[#2C2C2C] md:text-4xl">
            À Propos
            <div className="mx-auto mt-2 h-1 w-20 bg-[#09B2A0]"></div>
          </h2>
          <div className="mb-16 flex flex-col items-center md:flex-row md:gap-10">
            <div className="mb-8 flex justify-center md:mb-0 md:w-1/3">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#09B2A0] shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                <Image
                  src="/KinasConsultingLogo.png"
                  alt="Kinas Consulting Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg leading-relaxed text-[#2C2C2C]">
                Fondée par Mouadh Gammoudi, Kinas Consulting accompagne les institutions nationales et internationales
                dans la conception, la gestion et l&apos;évaluation de projets à fort impact. Forte d&apos;une approche
                alliant vision stratégique, expertise terrain et innovation, l&apos;agence développe des solutions sur
                mesure répondant aux défis des organisations, des institutions et des territoires.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row-reverse md:gap-10">
            <div className="mb-8 flex justify-center md:mb-0 md:w-1/3">
              <div className="group relative h-64 w-64 overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl">
                <Image
                  src="/MouadhGammoudi.jpeg"
                  alt="Mouadh Gammoudi - Founder"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09B2A0]/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="mb-4 text-xl font-bold text-[#078C80]">Mouadh Gammoudi, Fondateur</h3>
              <div className="relative">
                <div className="relative max-h-[120px] overflow-hidden">
                  <p className="text-lg leading-relaxed text-[#2C2C2C]">
                    Mouadh Gammoudi, architecte de formation et spécialiste en gestion de projets, a acquis plus de dix ans
                    d&apos;expérience sur le terrain. Son expertise des dynamiques institutionnelles et territoriales, ainsi
                    que son vaste réseau d&apos;experts dans divers domaines stratégiques, lui permettent d&apos;apporter
                    des solutions adaptées et efficaces aux projets qu&apos;il accompagne. Il a dirigé avec succès de nombreux projets
                    d&apos;envergure nationale et internationale, démontrant une capacité exceptionnelle à fédérer les équipes et à
                    atteindre les objectifs fixés.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white via-white/90 to-transparent"></div>
                <Link
                  href="/cv"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform rounded-md bg-[#09B2A0] px-6 py-2 text-white transition-all duration-300 hover:bg-[#078C80] hover:shadow-md"
                >
                  Voir CV Complet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-hidden bg-[#F5F5F5] py-20">
        {/* Decorative Elements */}
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#09B2A0]/10"></div>
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#09B2A0]/10"></div>
        <div className="absolute left-1/4 top-1/3 h-20 w-20 rounded-full bg-[#09B2A0]/5"></div>
        <div className="absolute bottom-1/4 right-1/3 h-16 w-16 rounded-full bg-[#09B2A0]/5"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fillRule='evenodd'%3E%3Cg id='autumn' fill='%2309B2A0' fillOpacity='1'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "88px 24px",
            }}
          ></div>
        </div>
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[#2C2C2C] md:text-4xl">
            Nos Services
            <div className="mx-auto mt-2 h-1 w-20 bg-[#09B2A0]"></div>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Conseil et accompagnement stratégique",
                description:
                  "Élaboration de stratégies, ingénierie de projets et renforcement des capacités pour les institutions et organisations.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                ),
              },
              {
                title: "Gestion et pilotage de projets",
                description:
                  "Conception, assistance technique et administratif, coordination et exécution de projets à impact social, environnemental et économique.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                ),
              },
              {
                title: "Organisation d'événements et networking",
                description: "Forums, rencontres professionnelles, résidences et conférences.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                title: "Communication et Production",
                description:
                  "Développement d'identités visuelles, stratégies de communication et production audiovisuelle.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 transform text-[#09B2A0] transition-transform duration-500 group-hover:scale-110 group-hover:text-[#078C80]">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#2C2C2C]">{service.title}</h3>
                <p className="text-[#2C2C2C]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="relative py-20">
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[#2C2C2C] md:text-4xl">
            Références
            <div className="mx-auto mt-2 h-1 w-20 bg-[#09B2A0]"></div>
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-[#2C2C2C]">
            Ces références témoignent de la confiance accordée au fondateur.
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {imagePaths.map((image, index) => (
              <div key={index} className="group flex items-center justify-center rounded-lg bg-[#F5F5F5] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={image.src}
                    alt={`Partner ${index + 1}`}
                    width={120}
                    height={80}
                    className="h-20 w-auto object-contain transition-all duration-500 grayscale group-hover:grayscale-0"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-[#F5F5F5] py-20">
        {/* Decorative Elements */}
        <div className="absolute -left-10 top-20 h-20 w-20 rounded-full bg-[#09B2A0]/10"></div>
        <div className="absolute -right-10 bottom-20 h-20 w-20 rounded-full bg-[#09B2A0]/10"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2309B2A0' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[#2C2C2C] md:text-4xl">
            Contactez-nous
            <div className="mx-auto mt-2 h-1 w-20 bg-[#09B2A0]"></div>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <ContactForm />
            <div className="flex h-full flex-col space-y-6">
              <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg transition-all duration-500 hover:shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4374144844784!2d9.461644375714687!3d35.03766717351655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDAyJzE1LjYiTiA5wrAyNyc0OS44IkU!5e0!3m2!1sen!2sus!4v1637097045693!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-opacity duration-300 hover:opacity-90"
                ></iframe>
              </div>
              <div className="flex-1 space-y-4 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#09B2A0]/10">
                    <Phone className="h-5 w-5 text-[#09B2A0]" />
                  </div>
                  <span>+216 93 423 013</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#09B2A0]/10">
                    <Mail className="h-5 w-5 text-[#09B2A0]" />
                  </div>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="transition-colors hover:text-[#09B2A0] hover:underline"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#09B2A0]/10">
                    <MapPin className="h-5 w-5 text-[#09B2A0]" />
                  </div>
                  <span>10, Rue Ibn Roched, Imm Kaddoussi, Sidi Bouzid 9100</span>
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#09B2A0] p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-[#078C80]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#09B2A0] p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-[#078C80]"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] py-8 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="text-center md:text-left">
                &copy; {new Date().getFullYear()} Kinas Consulting. Tous droits réservés.
              </p>
            </div>
            {/*<div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-[#6AE2D7]">
                Mentions légales
              </Link>
              <Link href="#" className="transition-colors hover:text-[#6AE2D7]">
                Politique de confidentialité
              </Link>
            </div>*/}
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#09B2A0] text-white shadow-lg transition-all duration-300 hover:bg-[#078C80]",
          showScrollTop ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
}