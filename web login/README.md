# 🚀 Interfaz de inicio de sesión OluOlu

---

## 🔐 Métodos de inicio de sesión

| Método                | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Usuario y contraseña** | Login online validando contra la **API de OluOlu**.                        |
| **Google OAuth 2.0**    | Redirige a la página oficial de Google para autenticación segura.           |
| **Modo Offline**        | Simula autenticación con un **SID ficticio** cuando no hay conexión a internet. |

---

## 🧑‍💻 Gestión de sesión

```txt
✔ Guarda un SID y datos del usuario cuando el login es exitoso.  
✔ Muestra el estado de la sesión en la interfaz (autenticado / no autenticado).  
✔ Permite cerrar sesión limpiando datos y restableciendo la UI.  
