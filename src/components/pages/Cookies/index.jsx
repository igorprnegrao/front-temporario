import styles from "./cookies.module.css";
import { Link } from "react-router-dom";

export default function Cookies() {
    return (
        <>
            <div className={styles.cookiesContainer}>
                <Link to="/" className={styles.backButton}>
                    ← Voltar para o início
                </Link>

                <header className={styles.cookiesHeader}>
                    <h1 className={styles.cookiesTitle}>
                        Diretrizes Técnicas: Uso de Cookies e Tecnologias de Rastreamento
                    </h1>
                    <p className={styles.cookiesSubtitle}>
                        Última atualização: [Inserir Data]
                    </p>
                </header>

                <section className={styles.cookiesIntro}>
                    <p>
                        Para garantir a segurança, a performance e a correta usabilidade da
                        nossa plataforma de gestão política, utilizamos cookies e
                        tecnologias semelhantes. Este documento explica, de forma técnica e
                        transparente, o que são essas tecnologias, quais tipos de cookies
                        utilizamos e como você pode gerenciá-los.
                    </p>
                </section>

                <section className={styles.cookiesSection}>
                    <h2>1. O que são cookies?</h2>
                    <p>
                        Cookies são pequenos arquivos de texto baseados em chaves-valores,
                        enviados pelo servidor e armazenados no navegador do usuário (como
                        Google Chrome, Mozilla Firefox, Safari e outros) durante o acesso
                        à plataforma. Eles permitem que o sistema lembre informações da
                        sessão para otimizar a navegação e reforçar a segurança do ambiente
                        autenticado.
                    </p>
                </section>

                <section className={styles.cookiesSection}>
                    <h2>2. Por que nossa aplicação política utiliza cookies?</h2>
                    <p>
                        Em nosso sistema, os cookies não são usados para publicidade
                        invasiva nem para venda de dados a terceiros. O uso é estritamente
                        técnico e operacional, conforme as categorias abaixo.
                    </p>

                    <h3>A. Cookies estritamente necessários (essenciais)</h3>
                    <p>
                        Esses cookies são indispensáveis para o funcionamento da plataforma
                        e não podem ser desativados em nossos sistemas.
                    </p>
                    <ul>
                        <li>
                            <strong>Autenticação e sessão:</strong> Mantêm assessor,
                            coordenador ou candidato conectado com segurança durante a
                            navegação em páginas de dados e relatórios.
                        </li>
                        <li>
                            <strong>Segurança (tokens CSRF):</strong> Protegem contra ataques
                            do tipo Cross-Site Request Forgery, garantindo a legitimidade das
                            requisições enviadas ao servidor.
                        </li>
                        <li>
                            <strong>Balanceamento de carga:</strong> Distribuem o tráfego para
                            manter a aplicação estável e ágil em períodos de uso intenso.
                        </li>
                    </ul>

                    <h3>B. Cookies de desempenho e funcionalidade</h3>
                    <p>
                        Permitem que a plataforma memorize escolhas do usuário para
                        personalizar a interface.
                    </p>
                    <ul>
                        <li>
                            <strong>Preferências de interface:</strong> Armazenam idioma,
                            tamanho de fonte e uso de modo escuro, quando disponível.
                        </li>
                        <li>
                            <strong>Filtros de busca:</strong> Preservam filtros aplicados em
                            relatórios e listagens para evitar reconfigurações repetitivas.
                        </li>
                    </ul>

                    <h3>C. Cookies de análise (analytics)</h3>
                    <p>
                        São utilizados de forma agregada e anonimizada para entender a
                        interação com o sistema e permitir melhorias técnicas contínuas.
                    </p>
                    <p className={styles.note}>
                        Nota: ferramentas de análise são configuradas com mascaramento de
                        IP, evitando associação direta entre comportamento técnico e
                        identidade do operador.
                    </p>
                </section>

                <section className={styles.cookiesSection}>
                    <h2>4. Retenção e controle de cookies</h2>
                    <p>
                        Os cookies podem ser de sessão (expiram quando o navegador é
                        fechado) ou persistentes (permanecem por prazo definido ou até
                        exclusão manual).
                    </p>
                    <p>
                        Como controlador dos dados gerados no navegador, você pode ajustar o
                        browser para bloquear ou alertar sobre cookies. No entanto, o
                        bloqueio de cookies estritamente necessários impedirá o
                        funcionamento da aplicação, incluindo login e uso das ferramentas de
                        gestão política.
                    </p>
                    <p>
                        Para configurar cookies, consulte a documentação oficial do seu
                        navegador (Google Chrome, Firefox, Microsoft Edge, Safari, entre
                        outros).
                    </p>
                </section>

                <section className={styles.cookiesSection}>
                    <h2>5. Atualizações desta política</h2>
                    <p>
                        Esta diretriz pode ser atualizada periodicamente para refletir
                        melhorias técnicas e mudanças regulatórias. Alterações materiais
                        serão comunicadas aos administradores da plataforma no próximo
                        login.
                    </p>
                    <p>
                        Para dúvidas sobre arquitetura de segurança ou privacidade,
                        contate o Encarregado de Dados (DPO):
                        <strong> [inserir.email@suaempresa.com.br]</strong>
                    </p>
                </section>
            </div>
        </>
    );
}