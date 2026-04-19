"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
  Building2,
  Users,
  CalendarDays,
  Clock,
  Navigation,
  MapPinned,
  RefreshCcw,
  AlignLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import Aurora from "@/components/ui/Aurora";
import { z } from "zod";
import { toast } from "sonner";
import { sendContactEmail } from "./actions";

const formSchema = z.object({
  fullName: z.string().min(1, "Le nom est requis"),
  email: z.string().email("L'email est invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  company: z.string().min(1, "L'entreprise est requise"),
  people: z.coerce.number().min(1, "Nombre de personnes invalide"),
  date: z.any().refine((val) => !!val, "La date est requise"),
  time: z.string().min(1, "L'heure est requise"),
  departureCity: z.string().min(1, "La ville de départ est requise"),
  arrivalCity: z.string().min(1, "La ville d'arrivée est requise"),
  hasReturn: z.string().min(1, "Veuillez choisir une option de retour"),
  returnDate: z.any().optional(),
  returnTime: z.string().optional(),
  // notes: z.string().min(1, "Les indications sont requises"),
});
// .superRefine((data, ctx) => {
//   if (data.hasReturn === "Oui") {
//     if (!data.returnDate) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["returnDate"],
//         message: "La date de retour est requise",
//       });
//     }
//     if (!data.returnTime) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["returnTime"],
//         message: "L'heure de retour est requise",
//       });
//     }
//   }
// });

function Contact() {
  const [date, setDate] = React.useState();
  const [returnDate, setReturnDate] = React.useState();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    people: "",
    date: "",
    time: "",
    departureCity: "",
    arrivalCity: "",
    hasReturn: "",
    returnDate: "",
    returnTime: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const result = formSchema.safeParse({ ...formData, date, returnDate });
    if (result.success) {
      setErrors({});
      return true;
    } else {
      const newErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (!newErrors[key]) newErrors[key] = issue.message;
      });
      setErrors(newErrors);
      toast.error(
        "Veuillez remplir tous les champs obligatoires correctement.",
        {
          position: "bottom-right",
        },
      );
      return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        dateFormatted: date ? format(date, "PPP") : undefined,
        returnDateFormatted: returnDate ? format(returnDate, "PPP") : undefined,
      };

      const result = await sendContactEmail(payload);

      if (result.success) {
        setIsSubmitted(true);
        toast.success("Demande envoyée avec succès !", {
          position: "bottom-right",
        });
        setTimeout(() => {
          setIsSubmitted(false);
          setDate(null);
          setReturnDate(null);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            company: "",
            people: "",
            date: "",
            time: "",
            departureCity: "",
            arrivalCity: "",
            hasReturn: "",
            returnDate: "",
            returnTime: "",
            notes: "",
          });
        }, 3000);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'envoi. Veuillez réessayer plus tard.", {
        position: "bottom-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const hours = Array.from(
    { length: 24 },
    (_, i) => `${String(i).padStart(2, "0")}h`,
  );

  const inputClass =
    "w-full px-4 py-3 rounded-xl border-2 border-[#5028ff]/20 bg-black/40 text-white placeholder-white/30 focus:border-[#b464ff] focus:outline-none focus:bg-black/60 transition-all duration-300 font-medium backdrop-blur-sm";
  const errorInputClass =
    " !border-red-500/50 focus:!border-red-500 bg-red-950/10";
  const labelClass =
    "block text-sm font-bold text-[#b464ff] mb-2 tracking-wide";
  const Label = ({ children }) => (
    <label className={labelClass}>
      {children} <span className="text-red-500">*</span>
    </label>
  );
  const selectClass =
    "w-full px-4 py-3 rounded-xl border-2 border-[#5028ff]/20 bg-black/60 text-white focus:border-[#b464ff] focus:outline-none transition-all duration-300 font-medium backdrop-blur-sm appearance-none cursor-pointer";
  const ErrorText = ({ error }) =>
    error ? (
      <p className="text-red-400 text-xs mt-1 font-medium">{error}</p>
    ) : null;

  return (
    <div className="relative w-full min-h-screen" id="Contact">
      {/* Aurora background effect */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Aurora
          colorStops={["#b446d2", "#B19EEF", "#5227FF"]}
          blend={1}
          amplitude={1.0}
          speed={1}
        />
      </div>
      {/* Main content above Aurora */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold text-[#b464ff] bg-[#b464ff]/10 px-4 py-2 rounded-full uppercase tracking-widest border border-[#b464ff]/30">
              Contact & Réservation
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Réservez Votre{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #b464ff, #f000a0)",
              }}
            >
              Trajet
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Remplissez le formulaire ci-dessous et notre équipe vous contactera
            rapidement pour confirmer votre réservation.
          </p>
        </div>

        <div className=" gap-10">
          {/* Form */}
          <div
            className="lg:col-span-2 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="rounded-2xl p-8 w-full sm:p-10 border border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #5028ff, #b464ff)",
                  }}
                >
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-white">
                  Informations de réservation
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Section: Contact */}
                <div className="pb-2">
                  <p className="text-xs uppercase tracking-widest text-white font-bold mb-5 flex items-center gap-2">
                    <span className="w-6 h-px bg-white" /> Coordonnées
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Votre nom et prénom</Label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Jean Dupont"
                        className={`${inputClass} ${errors.fullName ? errorInputClass : ""}`}
                      />
                      <ErrorText error={errors.fullName} />
                    </div>
                    <div>
                      <Label>Votre e-mail</Label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jean@exemple.com"
                        className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
                      />
                      <ErrorText error={errors.email} />
                    </div>
                    <div>
                      <Label>Votre numéro de téléphone</Label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+33 6 00 00 00 00"
                        className={`${inputClass} ${errors.phone ? errorInputClass : ""}`}
                      />
                      <ErrorText error={errors.phone} />
                    </div>
                    <div>
                      <Label>Votre entreprise</Label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                        className={`${inputClass} ${errors.company ? errorInputClass : ""}`}
                      />
                      <ErrorText error={errors.company} />
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Section: Trajet */}
                <div className="pb-2">
                  <p className="text-xs uppercase tracking-widest text-white font-bold mb-5 flex items-center gap-2">
                    <span className="w-6 h-px bg-white" /> Détails du trajet
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <Label>Nombre de personnes</Label>
                      <input
                        type="number"
                        name="people"
                        value={formData.people}
                        onChange={handleInputChange}
                        min="1"
                        placeholder="1"
                        className={`${inputClass} ${errors.people ? errorInputClass : ""}`}
                      />
                      <ErrorText error={errors.people} />
                    </div>
                    <div>
                      <Label>Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            data-empty={!date}
                            className={
                              inputClass +
                              " w-full justify-between h-12.5 text-left font-normal data-[empty=true]:text-muted-foreground"
                            }
                          >
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <ChevronDownIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className={inputClass + " [color-scheme:dark] "}
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            defaultMonth={date}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Heure</Label>
                      <div className="relative">
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className={`${selectClass} ${errors.time ? errorInputClass : ""}`}
                        >
                          <option value="">— Choisir —</option>
                          {hours.map((h) => (
                            <option key={h} value={h}>
                              {h}
                            </option>
                          ))}
                        </select>
                        <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b464ff] pointer-events-none" />
                      </div>
                      <ErrorText error={errors.time} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Ville de départ</Label>
                      <input
                        type="text"
                        name="departureCity"
                        value={formData.departureCity}
                        onChange={handleInputChange}
                        placeholder="Paris"
                        className={`${inputClass} ${errors.departureCity ? errorInputClass : ""}`}
                      />
                      <ErrorText error={errors.departureCity} />
                    </div>
                    <div>
                      <Label>Ville d'arrivée</Label>
                      <input
                        type="text"
                        name="arrivalCity"
                        value={formData.arrivalCity}
                        onChange={handleInputChange}
                        placeholder="Lyon"
                        className={`${inputClass} ${errors.arrivalCity ? errorInputClass : ""}`}
                      />
                      <ErrorText error={errors.arrivalCity} />
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Section: Retour */}
                <div className="pb-2">
                  <p className="text-xs uppercase tracking-widest text-white font-bold mb-5 flex items-center gap-2">
                    <span className="w-6 h-px bg-white" /> Trajet retour
                  </p>
                  <div className="mb-4">
                    <Label>Avez-vous une date de retour prévue ?</Label>
                    <div
                      className={`flex gap-3 p-1 rounded-xl ${errors.hasReturn ? "border-2 border-red-500/50 bg-red-950/10" : ""}`}
                    >
                      {["Oui", "Non"].map((opt) => (
                        <label
                          key={opt}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 cursor-pointer transition-all duration-300 font-bold text-sm ${
                            formData.hasReturn === opt
                              ? "border-[#b464ff] bg-[#b464ff]/20 text-white"
                              : "border-[#5028ff]/20 bg-black/20 text-white/50 hover:border-[#5028ff]/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="hasReturn"
                            value={opt}
                            checked={formData.hasReturn === opt}
                            onChange={handleInputChange}
                            className="hidden"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                    <ErrorText error={errors.hasReturn} />
                  </div>

                  {formData.hasReturn === "Oui" && (
                    <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up">
                      <div>
                        <span className="block text-sm font-bold text-[#b464ff] mb-2 tracking-wide">
                          Date de retour
                        </span>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              data-empty={!returnDate}
                              className={`${inputClass} w-full justify-between h-12.5 text-left font-normal data-[empty=true]:text-muted-foreground ${
                                errors.returnDate ? errorInputClass : ""
                              }`}
                            >
                              {returnDate ? (
                                format(returnDate, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className={inputClass + " [color-scheme:dark] "}
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={returnDate}
                              onSelect={(d) => {
                                setReturnDate(d);
                                if (errors.returnDate)
                                  setErrors((prev) => ({
                                    ...prev,
                                    returnDate: undefined,
                                  }));
                              }}
                              defaultMonth={returnDate}
                            />
                          </PopoverContent>
                        </Popover>
                        <ErrorText error={errors.returnDate} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-[#b464ff] mb-2 tracking-wide">
                          Date de retour
                        </span>

                        <div className="relative">
                          <select
                            name="returnTime"
                            value={formData.returnTime}
                            onChange={handleInputChange}
                            className={`${selectClass} ${errors.returnTime ? errorInputClass : ""}`}
                          >
                            <option value="">— Choisir —</option>
                            {hours.map((h) => (
                              <option key={h} value={h}>
                                {h}
                              </option>
                            ))}
                          </select>
                          <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b464ff] pointer-events-none" />
                        </div>
                        <ErrorText error={errors.returnTime} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Notes */}
                <div>
                  <label className={labelClass}>Vos indications</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Précisez toute information utile (bagages, besoins spéciaux, adresse exacte...)"
                    className={inputClass + " resize-none"}
                  />
                </div>

                {/* Terms */}
                <p className="text-xs text-white/40 leading-relaxed">
                  En soumettant ce formulaire, vous acceptez nos conditions
                  générales d'utilisation.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="relative inline-flex h-12 active:scale-95 transition overflow-hidden cursor-pointer rounded-lg p-[1px] w-full focus:outline-none"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span className="text-white">Envoi en cours...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-6 h-6 text-white" />
                        <span className="text-white">Demande envoyée !</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="text-white">Envoyer ma demande</span>
                      </>
                    )}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* <div
            className="space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            
            <div
              className="rounded-2xl p-6 border border-[#5028ff]/30 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(80,40,255,0.08), rgba(180,100,255,0.05))",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black">NEXT WAY TRANSPORT</h3>
              </div>

              <div className="space-y-3">
                <a className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold break-all">
                    test123@gmail.com
                  </span>
                </a>
                <a className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold">+212 7768787</span>
                </a>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium opacity-90">
                      123 Rue de l'Exemple,
                      <br />
                      20000 Casablanca
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm font-bold mb-3">Suivez-nous</p>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-[#5028ff] transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 border border-[#5028ff]/30 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(80,40,255,0.08), rgba(180,100,255,0.05))",
              }}
            >
              <h3 className="text-lg font-black text-white mb-5">
                Pourquoi nous choisir ?
              </h3>
              <div className="space-y-3">
                {[
                  "Chauffeurs professionnels certifiés",
                  "Véhicules haut de gamme",
                  "Disponible 24h/24 et 7j/7",
                  "Réservation rapide et simple",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #5028ff, #b464ff)",
                      }}
                    >
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1) opacity(0.5);
        }
        option {
          background: #0a0a1a;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default Contact;
