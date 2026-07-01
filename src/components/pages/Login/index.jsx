import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, preencha o email e a senha.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data?.token) {
          localStorage.setItem("authToken", data.token);

          try {
            const decoded = jwtDecode(data.token);
            const masterUserId = decoded?.id || decoded?.uuid;

            if (masterUserId) {
              navigate(`/master-users/${masterUserId}/dashboard`);
            } else {
              alert(
                "Login efetuado, mas ID do usuário não encontrado no token.",
              );
            }
          } catch (_decodeError) {
            alert("Login efetuado, mas token inválido.");
          }
        } else {
          alert("Login efetuado, mas token não recebido.");
        }
      } else if (response.status === 401) {
        alert("Email ou senha inválidos.");
      } else {
        const responseText = await response.text();
        const message = responseText || `Status ${response.status}`;
        alert(`Erro ao efetuar login: ${message}`);
      }
    } catch (_error) {
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className={styles.loginRoot}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}></div> POLITIC BASE TI
        </div>

        <h1>Bem-vindo de volta!</h1>
        <p className={styles.subtitle}>Acesse seu painel de parlamentar.</p>

        <form id="loginForm" onSubmit={handleSubmit} autoComplete="off">
          <div className={`${styles.formStep} ${styles.formStepActive}`}>
            <div className={styles.formGridLogin}>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="parlamentar@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Senha</label>
                <div className={styles.passwordWrap}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className={styles.passwordInput}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className={styles.eyeButton}
                    aria-label={
                      showPassword ? "Ocultar senha" : "Mostrar senha"
                    }
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.fullButton}`}
            >
              Entrar
            </button>
          </div>
        </form>

        <div className={styles.footerLinks}>
          <a href="#">Esqueceu sua senha?</a>
          <span>
            Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </span>
        </div>
      </div>

      <div className={styles.visualContainer}>
        <div className={`${styles.blob} ${styles.blobA}`}></div>
        <div className={`${styles.blob} ${styles.blobB}`}></div>

        <div className={styles.glassCard}>
          <div className={styles.iconLarge}>🔑</div>
          <h2>Acesso Seguro</h2>
          <p>
            "Seus dados estão protegidos. A tecnologia da Politic Base TI
            garante a segurança e a integridade das suas informações."
          </p>
        </div>
      </div>
    </div>
  );
}
