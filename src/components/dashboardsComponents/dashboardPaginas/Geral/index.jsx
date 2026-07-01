import { useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import MenuLateral from "../../MenuLateral";
import styles from "./geral.module.css";

export default function Geral() {
  const [uuid, setUuid] = useState("");
  const [eleitoresCadastrados, setEleitoresCadastrados] = useState(null);
  const [limiteEleitores, setLimiteEleitores] = useState(null);
  const [planoStatus, setPlanoStatus] = useState("Carregando...");
  const [planoAtual, setPlanoAtual] = useState("");
  const [percentualEvolucao, setPercentualEvolucao] = useState(null);
  const [assessoresCadastrados, setAssessoresCadastrados] = useState(null);
  const [limiteAssessores, setLimiteAssessores] = useState(null);
  const [totalAcoesSociais, setTotalAcoesSociais] = useState(null);
  const [totalDemandasPendentes, setTotalDemandasPendentes] = useState(null);
  const [totalAtendimentosMes, setTotalAtendimentosMes] = useState(null);
  const [totalAtendimentos, setTotalAtendimentos] = useState(null);
  const [variacaoPercentual, setVariacaoPercentual] = useState(null);
  const [mesRegistro, setMesRegistro] = useState(null);
  const [anoRegistro, setAnoRegistro] = useState(null);
  const [rankingAssessores, setRankingAssessores] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const dataAtual = useMemo(
    () =>
      new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    [],
  );

  const resolveDemandasPendentesCount = (value) => {
    if (Array.isArray(value)) {
      return value.length;
    }

    if (typeof value === "number") {
      return value;
    }

    if (value && typeof value === "object") {
      const directKeys = [
        "totalDemandasPendentes",
        "totalPendentes",
        "quantidade",
        "total",
        "count",
        "valor",
      ];

      for (const key of directKeys) {
        if (typeof value[key] === "number") {
          return value[key];
        }
      }

      if (typeof value.totalElements === "number") {
        return value.totalElements;
      }

      if (Array.isArray(value.content)) {
        return value.content.length;
      }

      if (typeof value.total === "number") {
        return value.total;
      }

      if (Array.isArray(value.items)) {
        return value.items.length;
      }
    }

    return null;
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
      return;
    }

    let masterUserId = params.id;

    try {
      const decoded = jwtDecode(token);
      masterUserId = masterUserId || decoded?.id || decoded?.uuid || "";
    } catch (_error) {
      masterUserId = masterUserId || "";
    }

    if (!masterUserId) {
      navigate("/login");
      return;
    }

    setUuid(masterUserId);

    const headers = { Authorization: `Bearer ${token}` };

    fetch(`http://localhost:8080/politico/${masterUserId}/plano/status`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.planoAtual) setPlanoAtual(data.planoAtual);
        if (data?.planoTipo) setPlanoAtual(data.planoTipo);

        if (data?.descricao) {
          setPlanoStatus(data.descricao);
          return;
        }

        if (data?.status) {
          const statusMap = {
            ATIVO: "ATIVO",
            INADIMPLENTE: "INADIMPLENTE",
            SUSPENSO: "SUSPENSO",
            CANCELADO: "CANCELADO",
            PERIODO_TESTE: "Período de teste",
          };

          setPlanoStatus(statusMap[data.status] || data.status);
          return;
        }

        setPlanoStatus("-");
      })
      .catch(() => {
        setPlanoStatus("-");
      });

    fetch(
      `http://localhost:8080/politico/${masterUserId}/assessores/ranking-eleitores`,
      {
        headers,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setRankingAssessores(Array.isArray(data) ? data.slice(0, 5) : []);
      })
      .catch(() => setRankingAssessores([]));

    fetch(`http://localhost:8080/politico/${masterUserId}/data-registro`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setMesRegistro(typeof data.mes === "string" ? data.mes : null);
        setAnoRegistro(typeof data.ano === "number" ? data.ano : null);
      })
      .catch(() => {
        setMesRegistro(null);
        setAnoRegistro(null);
      });

    fetch(
      `http://localhost:8080/politico/${masterUserId}/atendimentos-sociais/variacao-mensal`,
      {
        headers,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setVariacaoPercentual(
          typeof data.variacaoPercentual === "number"
            ? data.variacaoPercentual
            : null,
        );
      })
      .catch(() => setVariacaoPercentual(null));

    fetch(
      `http://localhost:8080/politico/${masterUserId}/atendimentos-sociais/total-absoluto`,
      {
        headers,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalAtendimentos(
          typeof data.totalAtendimentos === "number"
            ? data.totalAtendimentos
            : null,
        );
      })
      .catch(() => setTotalAtendimentos(null));

    fetch(
      `http://localhost:8080/politico/${masterUserId}/eleitores/evolucao-mensal`,
      {
        headers,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setPercentualEvolucao(
          typeof data.percentual === "number" ? data.percentual : null,
        );
      })
      .catch(() => setPercentualEvolucao(null));

    fetch(`http://localhost:8080/politico/${masterUserId}/eleitores/limite`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setEleitoresCadastrados(
          typeof data.eleitoresCadastrados === "number"
            ? data.eleitoresCadastrados
            : null,
        );
        setLimiteEleitores(
          typeof data.limiteEleitores === "number"
            ? data.limiteEleitores
            : null,
        );
      })
      .catch(() => {
        setEleitoresCadastrados(null);
        setLimiteEleitores(null);
      });

    fetch(`http://localhost:8080/politico/${masterUserId}/assessores/limite`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setAssessoresCadastrados(
          typeof data.assessoresCadastrados === "number"
            ? data.assessoresCadastrados
            : null,
        );
        setLimiteAssessores(
          typeof data.limiteAssessores === "number"
            ? data.limiteAssessores
            : null,
        );
      })
      .catch(() => {
        setAssessoresCadastrados(null);
        setLimiteAssessores(null);
      });

    fetch(
      `http://localhost:8080/politico/${masterUserId}/acoes-sociais/total`,
      {
        headers,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalAcoesSociais(
          typeof data.totalAcoesSociais === "number"
            ? data.totalAcoesSociais
            : null,
        );
      })
      .catch(() => setTotalAcoesSociais(null));

    fetch(
      `http://localhost:8080/politico/${masterUserId}/demandas/total-pendentes`,
      {
        headers,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalDemandasPendentes(resolveDemandasPendentesCount(data));
      })
      .catch(() => setTotalDemandasPendentes(null));

    fetch(
      `http://localhost:8080/politico/${masterUserId}/atendimentos-sociais/total-mes`,
      {
        headers,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalAtendimentosMes(
          typeof data.totalAtendimentosMes === "number"
            ? data.totalAtendimentosMes
            : null,
        );
      })
      .catch(() => setTotalAtendimentosMes(null));
  }, [navigate, params.id]);

  const planoMap = {
    BRONZE: "Plano Bronze",
    PRATA: "Plano Prata",
    OURO: "Plano Ouro",
    PLATINA: "Plano Platina",
  };

  return (
    <div className={styles.dashboardRoot}>
      <MenuLateral masterUserId={uuid} />

      <main className={styles.dashboardMain}>
        <header className={styles.pageHeader}>
          <div className={styles.headerTitle}>
            <h1>Visão Geral</h1>
            <p>Bem-vindo ao painel de controle do gabinete.</p>
          </div>

          <div className={styles.headerBadges}>
            <div className={styles.dateBadge}>
              🆔 UUID: {uuid || "Carregando..."}
            </div>
            <div className={styles.dateBadge}>📅 {dataAtual}</div>
          </div>
        </header>

        <section className={styles.statsGrid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>Eleitores Cadastrados 👥</div>
            <div className={styles.cardValue}>
              {eleitoresCadastrados !== null ? eleitoresCadastrados : "..."}
              <span className={styles.cardValueSuffix}>
                /{" "}
                {limiteEleitores !== null
                  ? limiteEleitores.toLocaleString("pt-BR")
                  : "..."}
              </span>
            </div>
            <div
              className={`${styles.cardTrend} ${
                percentualEvolucao === null
                  ? ""
                  : percentualEvolucao > 0
                    ? styles.trendUp
                    : percentualEvolucao < 0
                      ? styles.trendDown
                      : styles.trendNeutral
              }`}
            >
              {percentualEvolucao === null ? (
                <span className={styles.mutedText}>--</span>
              ) : percentualEvolucao > 0 ? (
                <>
                  <span className={styles.upArrow}>▲</span>
                  <span className={styles.upArrow}>{percentualEvolucao}%</span>
                  <span className={styles.mutedText}>vs. mês passado</span>
                </>
              ) : percentualEvolucao < 0 ? (
                <>
                  <span className={styles.downArrow}>▼</span>
                  <span className={styles.downArrow}>
                    {percentualEvolucao}%
                  </span>
                  <span className={styles.mutedText}>vs. mês passado</span>
                </>
              ) : (
                <>
                  <span className={styles.mutedText}>=</span>
                  <span className={styles.mutedText}>0%</span>
                  <span className={styles.mutedText}>vs. mês passado</span>
                </>
              )}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>Assessores 🆔</div>
            <div className={styles.cardValue}>
              {assessoresCadastrados !== null ? assessoresCadastrados : "..."}
              <span className={styles.cardValueSuffix}>
                / {limiteAssessores !== null ? limiteAssessores : "..."}
              </span>
            </div>
            <div className={styles.cardCaption}>Total cadastrado</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>Demandas Pendentes 📋</div>
            <div className={styles.cardValue}>
              {totalDemandasPendentes !== null ? totalDemandasPendentes : "..."}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>Ações Sociais</div>
            <div className={styles.cardValue}>
              {totalAcoesSociais !== null ? totalAcoesSociais : "..."}
            </div>
          </div>
        </section>

        <section className={styles.chartsGrid}>
          <div className={styles.chartCard}>
            <h3>Status da Assinatura</h3>
            <div className={styles.statusBox}>
              <div className={styles.statusBadge}>✅</div>
              <p className={styles.statusLabel}>Situação Atual</p>
              <p className={styles.statusValue}>{planoStatus}</p>

              <div className={styles.planRow}>
                <span>Plano</span>
                <span className={styles.planValue}>
                  {planoAtual ? planoMap[planoAtual] || planoAtual : "-"}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.chartCard}>
            <h3>Eleitores por Assessor</h3>
            <div className={styles.rankingWrapper}>
              <h4 className={styles.sectionTitle}>🏆 Top 5 Assessores</h4>
              <div className={styles.rankingList}>
                {rankingAssessores.length > 0
                  ? rankingAssessores.map((assessor, index) => {
                      const max = rankingAssessores[0]?.totalEleitores || 1;
                      const width =
                        max > 0
                          ? Math.round((assessor.totalEleitores / max) * 100)
                          : 0;

                      return (
                        <div className={styles.rankingItem} key={assessor.nome}>
                          <div className={styles.rankingPosition}>
                            {index + 1}º
                          </div>
                          <div className={styles.rankingInfo}>
                            <div className={styles.rankingName}>
                              {assessor.nome}
                            </div>
                            <div className={styles.rankingBar}>
                              <div
                                className={styles.rankingProgress}
                                style={{
                                  width: `${width}%`,
                                  opacity: width === 0 ? 0.3 : 1,
                                }}
                              />
                            </div>
                          </div>
                          <div className={styles.rankingValue}>
                            {assessor.totalEleitores}
                          </div>
                        </div>
                      );
                    })
                  : Array.from({ length: 5 }).map((_, index) => (
                      <div className={styles.rankingItem} key={index}>
                        <div className={styles.rankingPosition}>
                          {index + 1}º
                        </div>
                        <div className={styles.rankingInfo}>
                          <div className={styles.rankingName}>-</div>
                          <div className={styles.rankingBar}>
                            <div
                              className={styles.rankingProgress}
                              style={{ width: "0%", opacity: 0.3 }}
                            />
                          </div>
                        </div>
                        <div className={styles.rankingValue}>0</div>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          <div className={styles.chartCard}>
            <h3>Evolução de Ações Sociais</h3>
            <div className={styles.statsSection}>
              <h4 className={styles.statsTitle}>📊 Atendimentos Realizados</h4>
              <div className={styles.statsGridTwo}>
                <div className={`${styles.statBox} ${styles.statBlue}`}>
                  <div className={styles.statLabel}>Este Mês</div>
                  <div
                    className={`${styles.statValue} ${styles.statValueBlue}`}
                  >
                    {totalAtendimentosMes !== null
                      ? totalAtendimentosMes
                      : "..."}
                  </div>
                  <div className={`${styles.statTrend} ${styles.trendText}`}>
                    {variacaoPercentual === null ? (
                      <>
                        <span className={styles.mutedText}>--</span>{" "}
                        <span className={styles.mutedText}>
                          vs. mês anterior
                        </span>
                      </>
                    ) : variacaoPercentual > 0 ? (
                      <>
                        <span className={styles.successText}>▲</span>{" "}
                        {variacaoPercentual}%{" "}
                        <span className={styles.mutedText}>
                          vs. mês anterior
                        </span>
                      </>
                    ) : variacaoPercentual < 0 ? (
                      <>
                        <span className={styles.dangerText}>▼</span>{" "}
                        {variacaoPercentual}%{" "}
                        <span className={styles.mutedText}>
                          vs. mês anterior
                        </span>
                      </>
                    ) : (
                      <>
                        <span className={styles.mutedText}>=</span> 0%{" "}
                        <span className={styles.mutedText}>
                          vs. mês anterior
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className={`${styles.statBox} ${styles.statGreen}`}>
                  <div className={styles.statLabel}>Total Acumulado</div>
                  <div
                    className={`${styles.statValue} ${styles.statValueGreen}`}
                  >
                    {totalAtendimentos !== null
                      ? totalAtendimentos.toLocaleString("pt-BR")
                      : "..."}
                  </div>
                  <div className={`${styles.statTrend} ${styles.trendText}`}>
                    {mesRegistro && anoRegistro
                      ? `Desde ${mesRegistro.charAt(0).toUpperCase() + mesRegistro.slice(1)}/${anoRegistro}`
                      : "Desde ..."}
                  </div>
                </div>
              </div>

              <div className={styles.goalAlert}>
                <strong>💡 Meta do Mês:</strong> 50 atendimentos (94% atingido)
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
