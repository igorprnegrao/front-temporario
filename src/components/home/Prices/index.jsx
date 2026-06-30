import { useState } from "react";
import styles from "./prices.module.css";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Bronze",
    price: "R$ 149",
    features: [
      "Até 3 assessores",
      "30.000 contatos",
      "Agenda Parlamentar",
      "Gestão de Eleitores",
      "Relatórios básicos",
      "Suporte por email",
    ],
    link: "./form-cadastro/form-cadastro.html",
    button: "Começar",
    featured: false,
  },
  {
    name: "Prata",
    price: "R$ 299",
    features: [
      "Até 12 assessores",
      "100.000 contatos",
      "Todas funcionalidades Bronze",
      "CRM para Atendimentos",
      "Relatórios avançados",
      "Controle de Protocolo",
      "Notificações de Agenda",
      "Suporte prioritário",
    ],
    link: "./form-cadastro/form-cadastro.html",
    button: "Começar",
    featured: false,
  },
  {
    name: "Ouro",
    price: "R$ 549",
    features: [
      "Até 20 assessores",
      "1.000.000 contatos",
      "Todas funcionalidades Prata",
      "Dashboard com Dados TSE",
      "Gestão de Visitas e Fiscalizações",
      "Relatórios Base Eleitoral",
      "Integrações avançadas",
      "Suporte 24/7",
    ],
    link: "./form-cadastro/form-cadastro.html",
    button: "Começar",
    featured: true,
    badge: "Mais Popular",
  },
  {
    name: "Platina",
    price: "R$ 899",
    features: [
      "Até 30 assessores",
      "2.000.000 contatos",
      "Todas funcionalidades Ouro",
      "Assessoria personalizada",
      "Integrações customizadas",
      "Treinamento da equipe",
      "API completa",
      "Gerente de conta dedicado",
      "Suporte VIP 24/7",
    ],
    link: "./form-cadastro/form-cadastro.html",
    button: "Contatar",
    featured: false,
  },
];

export default function Prices() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleFeatures = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <section id="pricing" className={styles.pricing}>
        <div className={styles.pricesContent}>
          <h2 className={styles.priceTitle}>Planos e Preços</h2>
          <div className={styles.pricingGrid}>
            {plans.map((plan, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`${styles.pricingCard}${plan.featured ? ` ${styles.featured}` : ""}`}
                  key={plan.name}
                >
                  {plan.badge && <div className={styles.badge}>{plan.badge}</div>}
                  <h3>{plan.name}</h3>
                  <p className={styles.price}>
                    {plan.price}
                    <span>/mês</span>
                  </p>

                  <button
                    type="button"
                    className={styles.featuresToggle}
                    onClick={() => handleToggleFeatures(index)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "Ocultar recursos −" : "Ver recursos +"}
                  </button>

                  <ul
                    className={`${styles.pricingFeatures} ${isOpen ? styles.pricingFeaturesOpen : ""}`}
                  >
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link to="/cadastro" className={styles.priceButton}>
                    {plan.button}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
