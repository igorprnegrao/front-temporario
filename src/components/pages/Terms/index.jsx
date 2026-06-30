import styles from "./terms.module.css";
import { Link } from "react-router-dom";


export default function Terms() {
  return (
    <>
      <div className={styles.termsContainer}>
        <Link to="/" className={styles.backButton}>
          ← Voltar para o início
        </Link>

        <div className={styles.termsHeader}>
          <h1>Termos de Uso e Condições</h1>
          <p>Última atualização: 8 de fevereiro de 2026</p>
        </div>

        <div className={styles.termsIntro}>
          <p>
            <strong>DEEPROCKET DESENVOLVIMENTO DE SOFTWARE</strong>, pessoa
            jurídica de direito privado com sede na Estrada Búzios Cabo Frio,
            403 - Baia Formosa - Armação dos Búzios/RJ, inscrita no CNPJ sob o
            nº. 24.590.109/0001-94, aqui neste ato apresentado como como{" "}
            <strong>CONTRATADO</strong>, do outro lado de acordo com dados
            informados no cadastro, de agora em diante denominado{" "}
            <strong>CONTRATANTE</strong>. Este Contrato define as condições
            gerais aplicáveis e regras de uso oferecidos. Ao fazer a adesão você
            estará concordando com todas as regras aqui estabelecidas. Leia-o
            atentamente.
          </p>
        </div>

        <div className={styles.termsContent}>
          <h2>1. Definições</h2>
          <ol>
            <li>
              <strong>CONTRATANTE ou você:</strong> Pessoa Física ou Jurídica de
              direito privado
            </li>
            <li>
              <strong>Usuário:</strong> Toda pessoa que fizer uso do aplicativo;
            </li>
            <li>
              <strong>SaaS:</strong> Software as a Service (Software como
              Serviço), que consiste em solução de tecnologia oferecida como
              solução fechada da forma disponibilizada, podendo ser prestada e
              alterada conforme a conveniência, recursos e oportunidade do
              CONTRATADA, sem que consista em violação contratual ou perda de
              seu objeto.
            </li>
            <li>
              <strong>CONTRATADA:</strong> Sistema para gestão gabinetes
              parlamentares disponibilizada via Software, Aplicativo ou Website,
              por meio do modelo SaaS.
            </li>
          </ol>

          <h2>2. Termos de Uso</h2>
          <ol>
            <li>
              Ao acessar o sistema de Gestão de Gabinetes no site:
              www.gestaopoliticafacil.com.br ou por meio do aplicativo você
              concorda com esses termos de uso. O Serviço é de propriedade ou
              controlado pelo CONTRATADA. Esses Termos de Uso afetam seus
              direitos e obrigações legais. Se você não concorda com todos os
              termos aqui expostos, não acesse ou use o Serviço.
            </li>
            <li>
              Em alguns momentos, podemos oferecer um recurso especial que
              possui seus próprios termos e condições que se aplicam além
              destes. Nesses casos, os termos específicos do recurso especial
              prevalecem caso haja um conflito.
            </li>
            <li>
              O CONTRATADA poderá desenvolver novas ferramentas e
              funcionalidades para o sistema Gestão Política Fácil, as quais têm
              a possibilidade de serem gratuitas ou onerosas. Na hipótese de
              serem onerosas, seu valor não está ou será incluído no valor do
              presente Contrato, cabendo a você contratá-las e pagá-las
              separadamente caso decida utilizá-las.
            </li>
            <li>
              Estes termos podem ser modificados ou complementados a qualquer
              momento desde que notificado previamente através dos seguintes
              meios: através do website ou aplicativo no momento ou depois de
              você acessar sua conta de usuário; através do seu endereço de
              e-mail, fornecido por você no momento que você criou sua conta de
              usuário. Caso seu e-mail esteja desatualizado isso não isentará
              suas obrigações de concordar com o presente termo. É sua obrigação
              verificar estes termos regularmente neste website.
            </li>
          </ol>

          <h2>3. Termos básicos para utilização do serviço</h2>
          <ol>
            <li>
              Podem aderir à utilização do CONTRATADA: pessoa jurídica ou pessoa
              física interessada na sua utilização, que tenha preenchido o
              cadastro, mediante fornecimento de Nome, E-mail, Telefone e senha.
            </li>
            <li>
              O usuário administrador é a pessoa que terá o papel e poderes de
              interceder junto ao CONTRATADA em atos praticados no Sistema
              CONTRATADA por demais usuários vinculados a você, bem como
              realizar a contratação e cancelamento produtos e planos.
            </li>
            <li>
              Os recursos disponíveis no CONTRATADA à época da adesão ao
              presente, podem ser contratados em conjunto ou separadamente.
            </li>
            <li>
              Os valores referentes a utilização de cada recurso constarão
              especificado no momento da contratação.
            </li>
            <li>
              Você não terá acesso aos dados utilizados por outras empresas
              CONTRATANTES da CONTRATADA, tampouco outros CONTRATANTES acessarão
              seus dados, uma vez que os sistemas de gestão não possuem vínculos
              entre si, sendo cada uma delas objeto de trabalhos específicos a
              cada CONTRATANTE.
            </li>
            <li>
              Você não pode interferir ou interromper o Serviço, servidores ou
              redes conectadas ao Serviço, inclusive por meio de transmissão de
              worms, vírus, spyware, malware ou qualquer outro código de
              natureza destrutiva ou disruptiva. Você não pode inserir conteúdo
              ou código ou, então, alterar ou interferir na forma como qualquer
              página do site é renderizada ou exibida no navegador ou
              dispositivo de um usuário.
            </li>
            <li>
              Você é responsável por qualquer atividade que ocorra através de
              sua conta e concorda em não vender, transferir, licenciar ou ceder
              sua conta, seus dados, seu nome de usuário e senha ou qualquer
              direito da conta. Você também declara que todas as informações
              fornecidas no momento do cadastro e em qualquer outro são
              verdadeiras, precisas, atuais e completas e você concorda em
              atualizá-las quando houver necessidade.
            </li>
            <li>
              Você será responsável por todo conteúdo inserido no sistema por
              prepostos e/ou seus colaboradores no Sistema CONTRATADA, sendo
              passível de responsabilização civil e criminal em caso de violação
              de direitos de outros.
            </li>
            <li>
              Você não irá solicitar, coletar ou usar as credenciais de outros
              usuários.
            </li>
            <li>
              Você é responsável por manter seus dados e sua senha em sigilo e
              protegidos.
            </li>
            <li>
              Você não pode publicar nenhum tipo de conteúdo por meio do Serviço
              que sugiram violência, nudez, nudez parcial, discriminação, atos
              ilegais, transgressões, ódio, pornografia ou sexo, também não pode
              difamar, perseguir, praticar bullying, praticar abuso, assediar,
              ameaçar, intimidar ou fingir ser pessoas ou entidades.
            </li>
            <li>
              Você não pode usar o Serviço para nenhuma finalidade ilegal ou não
              autorizada. Você concorda em obedecer à todas as leis, regras e
              normas aplicáveis ao seu uso do Serviço e dos seus Recursos
              disponibilizados pelo site, incluindo, entre outras coisas, leis
              de direitos autorais.
            </li>
            <li>
              Você é o único responsável por sua conduta e por qualquer dado,
              texto, arquivos, informação, nomes de usuário, imagens, gráficos,
              fotos, perfis, clipes de áudio e vídeo, sons, trabalhos musicais,
              trabalhos de autoria, aplicativos, links e outro conteúdo ou
              materiais que sejam enviados, publicados ou exibidos por você, ao
              utilizar o Serviço.
            </li>
            <li>
              Você não pode tentar impedir outro usuário de usar ou aproveitar o
              Serviço e você não pode incentivar ou facilitar violações desses
              Termos de Uso ou quaisquer outros termos estipulados pela
              CONTRATADA no momento da contratação.
            </li>
            <li>
              Ao utilizar A CONTRATADA, você declara a observância de regras
              definidas por Conselhos Profissionais, Sindicatos e/ou Entidades
              de Classe que porventura você esteja vinculado.
            </li>
            <li>
              Não obstante a vacatio legis da lei nº 13.709/2018, qualquer
              operação de tratamento de dados pessoais realizadas pelas partes,
              dentro do CONTRATADA, deverá observar as disposições da Lei Geral
              de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018.
            </li>
            <li>
              A violação desses Termos de Uso pode, a exclusivo critério da
              CONTRATADA de seus idealizadores, resultar no encerramento da sua
              conta, sem prejuízo das sanções cíveis e criminais cabíveis. Você
              entende e concorda que a CONTRATADA não pode e não será
              responsável pelo conteúdo publicado no Serviço e você usa o
              Serviço por sua conta e risco. Se você violar o texto ou a
              intenção desses Termos de Uso, ou se, de outra forma, gerar risco
              ou possível exposição legal para a CONTRATADA, nós podemos
              interromper o fornecimento do Serviço, na sua totalidade ou
              parcialmente, para você.
            </li>
          </ol>

          <h2>4. Condições gerais</h2>
          <ol>
            <li>
              Nós nos reservamos o direito de modificar ou encerrar o Serviço ou
              o seu acesso ao Serviço quando não forem observados os termos de
              uso, ou quando houver o encerramento do contrato pelo CONTRATANTE,
              ou ainda, quando for solicitado pelo CONTRATANTE, sem necessidade
              de aviso prévio.
            </li>
            <li>
              Após o encerramento, todos os direitos concedidos a você nesses
              Termos de Uso cessarão imediatamente.
            </li>
            <li>
              Nós nos reservamos o direito, a nosso exclusivo critério, de
              alterar esses Termos de Uso de tempos em tempos, caso ocorra
              necessidade. Você deve analisar esses Termos de Uso e quaisquer
              atualizações antes de usar o Serviço. Os Termos Atualizados
              entrarão em vigor no momento da publicação, ou em data posterior
              conforme pode ter sido especificado no momento de sua elaboração,
              e se aplicarão ao seu uso do Serviço deste momento em diante.
              Esses Termos de Uso regerão todas as disputas que surjam após a
              data de efetivação dos Termos Atualizados. Sempre que houver
              atualização deste termo de uso, será disponibilizado quando do
              acesso do usuário e/ou para o e-mail informando no momento do
              cadastro.
            </li>
            <li>
              Você é o único responsável por sua interação com outros usuários
              do Serviço, seja online ou offline. Você concorda que a CONTRATADA
              não é responsável ou que não seja responsabilizado pela conduta de
              nenhum usuário.
            </li>
            <li>
              Você concorda que você é responsável por todas as cobranças de
              dados a que você ficar sujeito através do uso do Serviço.
            </li>
            <li>
              Ao acessar ou usar o serviço, você declara e garante que suas
              atividades são lícitas em todas as jurisdições de onde você acessa
              ou usa o serviço.
            </li>
          </ol>

          <h2>5. Direitos</h2>
          <ol>
            <li>
              A CONTRATADA não reivindica a propriedade de nenhum Conteúdo que
              você publica no Serviço ou através dele.
            </li>
            <li>
              Você declara e garante que:
              <p>
                (i) o Conteúdo publicado por você no Serviço ou através dele é
                de sua propriedade ou, então, você possui o direito de conceder
                os direitos e licenças apresentados nesses Termos de Uso;
              </p>
              <p>
                (ii) a publicação e uso do seu Conteúdo no Serviço ou através
                dele não viola, utiliza incorretamente ou transgride os direitos
                de qualquer terceiro, incluindo, sem limitação, direitos de
                privacidade, direitos de publicidade, direitos autorais, marca
                comercial e/ou outros direitos de propriedade intelectual;
              </p>
            </li>
            <li>
              O Serviço contém conteúdo de propriedade da CONTRATADA. O Conteúdo
              é protegido por direitos autorais, marca comercial, patente,
              segredo comercial e outras leis.
            </li>
            <li>
              O nome e o logotipo da CONTRATADA são marcas registradas e não
              devem ser copiados, imitados ou usados, em sua totalidade ou
              parcialmente, sem a autorização prévia por escrito do CONTRATADA.
            </li>
            <li>
              Embora o objetivo do CONTRATADA seja de que o Serviço esteja o
              máximo possível disponível, pode haver ocasiões em que o Serviço
              pode ser interrompido, seja para manutenções agendadas ou
              atualizações, para reparos de emergência, ou devido a falha dos
              links de telecomunicação ou equipamentos. Além disso, a CONTRATADA
              se reserva o direito de remover qualquer Conteúdo do Serviço por
              qualquer motivo, sem aviso prévio. Sendo assim, não terá nenhuma
              obrigação em relação a você em função de qualquer modificação,
              suspensão ou interrupção dos Serviços, ou a perda de qualquer
              Conteúdo. Você também reconhece que a Internet pode estar sujeita
              a falhas de segurança e que o envio do Conteúdo ou outras
              informações pode não ser seguro.
            </li>
            <li>
              As suas solicitações e/ou sugestões para melhoria nos softwares
              são meramente informativas, não constituindo obrigatoriedade de
              implementação e/ou desenvolvimento por parte do CONTRATADA. Sendo
              que esta poderá implementá-las em novas versões caso as considere
              viáveis, sem que isto lhe gere qualquer direito de remuneração.
            </li>
          </ol>

          <h2>6. Limitação de responsabilidade e indenizações</h2>
          <ol>
            <li>
              Em nenhuma circunstância o CONTRATADA terá qualquer obrigação para
              com você por qualquer perda ou dano de qualquer tipo (incluindo,
              entre outros, por qualquer perda ou dano direto, indireto,
              econômico, exemplar, especial, punitivo, acidental ou
              consequencial) que esteja direta ou indiretamente relacionado a:
              <p>(a) o serviço;</p>
              <p>(b) o conteúdo dos recursos;</p>
              <p>(c) o conteúdo do usuário;</p>
              <p>
                (d) seu uso, impossibilidade de uso, ou o desempenho do serviço;
              </p>
              <p>
                (e) qualquer ação tomada relativa a uma investigação pelas
                partes ou autoridades competentes em relação ao seu uso do
                serviço ou ao uso do serviço por outra parte;
              </p>
              <p>
                (f) qualquer ação tomada relativa a proprietários de direitos
                autorais ou outros direitos de propriedade intelectual;
              </p>
              <p>(g) qualquer erro ou omissão na operação do serviço; ou</p>
              <p>
                (h) qualquer dano ao computador, dispositivo móvel ou outro
                equipamento de qualquer usuário ou tecnologia incluindo, entre
                outros, danos em função de falhas de segurança ou de qualquer
                tipo de vírus, bugs, falsificação, fraude, erro, omissão,
                interrupção, defeito, atraso na operação ou transmissão, falha
                na linha ou rede de computadores ou qualquer outro tipo de
                problema técnico ou funcionamento incorreto, incluindo, entre
                outros, danos por perda de lucros, perda de credibilidade, perda
                de dados, interrupção do trabalho, precisão de resultados, ou
                falha ou funcionamento incorreto de computador, mesmo se
                antevistos ou mesmo se as partes tiverem sido informadas ou
                devessem ter conhecimento sobre a possibilidade de tais danos,
                seja em uma ação contratual, negligência, responsabilidade
                objetiva ou delito (incluindo, entre outras coisas, se causado
                total ou parcialmente por negligência, força maior, falha de
                telecomunicação, ou roubo ou destruição do serviço).
              </p>
            </li>
            <li>
              Você concorda que, caso você sofra qualquer dano, perda ou
              prejuízo que seja resultante de ações ou omissões da CONTRATADA,
              os danos, caso existam, causados a você não são irreparáveis ou
              suficientes para dar a você o direito a uma liminar impedindo
              qualquer exploração de qualquer site, serviço, propriedade,
              produto, recursos ou outro conteúdo de propriedade de ou
              controlado pela CONTRATADA, e você não terá nenhum direito de
              impor ou impedir o desenvolvimento, produção, distribuição,
              propaganda, exibição ou exploração de qualquer site da web,
              propriedade, produto, serviço ou outro conteúdo de propriedade ou
              controlado pela CONTRATADA.
            </li>
            <li>
              Você concorda que, apesar de todos esforços de segurança que a
              CONTRATADA se compromete em manter, não é tecnicamente possível
              garantir a impenetrabilidade dos dados. Infelizmente nenhuma
              transmissão pela internet pode ser garantida em termos de
              segurança. Assim, você tem claro conhecimento que é tecnicamente
              possível que terceiros não autorizados acessem, copiem e deletem
              arquivos sensíveis. Uma vez que essa proteção também depende da
              sua conduta e política de segurança interna, não é possível
              garantir a segurança das informações que você transmite para e dos
              servidores da CONTRATADA, você concorda em usar os serviços aqui
              contemplados de acordo com os seus próprios riscos.
            </li>
            <li>
              Este contrato, sob nenhuma hipótese, gera algum tipo de Sociedade,
              Associação, Agência, Consórcio, Mandato de Representação ou
              Responsabilidade Solidária entre as Partes.
            </li>
            <li>
              Adicionalmente, não se estabelece, por força deste Contrato,
              qualquer vínculo empregatício ou responsabilidade entre as partes,
              sendo cada qual responsável por quaisquer encargos, em relação aos
              empregados, decorrentes das leis em vigência, sejam trabalhistas,
              previdenciárias, securitários ou quaisquer outros que vierem a ser
              criados pelos órgãos públicos.
            </li>
          </ol>

          <h2>7. Pagamentos</h2>
          <ol>
            <li>
              Todos os direitos e privilégios abrangidos por este termo obrigam
              você ao pagamento de uma mensalidade. A CONTRATADA poderá conceder
              períodos de isenção para novos CONTRATANTES, a qual estipulará os
              requisitos e os apresentará em seu site.
            </li>
            <li>
              O valor dos Serviços contratados será aquele apresentado e
              acordado por você no momento da contratação. A CONTRATADA e suas
              Revendas oferecem múltiplos planos de serviços com cobrança
              mensal, semestral ou anual de acordo com as funcionalidades e
              número de usuários e cabe a você selecionar o pacote mais adequado
              para sua empresa. Os pagamentos serão realizados antecipadamente
              (pré-pago) e não são estornáveis, ou seja, não haverá estornos
              parciais pelo tempo não utilizado no caso de cancelamento, assim
              se você cancelar o plano antes do fim você ainda continuará
              responsável pelo pagamento do período de assinatura remanescente.
            </li>
            <li>
              No caso de necessidade de alteração das funcionalidades e/ou
              número máximo de usuários você deverá alterar o seu plano
              contratado, pagando pelo novo valor. No caso de já ter pago um
              valor correspondente a um plano inferior apenas deverá ser
              complementado o valor. Os pagamentos, independentemente das
              funcionalidades e do número de usuários são sempre mensais,
              trimestrais ou anuais, de acordo com o plano contratado.
            </li>
            <li>
              Na hipótese de haver migração para um plano inferior, será abatido
              o crédito não utilizado até que esse seja inteiramente consumido.
              A não utilização da Plataforma ou de qualquer uma de suas
              funcionalidades não interfere nos valores contratados e devidos
              pelos Usuários.
            </li>
            <li>
              A CONTRATADA poderá ofertar pacotes que contemplem descontos para
              pagamentos antecipado de mensalidades. A oferta desse desconto em
              determinado período não obriga o CONTRATADA a sempre
              disponibilizar esse benefício.
            </li>
            <li>
              Alguns treinamentos poderão ser oferecidos de forma gratuita ou
              mediante pagamento. Essa informação será informada e dependerá da
              sua concordância no ato de contratação. A CONTRATADA não se
              compromete em fornecer treinamentos e capacitações de forma
              gratuita.
            </li>
            <li>
              A CONTRATADA pode, a seu critério, disponibilizar códigos de
              desconto promocionais que serão válidos por períodos definidos.
              Contudo cabe a você informar esse código no momento da escolha do
              plano de serviço. Se você não informar o código compreende-se que
              desiste dessa vantagem, não cabendo qualquer reclamação posterior.
            </li>
            <li>
              Em caso de inadimplência por qualquer motivo o CONTRATADA se
              reserva no direito de interromper o acesso dos usuários vinculados
              a sua conta aos serviços, podendo excluir permanentemente todos os
              dados e informações dos Usuários.
            </li>
            <li>
              Os planos contratados serão renovados automaticamente, pelo mesmo
              período, caso não haja expressa manifestação em contrário por
              parte do Usuário. Havendo renovação automática, após um período de
              12 (doze) meses da data da primeira contratação, os preços poderão
              sofrer atualização monetária pela variação positiva acumulada nos
              últimos meses do IGP-M + 5%, divulgado pela Fundação Getúlio
              Vargas, como índice de correção monetária. Caso o IGP-M seja
              extinto ou deixe de refletir a real desvalorização da moeda, será
              aplicado o índice oficial que venha a substituí-lo ou, se
              inexistente, outro índice de variação mensal e que mais
              eficientemente elida os efeitos inflacionários da moeda corrente
              nacional.
            </li>
          </ol>

          <h2>8. Privacidade das informações fornecidas por você</h2>
          <ol>
            <li>
              AS PARTES comprometem-se a atuar no presente Contrato em
              conformidade com a legislação vigente sobre Proteção de Dados
              Pessoais e as determinações de órgãos reguladores sobre a matéria,
              em especial, a Lei nº 13.709/2018 - Lei Geral de Proteção de Dados
              Pessoais (LGPD).
            </li>
            <li>
              Você caracteriza-se como CONTROLADOR, sendo de sua competência as
              decisões que envolvam o tratamento de dados pessoais; e o
              CONTRATADA, configura-se como OPERADORA, sendo responsável pelo
              tratamento de dados pessoais em nome do CONTROLADOR.
            </li>
            <li>
              A segurança das informações que você fornece durante o uso do
              CONTRATADA são muito importantes para o CONTRATADA. Assim nos
              comprometemos em que somente pessoas autorizadas por você possam
              ter acessos a dados sensíveis que são inseridas para uso na
              plataforma.
            </li>
            <li>
              Dessa forma o CONTRATADA se compromete em manter as defesas
              administrativas, físicas e técnicas adequadas para proteger a
              segurança, confidencialidade dos seus dados. Nos comprometemos em
              não divulgar seus dados, exceto se exigidos pela lei, ou se você
              permitir expressamente por escrito. Somente acessaremos seus dados
              para prestar os serviços de suporte ou para resolver problemas de
              serviço ou técnicos.
            </li>
            <li>
              Os únicos dados que coletaremos serão destinados a melhoria,
              desenvolvimento e a promover uma experiência mais adequada para
              nossos usuários. Assim, durante o uso do CONTRATADA, você, seus
              colegas e sua organização submeterão algumas informações de
              consumo para nossa base de melhorias, como por exemplo:
              <ol style={{ listStyleType: "decimal" }}>
                <li>Dados de uso das ferramentas da plataforma;</li>
                <li>Informações de uso demográfico;</li>
                <li>
                  Feedbacks, NPS, sugestões e ideias enviadas para o CONTRATADA
                  por você e sua organização;
                </li>
                <li>
                  Nome, telefone, e-mail, informações de departamento e dados de
                  contatos relacionados com a sua empresa;
                </li>
                <li>Número de usuários ativo;</li>
              </ol>
            </li>
            <li>
              A CONTRATADA também poderá aplicar pesquisas de investigação que
              são de participação facultativa pelos usuários. Essas pesquisas
              têm finalidade apenas de coleta de informações para uso exclusivo
              do CONTRATADA.
            </li>
          </ol>

          <h2>9. Lei regente e local</h2>
          <p>
            A CONTRATADA não assume qualquer responsabilidade ou risco se por
            qualquer motivo os termos aqui descritos violem leis nacionais de
            outros países. Essa responsabilidade recai sobre as pessoas que
            acessam esse serviço a partir destes territórios. Todos os itens
            deste Termo de Uso estão regidos pelas leis vigentes na República
            Federativa do Brasil. Para todos os assuntos referentes à sua
            interpretação e cumprimento, as partes se submeterão ao Foro da
            Cidade de Armação dos Búzios - RJ.
          </p>

          <p>
            <strong>
              Declaro que li e estou de acordo com todos os termos e condições
              expostas.
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
