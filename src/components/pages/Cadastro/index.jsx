import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./cadastro.module.css";

export default function Cadastro() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    primeiroNome: "",
    ultimoNome: "",
    legendaPartidaria: "",
    nomeGabinete: "",
    cpf: "",
    dataNascimento: "",
    cargoPolitico: "VEREADOR",
    planoTipo: "BRONZE",
    email: "",
    password: "",
    contato: "",
    cep: "",
    logradouro: "",
    numeroResidencia: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const maskDate = (value) =>
    value
      .replace(/[^\d]/g, "")
      .replace(/(\d{2})(\d)/, "$1-$2")
      .replace(/(\d{2}-\d{2})(\d)/, "$1-$2")
      .slice(0, 10);

  const maskPhone = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 2 && !v.startsWith("55")) v = "55" + v;
    if (v.length > 12) {
      v = v.replace(/^(55)(\d{2})(\d{5})(\d{4}).*/, "$1 ($2) $3-$4");
    } else if (v.length > 7) {
      v = v.replace(/^(55)(\d{2})(\d{0,5})/, "$1 ($2) $3");
    } else if (v.length > 2) {
      v = v.replace(/^(55)(\d{0,2})/, "$1 ($2");
    }
    return v;
  };

  const maskCPF = (value) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, "$1.$2.$3-$4")
      .slice(0, 14);

  const maskCEP = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 5) {
      v = v.slice(0, 5) + "-" + v.slice(5, 8);
    } else {
      v = v.slice(0, 5);
    }
    return v;
  };

  const onlyDigits = (value) => String(value || "").replace(/\D/g, "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "dataNascimento") newValue = maskDate(value);
    if (name === "contato") newValue = maskPhone(value);
    if (name === "cpf") newValue = maskCPF(value);
    if (name === "cep") newValue = maskCEP(value);

    setForm({ ...form, [name]: newValue });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.primeiroNome) newErrors.primeiroNome = "Campo obrigatório";
    if (!form.ultimoNome) newErrors.ultimoNome = "Campo obrigatório";
    if (!form.legendaPartidaria)
      newErrors.legendaPartidaria = "Campo obrigatório";
    if (!form.nomeGabinete) newErrors.nomeGabinete = "Campo obrigatório";
    if (!form.cpf) newErrors.cpf = "Campo obrigatório";
    if (!form.dataNascimento) newErrors.dataNascimento = "Campo obrigatório";
    if (
      form.dataNascimento &&
      !/^\d{2}-\d{2}-\d{4}$/.test(form.dataNascimento)
    ) {
      newErrors.dataNascimento = "Formato obrigatório: DD-MM-AAAA";
    }
    if (!form.email) newErrors.email = "Campo obrigatório";
    if (!form.password) newErrors.password = "Campo obrigatório";
    if (form.password && form.password.length < 8) {
      newErrors.password = "Mínimo 8 caracteres";
    }
    if (!form.contato) newErrors.contato = "Campo obrigatório";
    if (form.contato && !/^55 \(\d{2}\) \d{4,5}-\d{4}$/.test(form.contato)) {
      newErrors.contato = "Formato: 55 (99) 99999-9999";
    }
    if (!form.cep) newErrors.cep = "Campo obrigatório";
    if (!form.logradouro) newErrors.logradouro = "Campo obrigatório";
    if (!form.numeroResidencia) {
      newErrors.numeroResidencia = "Campo obrigatório";
    }
    if (!form.bairro) newErrors.bairro = "Campo obrigatório";
    if (!form.cidade) newErrors.cidade = "Campo obrigatório";
    if (!form.uf) newErrors.uf = "Campo obrigatório";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Erros de validação: " + JSON.stringify(validationErrors));
      return;
    }

    const payload = {
      primeiroNome: form.primeiroNome,
      ultimoNome: form.ultimoNome,
      legendaPartidaria: form.legendaPartidaria,
      nomeGabinete: form.nomeGabinete,
      cpf: onlyDigits(form.cpf),
      dataNascimento: form.dataNascimento,
      email: form.email,
      password: form.password,
      cargoPolitico: form.cargoPolitico.replace(/\s+/g, "_").toUpperCase(),
      planoTipo: form.planoTipo.replace(/\s+/g, "_").toUpperCase(),
      endereco: {
        contato: onlyDigits(form.contato),
        logradouro: form.logradouro,
        cep: onlyDigits(form.cep),
        numeroResidencia: form.numeroResidencia,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        uf: form.uf,
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8080/politico/cadastro-save",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        setSuccess(true);
      } else {
        const responseText = await response.text();
        const message = responseText || `Status ${response.status}`;
        alert(`Erro ao enviar cadastro: ${message}`);
      }
    } catch (_error) {
      alert("Erro de conexão com o servidor.");
    }
  };

  if (success) {
    return (
      <div className={styles.cadastroRoot}>
        <div className={`${styles.formContainer} ${styles.successContainer}`}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}></div> POLITIC BASE TI
          </div>
          <h1>Cadastro realizado com sucesso!</h1>
          <p className={styles.subtitle}>
            Um e-mail foi enviado para você com instruções para ativar sua
            conta.
          </p>
          <div className={styles.successActions}>
            <Link to="/" className={`${styles.btn} ${styles.btnPrimary}`}>
              Ir para página inicial
            </Link>
          </div>
        </div>
        <div className={styles.visualContainer}>
          <div className={`${styles.blob} ${styles.blobA}`}></div>
          <div className={`${styles.blob} ${styles.blobB}`}></div>
          <div className={styles.glassCard}>
            <div className={styles.iconLarge}>🏛️</div>
            <h2>Tecnologia para Governança</h2>
            <p>
              "Facilitando a gestão pública com transparência e eficiência.
              Cadastre seu gabinete e organize sua atuação parlamentar."
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cadastroRoot}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}></div> POLITIC BASE TI
        </div>
        <h1>Portal do Parlamentar</h1>
        <p className={styles.subtitle}>
          Complete seu cadastro para acessar o painel.
        </p>

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${step === 1 ? styles.tabActive : ""}`}
            onClick={() => setStep(1)}
          >
            👤 Dados Políticos
          </button>
          <button
            type="button"
            className={`${styles.tab} ${step === 2 ? styles.tabActive : ""}`}
            onClick={() => setStep(2)}
          >
            📍 Endereço
          </button>
        </div>

        <form id="multiStepForm" onSubmit={handleSubmit} autoComplete="off">
          <div
            className={`${styles.formStep} ${step === 1 ? styles.formStepActive : ""}`}
          >
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label>Primeiro Nome</label>
                <input
                  name="primeiroNome"
                  type="text"
                  placeholder="João"
                  value={form.primeiroNome}
                  onChange={handleChange}
                />
                {errors.primeiroNome && (
                  <span className={styles.error}>{errors.primeiroNome}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Último Nome</label>
                <input
                  name="ultimoNome"
                  type="text"
                  placeholder="Silva"
                  value={form.ultimoNome}
                  onChange={handleChange}
                />
                {errors.ultimoNome && (
                  <span className={styles.error}>{errors.ultimoNome}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Legenda Partidária</label>
                <input
                  name="legendaPartidaria"
                  type="text"
                  placeholder="PDT"
                  value={form.legendaPartidaria}
                  onChange={handleChange}
                />
                {errors.legendaPartidaria && (
                  <span className={styles.error}>
                    {errors.legendaPartidaria}
                  </span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Nome do Gabinete</label>
                <input
                  name="nomeGabinete"
                  type="text"
                  placeholder="Gabinete Trabalhista"
                  value={form.nomeGabinete}
                  onChange={handleChange}
                />
                {errors.nomeGabinete && (
                  <span className={styles.error}>{errors.nomeGabinete}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>CPF</label>
                <input
                  name="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  value={form.cpf}
                  onChange={handleChange}
                />
                {errors.cpf && (
                  <span className={styles.error}>{errors.cpf}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Data de Nascimento</label>
                <input
                  name="dataNascimento"
                  type="text"
                  placeholder="DD-MM-AAAA"
                  value={form.dataNascimento}
                  onChange={handleChange}
                  maxLength={10}
                />
                {errors.dataNascimento && (
                  <span className={styles.error}>{errors.dataNascimento}</span>
                )}
              </div>

              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Cargo Político</label>
                <select
                  name="cargoPolitico"
                  value={form.cargoPolitico}
                  onChange={handleChange}
                >
                  <option value="VEREADOR">VEREADOR</option>
                  <option value="DEPUTADO ESTADUAL">DEPUTADO ESTADUAL</option>
                  <option value="DEPUTADO FEDERAL">DEPUTADO FEDERAL</option>
                  <option value="SENADOR">SENADOR</option>
                </select>
              </div>

              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Tipo de Plano</label>
                <select
                  name="planoTipo"
                  value={form.planoTipo}
                  onChange={handleChange}
                >
                  <option value="BRONZE">BRONZE</option>
                  <option value="PRATA">PRATA</option>
                  <option value="OURO">OURO</option>
                  <option value="PLATINA">PLATINA</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="parlamentar@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Senha</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  value={form.password}
                  onChange={handleChange}
                  maxLength={32}
                />
                <div className={styles.charCounter}>
                  {form.password.length} / 32 caracteres
                </div>
                {errors.password && (
                  <span className={styles.error}>{errors.password}</span>
                )}
              </div>
            </div>

            <div className={styles.buttonGroupColumn}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.fullButton}`}
                onClick={() => setStep(2)}
              >
                Próximo: Endereço
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnOutline}`}
                onClick={() => navigate("/")}
              >
                Ir para página inicial
              </button>
            </div>
          </div>

          <div
            className={`${styles.formStep} ${step === 2 ? styles.formStepActive : ""}`}
          >
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label>Contato (Telefone)</label>
                <input
                  name="contato"
                  type="text"
                  placeholder="55 (99) 99999-9999"
                  value={form.contato}
                  onChange={handleChange}
                  maxLength={21}
                />
                {errors.contato && (
                  <span className={styles.error}>{errors.contato}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>CEP</label>
                <input
                  name="cep"
                  type="text"
                  placeholder="00000-000"
                  value={form.cep}
                  onChange={handleChange}
                  maxLength={9}
                  inputMode="numeric"
                />
                {errors.cep && (
                  <span className={styles.error}>{errors.cep}</span>
                )}
              </div>

              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Logradouro</label>
                <input
                  name="logradouro"
                  type="text"
                  placeholder="Avenida Paulista"
                  value={form.logradouro}
                  onChange={handleChange}
                />
                {errors.logradouro && (
                  <span className={styles.error}>{errors.logradouro}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Número</label>
                <input
                  name="numeroResidencia"
                  type="text"
                  placeholder="100"
                  value={form.numeroResidencia}
                  onChange={handleChange}
                />
                {errors.numeroResidencia && (
                  <span className={styles.error}>
                    {errors.numeroResidencia}
                  </span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Complemento</label>
                <input
                  name="complemento"
                  type="text"
                  placeholder="Apto, Bloco..."
                  value={form.complemento}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Bairro</label>
                <input
                  name="bairro"
                  type="text"
                  placeholder="Bairro"
                  value={form.bairro}
                  onChange={handleChange}
                />
                {errors.bairro && (
                  <span className={styles.error}>{errors.bairro}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Cidade</label>
                <input
                  name="cidade"
                  type="text"
                  placeholder="Cidade"
                  value={form.cidade}
                  onChange={handleChange}
                />
                {errors.cidade && (
                  <span className={styles.error}>{errors.cidade}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>UF</label>
                <select name="uf" value={form.uf} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
                {errors.uf && <span className={styles.error}>{errors.uf}</span>}
              </div>
            </div>

            <div className={styles.buttonGroupRow}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={() => setStep(1)}
              >
                Voltar
              </button>
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Finalizar Cadastro
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnOutline}`}
                onClick={() => navigate("/")}
              >
                Ir para página inicial
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.visualContainer}>
        <div className={`${styles.blob} ${styles.blobA}`}></div>
        <div className={`${styles.blob} ${styles.blobB}`}></div>
        <div className={styles.glassCard}>
          <div className={styles.iconLarge}>🏛️</div>
          <h2>Tecnologia para Governança</h2>
          <p>
            "Facilitando a gestão pública com transparência e eficiência.
            Cadastre seu gabinete e organize sua atuação parlamentar."
          </p>
        </div>
      </div>
    </div>
  );
}
