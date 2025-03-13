"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, Github, Twitter, Music, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


export default function CV() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const experiences = [
        {
            title: "Founder & Architect",
            organization: "KINAS Architecture",
            start_year: 2023,
            end_year: "Présent",
            description:
                "Réalisation d'études architecturales pour des projets commandés par des particuliers et des entités publiques.",
        },
        {
            title: "Co-Founder & Manager",
            organization: "ZIRDA PROD",
            start_year: 2024,
            end_year: "Présent",
            description:
                "Diriger une entreprise créative spécialisée dans la production audiovisuelle et la gestion de projets socioculturels. Développer des initiatives innovantes en mettant l'accent sur l'impact social et l'accessibilité créative.",
        },
        {
            title: "Regional Coordinator",
            organization: "Tacir Program (Sidi Bouzid)",
            start_year: 2023,
            end_year: "Présent",
            description:
                "Gestion d'un programme visant à renforcer les acteurs culturels locaux et à encourager les initiatives socioculturelles à Sidi Bouzid.",
        },
        {
            title: "Production Manager, Artistic Residency 'Dignity Cards'",
            organization: "Dream City Festival",
            start_year: 2023,
            end_year: 2023,
            description:
                "Supervision d'une résidence artistique, collaboration avec des artistes et des intellectuels.",
        },
        {
            title: "Project Manager",
            organization: "CineRif Project",
            start_year: 2017,
            end_year: "Présent",
            description:
                "Coordination d'un projet de cinéma rural destiné à démocratiser l'accès à la culture dans les zones mal desservies. Mise en œuvre de programmes culturels percutants visant à promouvoir la narration d'histoires et l'engagement communautaire.",
        },
        {
            title: "Project Coordinator",
            organization: "El-Minassa Association",
            start_year: 2022,
            end_year: 2022,
            description:
                "Tackled the challenges of student housing accessibility, affordability, and quality for young people in Tunisia, particularly in underserved areas.",
        },
        {
            title: "Project Manager",
            organization: "KIM Project",
            start_year: 2020,
            end_year: 2022,
            description:
                "S'attaquer aux défis de l'accessibilité, de l'abordabilité et de la qualité des logements étudiants pour les jeunes en Tunisie, en particulier dans les zones mal desservies.",
        },
        {
            title: "Production Manager",
            organization: "Bouhedma Project (By Imed Alibi)",
            start_year: 2019,
            end_year: 2019,
            description:
                "Réalisation d'un projet musical mettant en valeur le patrimoine culturel de la région.",
        },
    ];
    const education = [
        {
            title: "National Diploma in Architecture",
            institution: "National School of Architecture and Urbanism (E.N.A.U), Tunisia",
            year: "2023",
        },
    ];

    const additionalTraining = [
        {
            title: "Cultural Management",
            institution: "HORS LIT",
            year: "2019",
        },
        {
            title: "Project Management",
            institution: "HOUMTEK",
            year: "2020",
        },
        {
            title: "Social Impact Project Development",
            institution: "SAFIR",
            year: "2021–2022",
        },
        {
            title: "Impact Creation",
            institution: "DOC HOUSE",
            year: "2022",
        },
        {
            title: "Project Design",
            institution: "TACIR",
            year: "2024",
        },
    ];
    const competencesTech = [
        "Gestion et coordination de projets",
        "Conception et planification architecturale",
        "Production audiovisuelle et création de contenu",
        "Revitalisation de l'espace public et urbanisme",
        "Gestion de la production d'événements et résidences artistiques"
    ];
    const competencesTrans = [
        "Création d'impact social et innovation",
        "Plaidoyer pour l'accessibilité culturelle",
        "Leadership et développement d'équipe",
        "Engagement et autonomisation des communautés",
        "Planification stratégique et développement de programmes"
    ];
    return (
        <div  className="min-h-screen bg-gradient-to-br from-[#09B2A0]/5 to-white font-sans">
            {/* Header */}
            <header
                className={cn(
                    "fixed top-0 z-50 w-full transition-all duration-300",
                    scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent",
                )}
            >
                <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
                    <Link
                        href="/"
                        className={cn("flex items-center gap-2 transition-colors", scrolled ? "text-[#09B2A0]" : "text-[#2C2C2C]")}
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span className="font-medium">Retour au site</span>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto max-w-5xl px-4 pt-32">
                {/* Profile Section */}
                <div className="mb-16 rounded-xl bg-white p-8 shadow-lg">
                    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                        <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-xl">
                            <Image
                                src="/MouadhGammoudi.jpeg"
                                alt="Mouadh Gammoudi"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="mb-2 text-center text-4xl font-bold text-[#2C2C2C] md:text-left">Mouadh Gammoudi</h1>
                            <p className="mb-6 text-center text-xl text-[#09B2A0] md:text-left">
                                Architect | Cultural Manager | Social Impact Advocate
                            </p>
                            <div className="mb-6 relative  overflow-hidden">
                                <p className="text-lg leading-relaxed text-[#2C2C2C]">
                                    Mouadh Gammoudi, architecte de formation et spécialiste en gestion de projets, a acquis plus de dix ans
                                    d&apos;expérience sur le terrain. Son expertise des dynamiques institutionnelles et territoriales, ainsi
                                    que son vaste réseau d&apos;experts dans divers domaines stratégiques, lui permettent d&apos;apporter
                                    des solutions adaptées et efficaces aux projets qu&apos;il accompagne. Il a dirigé avec succès de nombreux projets
                                    d&apos;envergure nationale et internationale, démontrant une capacité exceptionnelle à fédérer les équipes et à
                                    atteindre les objectifs fixés.
                                </p>
                            </div>
                            <div className="mb-8 grid gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09B2A0]/10">
                                        <MapPin className="h-4 w-4 text-[#09B2A0]" />
                                    </div>
                                    <span>10, Rue Ibn Roched, Imm Kaddoussi, Sidi Bouzid 9100</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09B2A0]/10">
                                        <Mail className="h-4 w-4 text-[#09B2A0]" />
                                    </div>
                                    <span>kinasconsult@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09B2A0]/10">
                                        <Phone className="h-4 w-4 text-[#09B2A0]" />
                                    </div>
                                    <span>+216 93 423 013</span>
                                </div>
                            </div>

                            <div className="flex justify-center gap-4 md:justify-start">
                                <a
                                    href="https://www.linkedin.com/in/mouadh-gammoudi/"
                                    className="rounded-full bg-[#09B2A0]/10 p-2 text-[#09B2A0] transition-colors hover:bg-[#09B2A0] hover:text-white"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.facebook.com/mouadh.gammoudii"
                                    className="rounded-full bg-[#09B2A0]/10 p-2 text-[#09B2A0] transition-colors hover:bg-[#09B2A0] hover:text-white"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/mouadh_gammoudi/"
                                    className="rounded-full bg-[#09B2A0]/10 p-2 text-[#09B2A0] transition-colors hover:bg-[#09B2A0] hover:text-white"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience & Education Grid */}
                <div className="mb-16 grid gap-8 md:grid-cols-2">
                    {/* Experience Section */}
                    <div className="rounded-xl bg-white p-8 shadow-lg">
                        <h2 className="mb-8 text-2xl font-bold text-[#2C2C2C]">Experience</h2>
                        <div className="space-y-8">
                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative border-l-2 border-[#09B2A0]/20 pl-6">
                                        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-[#09B2A0] bg-white"></div>
                                        <div className="mb-1 text-sm text-[#09B2A0]">
                                            {exp.start_year} {exp.start_year !== exp.end_year ? `- ${exp.end_year}` : ""}
                                        </div>
                                        <h3 className="text-lg font-bold">{exp.title}</h3>
                                        <div className="mb-2 text-[#09B2A0]">{exp.organization}</div>
                                        <p className="text-sm text-gray-600">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="rounded-xl bg-white p-8 shadow-lg">
                        <h2 className="mb-8 text-2xl font-bold text-[#2C2C2C]">Education</h2>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className="relative border-l-2 border-[#09B2A0]/20 pl-6">
                                    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-[#09B2A0] bg-white"></div>
                                    <div className="mb-1 text-sm text-[#09B2A0]">{edu.year}</div>
                                    <h3 className="text-lg font-bold">{edu.title}</h3>
                                    <div className="mb-2 text-[#09B2A0]">{edu.institution}</div>
                                </div>
                            ))}
                        </div>
                        <h2 className="mb-8 mt-8 text-2xl font-bold text-[#2C2C2C]">Formation complémentaire</h2>
                        <div className="space-y-8">
                            {additionalTraining.map((training, index) => (
                                <div key={index} className="relative border-l-2 border-[#09B2A0]/20 pl-6">
                                    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-[#09B2A0] bg-white"></div>
                                    <div className="mb-1 text-sm text-[#09B2A0]">{training.year}</div>
                                    <h3 className="text-lg font-bold">{training.title}</h3>
                                    <div className="mb-2 text-[#09B2A0]">{training.institution}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-16 rounded-xl bg-white p-8 shadow-lg">
                    <h2 className="mb-8 text-2xl font-bold text-[#2C2C2C]">Compétences</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 text-lg font-semibold text-[#09B2A0]">Compétences Techniques</h3>
                            <div className="space-y-2">
                                {competencesTech.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-[#09B2A0]"></div>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 text-lg font-semibold text-[#09B2A0]">Compétences Transversales</h3>
                            <div className="space-y-2">
                                {competencesTrans.map(
                                    (skill, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-[#09B2A0]"></div>
                                            <span>{skill}</span>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Languages Section */}
                <div className="mb-16 rounded-xl bg-white p-8 shadow-lg">
                    <h2 className="mb-8 text-2xl font-bold text-[#2C2C2C]">Langues</h2>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {[
                            { language: "Arabe", level: "Langue maternelle", percentage: "100%" },
                            { language: "Français", level: "Intermédiaire ", percentage: "80%" },
                            { language: "Anglais", level: "Intermédiaire ", percentage: "60%" },
                        ].map((lang, index) => (
                            <div key={index}>
                                <div className="mb-2 flex justify-between">
                                    <span className="font-medium">{lang.language}</span>
                                    <span className="text-sm text-gray-500">{lang.level}</span>
                                </div>
                                <div className="h-2 w-full rounded-full bg-[#09B2A0]/10">
                                    <div className="h-2 rounded-full bg-[#09B2A0]" style={{ width: lang.percentage }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

