import { useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import MenuLateral from "../../MenuLateral";
import styles from "./AssessoresPainel.module.css";

const cargoLabelMap = {
  CHEFE_DE_GABINETE: "Chefe de Gabinete",
  ASSESSOR_PARLAMENTAR: "Assessor Parlamentar",
  ASSESSOR_TECNICO: "Assessor Tecnico",
  ASSESSOR_COMUNICACAO: "Assessor de Comunicacao",
  ASSESSOR_JURIDICO: "Assessor Juridico",
  ASSESSOR_DE_BASE: "Assessor de Base",
  COORDENADOR: "Coordenador",
  SECRETARIO: "Secretario(a)",
  AUXILIAR: "Auxiliar Administrativo",
  ASSISTENTE_PARLAMENTAR: "Assistente Parlamentar",
};

const cargos = [
  { value: "all", label: "Todos os Cargos" },
  { value: "CHEFE_DE_GABINETE", label: "Chefe de Gabinete" },
  { value: "ASSESSOR_PARLAMENTAR", label: "Assessor Parlamentar" },
  { value: "ASSESSOR_TECNICO", label: "Assessor Tecnico" },
  { value: "ASSESSOR_COMUNICACAO", label: "Assessor de Comunicacao" },
  { value: "ASSESSOR_JURIDICO", label: "Assessor Juridico" },
  { value: "ASSESSOR_DE_BASE", label: "Assessor de Base" },
  { value: "ASSISTENTE_PARLAMENTAR", label: "Assistente Parlamentar" },
  { value: "COORDENADOR", label: "Coordenador" },
  { value: "SECRETARIO", label: "Secretario(a)" },
  { value: "AUXILIAR", label: "Auxiliar Administrativo" },
];

const meses = [
  { value: "all", label: "Todos os meses" },
  { value: "1", label: "Janeiro" },
  { value: "2", label: "Fevereiro" },
  { value: "3", label: "Marco" },
  { value: "4", label: "Abril" },
  { value: "5", label: "Maio" },
  { value: "6", label: "Junho" },
  { value: "7", label: "Julho" },
  { value: "8", label: "Agosto" },
  { value: "9", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

const UFS = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const basePathForAssessores = (masterUserId) =>
  `http://localhost:8080/master-users/${masterUserId}/dashboard/assessores`;

const normalizeAssessor = (assessor) => ({
  ...assessor,
  nome: `${assessor?.primeiroNome || ""} ${assessor?.ultimoNome || ""}`
    .replace(/\s+/g, " ")
    .trim(),
  cargoLabel:
    cargoLabelMap[assessor?.cargoGabinete] ||
    String(assessor?.cargoGabinete || "-")
      .toLowerCase()
      .replace(/_/g, " "),
  cargo: assessor?.cargoGabinete || "",
  status: "Ativo",
});

export default function AssessoresPainel() {
  const params = useParams();
  const navigate = useNavigate();

  const [masterUserId, setMasterUserId] = useState(params.id || "");
  const [assessores, setAssessores] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [actionMenuOpen, setActionMenuOpen] = useState(null);
  const [actionMenuAssessor, setActionMenuAssessor] = useState(null);
  const [actionMenuPosition, setActionMenuPosition] = useState({
    top: 0,
    left: 0,
    openUp: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [filters, setFilters] = useState({
    nome: "",
    cargo: "all",
    mes: "all",
  });
  const [formState, setFormState] = useState({ email: "" });

  const token = useMemo(() => localStorage.getItem("authToken"), []);

  const headers = useMemo(
    () => ({
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }),
    [token],
  );

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    if (params.id) {
      setMasterUserId(params.id);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const decodedId = decoded?.id || decoded?.uuid || "";

      if (decodedId) {
        setMasterUserId(decodedId);
      } else {
        navigate("/login");
      }
    } catch (_error) {
      navigate("/login");
    }
  }, [navigate, params.id, token]);

  const loadAssessores = async (url) => {
    if (!masterUserId || !token) return;

    const endpoint = url || `${basePathForAssessores(masterUserId)}/simples`;

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        setAssessores([]);
        return;
      }

      const data = await response.json();
      setAssessores(Array.isArray(data) ? data.map(normalizeAssessor) : []);
    } catch (_error) {
      setAssessores([]);
    }
  };

  useEffect(() => {
    loadAssessores();
  }, [masterUserId, token]);

  useEffect(() => {
    const handleClickOutside = () => {
      setActionMenuOpen(null);
      setActionMenuAssessor(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!masterUserId || !token) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    let dataNascimento = formData.get("dataNascimento");

    if (
      typeof dataNascimento === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(dataNascimento)
    ) {
      const [yyyy, mm, dd] = dataNascimento.split("-");
      dataNascimento = `${dd}-${mm}-${yyyy}`;
    }

    const payload = {
      primeiroNome: formData.get("primeiroNome"),
      ultimoNome: formData.get("ultimoNome"),
      dataNascimento,
      cargoGabinete: formData.get("cargoGabinete"),
      email: formData.get("email"),
      password: formData.get("password"),
      endereco: {
        contato: formData.get("contato"),
        logradouro: formData.get("logradouro"),
        cep: formData.get("cep"),
        numeroResidencia: formData.get("numeroResidencia"),
        complemento: formData.get("complemento"),
        bairro: formData.get("bairro"),
        cidade: formData.get("cidade"),
        uf: formData.get("uf"),
      },
    };

    try {
      const response = await fetch(basePathForAssessores(masterUserId), {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert(`Erro ao cadastrar assessor: ${errorText}`);
        return;
      }

      alert("Assessor cadastrado com sucesso!");
      setShowModal(false);
      setFormState({ email: "" });
      loadAssessores();
    } catch (_error) {
      alert("Erro ao cadastrar assessor!");
    }
  };

  const handleNomeChange = async (event) => {
    const nome = event.target.value;
    setFilters((previous) => ({ ...previous, nome }));

    if (!masterUserId || !token) return;

    if (!nome.trim()) {
      loadAssessores();
      return;
    }

    loadAssessores(
      `${basePathForAssessores(masterUserId)}/busca?nome=${encodeURIComponent(nome)}`,
    );
  };

  const handleMesChange = async (event) => {
    const mes = event.target.value;
    setFilters((previous) => ({ ...previous, mes }));

    if (!masterUserId || !token) return;

    if (mes === "all") {
      loadAssessores();
      return;
    }

    loadAssessores(
      `${basePathForAssessores(masterUserId)}/aniversariantes-simples?mes=${parseInt(mes, 10)}`,
    );
  };

  const filteredAssessores = useMemo(
    () =>
      assessores.filter((assessor) => {
        if (filters.cargo !== "all" && assessor.cargo !== filters.cargo) {
          return false;
        }

        return true;
      }),
    [assessores, filters.cargo],
  );

  const toggleActionMenu = (event, assessor) => {
    event.stopPropagation();

    const rect = event.currentTarget.getBoundingClientRect();
    const estimatedMenuHeight = 148;
    const hasSpaceBelow =
      window.innerHeight - rect.bottom > estimatedMenuHeight + 16;

    setActionMenuOpen((previous) => {
      if (previous === assessor.id) {
        setActionMenuAssessor(null);
        return null;
      }

      setActionMenuPosition({
        top: hasSpaceBelow ? rect.bottom + 8 : rect.top - 8,
        left: rect.right,
        openUp: !hasSpaceBelow,
      });
      setActionMenuAssessor(assessor);

      return assessor.id;
    });
  };

  const handlePromoverAdmin = async (assessor) => {
    if (!masterUserId || !token) return;

    try {
      const response = await fetch(
        `${basePathForAssessores(masterUserId)}/${assessor.id}/perfil`,
        {
          method: "PATCH",
          headers,
          body: JSON.stringify({ novoTipoAcesso: "ADMIN" }),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        alert(`Erro ao promover assessor: ${errorText}`);
        return;
      }

      alert(`Assessor ${assessor.nome} promovido a Admin!`);
      setActionMenuOpen(null);
      setActionMenuAssessor(null);
    } catch (_error) {
      alert("Erro ao promover assessor!");
    }
  };

  const handleDeleteAssessor = async (assessor) => {
    if (!masterUserId || !token) return;

    if (!window.confirm("Tem certeza que deseja deletar este assessor?")) {
      return;
    }

    try {
      const response = await fetch(
        `${basePathForAssessores(masterUserId)}/${assessor.id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        alert(`Erro ao deletar assessor: ${errorText}`);
        return;
      }

      alert(`Assessor ${assessor.nome} deletado!`);
      setActionMenuOpen(null);
      setActionMenuAssessor(null);
      loadAssessores();
    } catch (_error) {
      alert("Erro ao deletar assessor!");
    }
  };

  return (
    <div className={styles.dashboardRoot}>
      <MenuLateral
        masterUserId={masterUserId}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className={styles.dashboardMain}>
        <header className={styles.headerRow}>
          <div>
            <h1 className={styles.pageTitle}>Gestao de Equipe</h1>
            <p className={styles.subtitle}>
              Gerencie seus assessores e acompanhe o desempenho.
            </p>
          </div>

          <div className={styles.headerActions}>
            <button
              className={styles.btnNew}
              onClick={() => setShowModal(true)}
            >
              + Novo Assessor
            </button>
            <div className={styles.dateBadge}>
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "2-digit",
                month: "long",
              })}
            </div>
          </div>
        </header>

        <section className={styles.filterSection}>
          <label htmlFor="nameFilter" className={styles.filterLabel}>
            Buscar por Nome
          </label>
          <input
            id="nameFilter"
            className={styles.nameFilterInput}
            placeholder="Digite o nome do assessor..."
            value={filters.nome}
            onChange={handleNomeChange}
          />

          <label htmlFor="cargoFilter" className={styles.filterLabel}>
            Filtrar por Cargo
          </label>
          <select
            id="cargoFilter"
            className={styles.selectFilter}
            value={filters.cargo}
            onChange={(event) =>
              setFilters((previous) => ({
                ...previous,
                cargo: event.target.value,
              }))
            }
          >
            {cargos.map((cargo) => (
              <option key={cargo.value} value={cargo.value}>
                {cargo.label}
              </option>
            ))}
          </select>

          <label htmlFor="birthdayFilter" className={styles.filterLabel}>
            Aniversariantes do mes
          </label>
          <select
            id="birthdayFilter"
            className={styles.selectFilter}
            value={filters.mes}
            onChange={handleMesChange}
          >
            {meses.map((mes) => (
              <option key={mes.value} value={mes.value}>
                {mes.label}
              </option>
            ))}
          </select>
        </section>

        <section className={styles.tableContainer}>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Contato</th>
                  <th>Status</th>
                  <th>Acoes</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssessores.map((assessor) => (
                  <tr key={assessor.id}>
                    <td>
                      <strong>{assessor.nome}</strong>
                      <br />
                      <small className={styles.subtitle}>
                        ID: {assessor.id}
                      </small>
                    </td>

                    <td>
                      <span className={styles.cargoBadge}>
                        {assessor.cargoLabel}
                      </span>
                    </td>

                    <td>
                      {assessor.email}
                      <br />
                      <small className={styles.subtitle}>
                        {assessor.contato}
                      </small>
                    </td>

                    <td>
                      <span className={styles.statusPill}>
                        {assessor.status}
                      </span>
                    </td>

                    <td>
                      <div className={styles.actionMenu}>
                        <button
                          className={styles.actionBtn}
                          onClick={(event) => toggleActionMenu(event, assessor)}
                        >
                          ⋮
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredAssessores.length === 0 && (
                  <tr>
                    <td colSpan={5} className={styles.emptyCell}>
                      Nenhum assessor encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {actionMenuOpen && actionMenuAssessor && (
          <div
            className={`${styles.actionDropdownFloating} ${
              actionMenuPosition.openUp ? styles.actionDropdownFloatingUp : ""
            }`}
            style={{
              top: `${actionMenuPosition.top}px`,
              left: `${actionMenuPosition.left}px`,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={`${styles.actionItem} ${styles.actionItemAdmin}`}
              onClick={() => handlePromoverAdmin(actionMenuAssessor)}
            >
              Transformar Admin
            </button>
            <button
              className={`${styles.actionItem} ${styles.actionItemSuspend}`}
              onClick={() => {
                alert(
                  `Acesso do Assessor ${actionMenuAssessor.nome} suspenso!`,
                );
                setActionMenuOpen(null);
                setActionMenuAssessor(null);
              }}
            >
              Suspender Acesso
            </button>
            <button
              className={`${styles.actionItem} ${styles.actionItemDelete}`}
              onClick={() => handleDeleteAssessor(actionMenuAssessor)}
            >
              Deletar
            </button>
          </div>
        )}

        {showModal && (
          <div
            className={styles.modalOverlay}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setShowModal(false);
              }
            }}
          >
            <div className={styles.modalContainer}>
              <div className={styles.modalHeader}>
                <h2>Cadastrar Novo Assessor</h2>
                <button
                  type="button"
                  className={styles.modalClose}
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
              </div>

              <form className={styles.modalForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Primeiro Nome *</label>
                    <input
                      name="primeiroNome"
                      required
                      placeholder="Ex: Carlos"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Ultimo Nome *</label>
                    <input name="ultimoNome" required placeholder="Ex: Silva" />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Data de Nascimento *</label>
                    <input type="date" name="dataNascimento" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Cargo no Gabinete *</label>
                    <select name="cargoGabinete" required>
                      <option value="">Selecione o cargo</option>
                      {cargos
                        .filter((cargo) => cargo.value !== "all")
                        .map((cargo) => (
                          <option key={cargo.value} value={cargo.value}>
                            {cargo.label}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="assessor@email.com"
                      value={formState.email}
                      onChange={(event) =>
                        setFormState((previous) => ({
                          ...previous,
                          email: event.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Senha *</label>
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Minimo 6 caracteres"
                      minLength={6}
                    />
                  </div>
                </div>

                <div className={styles.formDivider}>Dados de Endereco</div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Contato/Telefone *</label>
                    <input
                      name="contato"
                      required
                      placeholder="55 (99) 99999-9999"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>CEP *</label>
                    <input
                      name="cep"
                      required
                      placeholder="00000-000"
                      maxLength={9}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Logradouro *</label>
                  <input
                    name="logradouro"
                    required
                    placeholder="Rua, Avenida, etc."
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Numero *</label>
                    <input name="numeroResidencia" required placeholder="123" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Complemento</label>
                    <input
                      name="complemento"
                      placeholder="Apto, bloco, sala, etc."
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Bairro *</label>
                    <input
                      name="bairro"
                      required
                      placeholder="Nome do bairro"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Cidade *</label>
                    <input
                      name="cidade"
                      required
                      placeholder="Ex: Rio de Janeiro"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>UF *</label>
                    <select name="uf" required>
                      <option value="">--</option>
                      {UFS.map((uf) => (
                        <option key={uf} value={uf}>
                          {uf}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formActions}>
                  <button
                    type="button"
                    className={styles.btnCancel}
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className={styles.btnSubmit}>
                    Cadastrar Assessor
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
