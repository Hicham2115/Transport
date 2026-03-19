import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-14 mt-16 items-start">
      {/* LEFT SIDE */}
      <div className="flex-1 text-start">
        <h1 className="font-black text-4xl">Foire Aux Questions</h1>

        <p className="text-sm mt-4 text-gray-300 max-w-md">
          SO.TRA.CARS provides bus, minibus, and coach rental services with
          professional drivers across France and Europe. The service helps
          individuals and groups easily organize transport for events, trips,
          and business needs, offering quick quotes, reliable partners, and
          tailored travel solutions.
        </p>

        <div className="flex gap-4 mt-6">
          <button
            className="px-4 py-2 rounded-md text-white font-semibold cursor-pointer
            bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap
            shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            Demander Un Devis
          </button>

          <button
            className="px-4 py-2 rounded-md text-white font-semibold cursor-pointer
            bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap
            shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 w-full mb-10">
        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="w-full"
        >
          <AccordionItem value="quote-time">
            <AccordionTrigger>
              Combien de temps faut-il pour recevoir un devis ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Nous nous engageons à répondre à toutes les demandes de devis dans
              un délai de moins de 24 heures. Notre équipe analyse votre besoin
              afin de vous proposer une solution adaptée rapidement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="coverage">
            <AccordionTrigger>
              Dans quelles zones intervenez-vous ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              SOTRACARS France intervient partout en France ainsi que dans
              plusieurs destinations en Europe grâce à son large réseau de
              partenaires transporteurs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vehicle-types">
            <AccordionTrigger>
              Quels types de véhicules proposez-vous ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Nous proposons une large gamme de véhicules incluant des minibus,
              autocars standards, autocars grand tourisme ainsi que des
              véhicules VIP adaptés à différents types de déplacements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="capacity">
            <AccordionTrigger>
              Quelle est la capacité des bus disponibles ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              La capacité varie selon le type de véhicule, allant généralement
              de petits minibus pour quelques passagers à des autocars pouvant
              transporter de grands groupes de plus de 50 personnes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="custom-service">
            <AccordionTrigger>
              Les services sont-ils personnalisables ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Oui, chaque demande est étudiée de manière personnalisée afin de
              proposer un service adapté à vos besoins spécifiques, que ce soit
              pour un événement, un voyage ou un transport régulier.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
