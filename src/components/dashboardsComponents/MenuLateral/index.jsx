import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./menuLateral.module.css";

export default function MenuLateral({ masterUserId }) {
  const [openMenus, setOpenMenus] = useState({
    eleitores: false,
    acoesSociais: false,
  });
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("Carregando...");
  const [isLoadingUserName, setIsLoadingUserName] = useState(true);
  const navigate = useNavigate();

  const resolveFirstName = (value) => {
    if (!value) return "";

    if (typeof value === "string") {
      return value.trim().split(/\s+/).filter(Boolean)[0] || "";
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        const resolved = resolveFirstName(item);
        if (resolved) return resolved;
      }
      return "";
    }

    if (typeof value === "object") {
      const directKeys = [
        "primeiroNome",
        "firstName",
        "nome",
        "name",
        "userName",
      ];

      for (const key of directKeys) {
        const resolved = resolveFirstName(value[key]);
        if (resolved) return resolved;
      }

      for (const nestedValue of Object.values(value)) {
        const resolved = resolveFirstName(nestedValue);
        if (resolved) return resolved;
      }
    }

    return "";
  };

  const resolveAvatarText = (value) => {
    const firstName = resolveFirstName(value);
    if (!firstName) return "???";

    return firstName.slice(0, 3).toUpperCase();
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    let isMounted = true;
    let initialName = "";

    if (token) {
      try {
        const decoded = jwtDecode(token);
        initialName = resolveFirstName(decoded);
        if (initialName && isMounted) {
          setUserName(initialName);
        }
      } catch (_error) {
        initialName = "";
      }
    }

    if (!masterUserId) {
      if (isMounted) {
        setIsLoadingUserName(false);
      }
      return;
    }

    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const controller = new AbortController();

    fetch("http://localhost:8080/politico/meus-dados", {
      headers,
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        const firstName = resolveFirstName(data);
        const roleName =
          data?.cargoPolitico || data?.cargo_politico || data?.role || "";

        if (isMounted && firstName) {
          setUserName(firstName);
        }

        if (isMounted && roleName) {
          setUserRole(String(roleName).trim());
        } else if (isMounted) {
          setUserRole("Master User");
        }
      })
      .catch(() => {
        if (isMounted && !initialName) {
          setUserName("");
        }

        if (isMounted) {
          setUserRole("Master User");
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingUserName(false);
        }
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [masterUserId]);

  const toggleMenu = (menuKey) => {
    setOpenMenus((current) => ({
      ...current,
      [menuKey]: !current[menuKey],
    }));
  };

  const handleLogout = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("authToken");

    fetch("http://localhost:8080/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      credentials: "include",
    }).finally(() => {
      localStorage.removeItem("authToken");
      navigate("/");
    });
  };

  return (
    <aside className={styles.dashboardSidebar}>
      <div className={styles.logo}>🏛️ PoliticBase V3</div>

      <nav className={styles.navigation}>
        <ul>
          <li className={styles.active}>📊 Visão Geral</li>

          <li>
            <Link to={`/master-users/${masterUserId}/dashboard/aba-assessores`}>
              👥 Assessores
            </Link>
          </li>

          <li
            className={`${styles.hasSubmenu} ${openMenus.eleitores ? styles.open : ""}`}
          >
            <button
              type="button"
              className={styles.menuItem}
              onClick={() => toggleMenu("eleitores")}
            >
              <span>👤 Eleitores</span>
              <span className={styles.submenuArrow}>▶</span>
            </button>
            <ul className={styles.submenu}>
              <li>
                <a href="#">📋 Dashboard</a>
              </li>
              <li>
                <a href="#">📄 Lista Completa</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">📝 Demandas</a>
          </li>

          <li
            className={`${styles.hasSubmenu} ${openMenus.acoesSociais ? styles.open : ""}`}
          >
            <button
              type="button"
              className={styles.menuItem}
              onClick={() => toggleMenu("acoesSociais")}
            >
              <span>🌱 Ações Sociais</span>
              <span className={styles.submenuArrow}>▶</span>
            </button>
            <ul className={styles.submenu}>
              <li>
                <a href="#">📋 Dashboard</a>
              </li>
              <li>
                <a href="#">📄 Lista Completa</a>
              </li>
              <li>
                <a href="#">🏥 Atendimento Social</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">📅 Agenda</a>
          </li>

          <li>📄 Relatórios</li>

          <li>
            <a href="#">📬 Notificações</a>
          </li>

          <li>
            <a href="#">💳 Pagamentos</a>
          </li>

          <li>
            <a href="#">🆔 Meus Dados</a>
          </li>

          <li>
            <a href="#">⚙️ Configurações</a>
          </li>
        </ul>
      </nav>

      <div className={styles.userFooter}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            {isLoadingUserName ? "..." : resolveAvatarText(userName)}
          </div>
          <div>
            <div className={styles.userName}>
              {userName || (isLoadingUserName ? "Carregando..." : "Usuário")}
            </div>
            <div className={styles.userRole}>{userRole}</div>
          </div>
        </div>

        <a href="/" className={styles.logout} onClick={handleLogout}>
          ↩ Sair do Sistema
        </a>
      </div>
    </aside>
  );
}
