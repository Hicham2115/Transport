"use client";
import React, { useState } from "react";
import SplitText from "@/components/ui/SplitText";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  ChevronDownIcon,
  Send,
  CheckCircle,
  Lock,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/contact-us/actions";

const formSchema = z.object({
  serviceType: z.string().min(1, "Veuillez choisir un type de prestation"),
  people: z.coerce.number().min(1, "Nombre de passagers invalide"),
  fullName: z.string().min(1, "Le nom est requis"),
  contact: z.string().min(1, "Le téléphone ou email est requis"),
});

const serviceOptions = [
  "Transfert Aéroport",
  "Événement / Soirée",
  "Tour Touristique",
  "Transport Sportif",
  "Mise à disposition",
  "Séminaire / Congrès",
  "Autre",
];

const reassurances = [
  { Icon: Clock, text: "Réponse sous 2h garantie" },
  { Icon: ShieldCheck, text: "Devis 100% gratuit & sans engagement" },
  { Icon: Users, text: "Chauffeurs certifiés VTC" },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border-2 border-[#5028ff]/20 bg-black/40 text-white placeholder-white/30 focus:border-[#b464ff] focus:outline-none focus:bg-black/60 transition-all duration-300 font-medium backdrop-blur-sm";
const errorInputClass =
  "!border-red-500/50 focus:!border-red-500 bg-red-950/10";
const labelClass =
  "block text-sm font-bold text-[#b464ff] mb-2 tracking-wide";
const selectClass =
  "w-full px-4 py-3 rounded-xl border-2 border-[#5028ff]/20 bg-black/60 text-white focus:border-[#b464ff] focus:outline-none transition-all duration-300 font-medium backdrop-blur-sm appearance-none cursor-pointer";

function ErrorText({ error }) {
  return error ? (
    <p className="text-red-400 text-xs mt-1 font-medium">{error}</p>
  ) : null;
}

function HomeQuoteForm() {
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    serviceType: "",
    people: "",
    fullName: "",
    contact: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validateForm = () => {
    const result = formSchema.safeParse(formData);
    if (result.success) {
      setErrors({});
      return true;
    }
    const newErrors = {};
    result.error.issues.forEach((issue) => {
      const key = issue.path[0];
      if (!newErrors[key]) newErrors[key] = issue.message;
    });
    setErrors(newErrors);
    toast.error("Veuillez remplir tous les champs obligatoires.", {
      position: "bottom-right",
    });
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const payload = {
        serviceType: formData.serviceType,
        people: formData.people,
        fullName: formData.fullName,
        contact: formData.contact,
        dateFormatted: date ? format(date, "PPP") : "",
      };
      const result = await sendContactEmail(payload);
      if (result.success) {
        setIsSubmitted(true);
        toast.success("Demande envoyée ! Nous vous répondons sous 2h.", {
          position: "bottom-right",
        });
        setTimeout(() => {
          setIsSubmitted(false);
          setDate(undefined);
          setFormData({ serviceType: "", people: "", fullName: "", contact: "" });
        }, 4000);
      } else {
        throw new Error(result.error);
      }
    } catch {
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.", {
        position: "bottom-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="DemanderUnDevis" className="relative py-20 px-6 md:px-16 overflow-hidden text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SplitText
            text="Obtenez Votre Devis Gratuit en 2 Minutes"
            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight"
            delay={40}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />
          <p
            className="mt-5 text-gray-400 max-w-xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            Sans engagement · Réponse garantie sous 2 heures ouvrées
          </p>
          <div className="w-16 h-[2px] bg-linear-to-r from-[#5226ff] to-[#e060cb] mx-auto mt-6" />
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-white/10 bg-[#1a1a2e]/80 backdrop-blur-md p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: service type + passengers */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Type de prestation <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`${selectClass} ${errors.serviceType ? errorInputClass : ""}`}
                  >
                    <option value="">— Choisir —</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b464ff] pointer-events-none" />
                </div>
                <ErrorText error={errors.serviceType} />
              </div>

              <div>
                <label className={labelClass}>
                  Nombre de passagers <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={handleInputChange}
                  min="1"
                  placeholder="ex : 25 personnes"
                  className={`${inputClass} ${errors.people ? errorInputClass : ""}`}
                />
                <ErrorText error={errors.people} />
              </div>
            </div>

            {/* Row 2: date + name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Date souhaitée</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      data-empty={!date}
                      className={`${inputClass} w-full justify-between h-[50px] text-left font-normal data-[empty=true]:text-white/30 hover:bg-black/40 hover:text-white`}
                    >
                      {date ? format(date, "PPP") : <span>JJ/MM/AAAA</span>}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className={`${inputClass} [color-scheme:dark]`}
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
                <label className={labelClass}>
                  Votre nom & prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Prénom Nom"
                  className={`${inputClass} ${errors.fullName ? errorInputClass : ""}`}
                />
                <ErrorText error={errors.fullName} />
              </div>
            </div>

            {/* Row 3: contact */}
            <div>
              <label className={labelClass}>
                Téléphone ou Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Pour vous rappeler sous 2h"
                className={`${inputClass} ${errors.contact ? errorInputClass : ""}`}
              />
              <ErrorText error={errors.contact} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="relative inline-flex h-14 active:scale-95 transition overflow-hidden cursor-pointer rounded-lg p-[1px] w-full focus:outline-none disabled:opacity-70"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-bold text-white backdrop-blur-3xl gap-2 tracking-wider uppercase">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Demande envoyée !
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Recevoir mon devis gratuit
                  </>
                )}
              </span>
            </button>

            {/* Privacy note */}
            <p className="flex items-center justify-center gap-1.5 text-xs text-white/30 text-center">
              <Lock className="w-3 h-3" />
              Vos données sont confidentielles. Aucun démarchage. Aucun spam.
            </p>
          </form>

          {/* Reassurance strip */}
          <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {reassurances.map(({ Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/50">
                <Icon className="w-4 h-4 text-[#5226ff]" strokeWidth={2} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        option {
          background: #0a0a1a;
          color: white;
        }
      `}</style>
    </section>
  );
}

export default HomeQuoteForm;
