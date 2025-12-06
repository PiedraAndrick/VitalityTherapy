import type { Metadata } from "next";
import { EmbeddedMap } from "@/components/EmbeddedMap";

export const metadata: Metadata = {
    title: "Contacto | Vitality Therapy",
    description:
        "Ponte en contacto con Vitality Therapy para agendar tu sueroterapia o resolver cualquier duda.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#205225a5] px-4 py-12 md:py-16 flex items-center justify-center">
            <div className="w-full max-w-5xl rounded-3xl bg-[#edf3ec] shadow-2xl px-6 py-8 md:px-10 md:py-10 space-y-8">
                {/* Encabezado */}
                <header className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-950">
                        Vitality Therapy
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-emerald-950 leading-tight">
                        Contáctanos para tu sueroterapia
                    </h1>
                    <p className="text-sm md:text-base text-emerald-900/80 max-w-2xl">
                        Agenda tu sesión, resuelve dudas sobre nuestros sueros o déjanos un
                        mensaje. Te responderemos lo antes posible.
                    </p>
                </header>

                {/* Contenido principal: formulario + info de contacto */}
                <section className="grid gap-6 md:gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
                    {/* Formulario */}
                    <div className="rounded-2xl bg-white/90 p-5 md:p-6 shadow-lg border border-emerald-100">
                        <form
                            className="space-y-4"
                            // TODO: apunta a tu API o servicio de email
                            action="#"
                            method="post"
                        >
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-emerald-950"
                                >
                                    Nombre completo
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="w-full rounded-xl border border-emerald-100 bg-emerald-50/40 px-3.5 py-2.5 text-sm placeholder:text-gray-400"
                                    placeholder="Escribe tu nombre"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-emerald-950"
                                >
                                    Correo electrónico
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full rounded-xl border border-emerald-100 bg-emerald-50/40 px-3.5 py-2.5 text-sm text-emerald-950 outline-none ring-emerald-500/0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 placeholder:text-gray-400"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label
                                    htmlFor="phone"
                                    className="text-sm font-medium text-emerald-950"
                                >
                                    Teléfono / WhatsApp
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    className="w-full rounded-xl border border-emerald-100 bg-emerald-50/40 px-3.5 py-2.5 text-sm text-emerald-950 outline-none ring-emerald-500/0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 placeholder:text-gray-400"
                                    placeholder="+593 99 999 9999"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-emerald-950"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full rounded-xl border border-emerald-100 bg-emerald-50/40 px-3.5 py-2.5 text-sm text-emerald-950 outline-none ring-emerald-500/0 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 placeholder:text-gray-400 resize-none"
                                    placeholder="Cuéntanos en qué podemos ayudarte o qué suero te interesa…"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-emerald-50 shadow-md shadow-emerald-700/30 transition hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-800/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50"
                                >
                                    Enviar mensaje
                                </button>
                                <p className="mt-2 text-[11px] text-emerald-500">
                                    Respetamos tu privacidad. Tus datos solo se usarán para
                                    contactarte sobre tu consulta.
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Información de contacto */}
                    <aside className="space-y-4 rounded-2xl bg-emerald-50/60 p-5 md:p-6 border border-emerald-100">
                        <h2 className="text-base md:text-lg font-semibold text-emerald-950">
                            Información de contacto
                        </h2>

                        <div className="space-y-3 text-sm text-emerald-900/90">
                            <div className="flex gap-3">
                                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                                    <span className="text-xs">📞</span>
                                </div>
                                <div>
                                    <p className="font-medium text-emerald-950">Teléfono / WhatsApp</p>
                                    <p className="text-emerald-900">+593 99 999 9999</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                                    <span className="text-xs">✉️</span>
                                </div>
                                <div>
                                    <p className="font-medium text-emerald-950">Correo electrónico</p>
                                    <p className="text-emerald-900">contacto@vitality-therapy.com</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                                    <span className="text-xs">📍</span>
                                </div>
                                <div>
                                    <p className="font-medium text-emerald-950">Ubicación</p>
                                    <p className="text-emerald-900">
                                        Dirección clínica aquí<br />
                                        Ciudad, País
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                                    <span className="text-xs">🕒</span>
                                </div>
                                <div>
                                    <p className="font-medium text-emerald-950">Horario de atención</p>
                                    <p className="text-emerald-900">
                                        Lunes a Viernes: 9:00 – 18:00<br />
                                        Sábados: 9:00 – 13:00
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-100/60 p-3 text-[11px] text-emerald-800">
                            <p className="font-semibold text-emerald-950 mb-1">
                                ¿Prefieres WhatsApp?
                            </p>
                            <p>
                                Puedes escribirnos directamente y te ayudamos a elegir el suero
                                ideal para tus objetivos de bienestar.
                            </p>
                        </div>
                    </aside>
                </section>

                {/* Mapa / ubicación */}
                

                        {/* Placeholder del mapa: reemplaza por un iframe o componente de mapa real */}
                        <section className="mt-2">
                            <div className="rounded-2xl border border-emerald-100 bg-emerald-100/70 p-3 md:p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                                            Cómo llegar
                                        </p>
                                        <p className="text-sm md:text-base font-medium text-emerald-950">
                                            Encuéntranos en nuestra clínica
                                        </p>
                                    </div>
                                    
                                </div>

                                <EmbeddedMap
                                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1410.6008901492132!2d-79.1730350451879!3d-0.24508150261630052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-0.24470977081529396!2d-79.1729857333756!5e0!3m2!1ses!2sec!4v1764923785313!5m2!1ses!2sec"
                                    className=""
                                />
                            </div>
                        </section>
            </div>
        </main>
    );
}
