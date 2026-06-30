import styles from "./lgpd.module.css";
import { Link } from "react-router-dom";

export default function Lgpd() {
  return (
    <>
      <div className={styles.lgpdContainer}>
        <Link to="/" className={styles.backButton}>
          ← Voltar para o início
        </Link>

        <header className={styles.lgpdHeader}>
          <h1 className={styles.lgpdTitle}>
            Comunicado Técnico: Conformidade com a LGPD na Gestão de Dados
            Políticos
          </h1>
          <p className={styles.lgpdSubtitle}>Prezado(a) Cliente,</p>
        </header>

        <section className={styles.lgpdIntro}>
          <p>
            No cenário político atual, a segurança da informação e a privacidade
            dos dados de eleitores, filiados e apoiadores são pilares
            fundamentais para a integridade de qualquer campanha ou mandato. Por
            sermos seu parceiro tecnológico na gestão política, apresentamos as
            diretrizes técnicas e organizacionais adotadas por nossa plataforma
            para garantir a conformidade com a Lei Geral de Proteção de Dados
            (Lei nº 13.709/2018 - LGPD).
          </p>
          <p>
            O ecossistema da aplicação foi desenhado sob o princípio de Privacy
            by Design (Privacidade desde a Concepção), assegurando que a
            proteção de dados não seja um módulo adicional, mas parte da
            arquitetura central do sistema.
          </p>
        </section>

        <section className={styles.lgpdSection}>
          <h2>1. Pilares técnicos de segurança e proteção de dados</h2>
          <p>
            Para mitigar riscos de acessos não autorizados, vazamentos ou
            incidentes de segurança, implementamos os seguintes mecanismos de
            controle:
          </p>
          <ul>
            <li>
              <strong>Criptografia de dados:</strong> Dados pessoais sensíveis
              são protegidos em repouso com AES-256 e em trânsito com HTTPS/TLS
              1.3.
            </li>
            <li>
              <strong>Controle de acesso baseado em funções (RBAC):</strong> O
              administrador define permissões granulares para visualizar, editar
              ou exportar dados, respeitando o princípio da necessidade.
            </li>
            <li>
              <strong>Trilhas de auditoria (logs):</strong> Operações críticas
              são registradas para rastrear quem acessou qual dado e quando.
            </li>
            <li>
              <strong>Infraestrutura de nuvem confiável:</strong> Hospedagem em
              provedores com certificações como ISO 27001 e SOC 2 Type II, com
              firewalls, IDS/IPS e backups criptografados.
            </li>
          </ul>
        </section>

        <section className={styles.lgpdSection}>
          <h2>2. Ciclo de vida do dado e direitos dos titulares</h2>
          <p>
            A plataforma oferece recursos para apoiar o cumprimento das
            obrigações legais junto ao titular dos dados:
          </p>
          <ul>
            <li>
              <strong>Gestão de consentimento e base legal:</strong> Registro da
              base legal aplicável ao tratamento, como consentimento, legítimo
              interesse ou execução de contratos/serviços públicos.
            </li>
            <li>
              <strong>Direito de acesso e retificação:</strong> Consulta e
              atualização ágil de dados desatualizados.
            </li>
            <li>
              <strong>Direito à eliminação:</strong> Exclusão de registros do
              titular com tratamento de eliminação lógica e física conforme os
              prazos legais.
            </li>
            <li>
              <strong>Portabilidade:</strong> Exportação em formatos
              estruturados e interoperáveis, como JSON e CSV.
            </li>
          </ul>
        </section>

        <section className={styles.lgpdSection}>
          <h2>3. Responsabilidade compartilhada</h2>
          <blockquote className={styles.highlightBox}>
            <p>
              <strong>Sua organização político-partidária:</strong> atua como
              Controladora, responsável pela coleta legítima, pela definição da
              finalidade e pela obtenção do consentimento quando aplicável.
            </p>
            <p>
              <strong>Nossa aplicação/empresa:</strong> atua como Operadora,
              realizando o tratamento conforme instruções do Controlador e
              garantindo ambiente tecnológico seguro para armazenamento e
              processamento.
            </p>
          </blockquote>
        </section>

        <section className={styles.lgpdSection}>
          <h2>4. Compromisso com a melhoria contínua</h2>
          <p>
            Realizamos auditorias periódicas, testes de vulnerabilidade
            (pentests) e atualizações de software para responder preventivamente
            a novas ameaças cibernéticas.
          </p>
          <p>
            Também podemos disponibilizar um Relatório de Impacto à Proteção de
            Dados Pessoais (RIPD) simplificado e formalizar termos aditivos de
            confidencialidade (DPA), conforme necessidade jurídica.
          </p>
        </section>

        <footer className={styles.signatureBlock}>
          <p>
            A segurança dos seus dados e a legitimidade da sua gestão política
            são nossos compromissos absolutos.
          </p>
          <p>Atenciosamente,</p>
          <p>
            <strong>[Nome da Sua Empresa/Plataforma]</strong>
          </p>
          <p>Equipe de Engenharia de Segurança e Privacidade</p>
          <p>[Link para a Política de Privacidade Completa]</p>
          <p>[Contato do Encarregado de Dados / DPO, se houver]</p>
        </footer>
      </div>
    </>
  );
}
