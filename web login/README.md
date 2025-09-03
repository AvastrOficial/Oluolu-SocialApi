Interfaz de inicio de sesión

Permite iniciar sesión de tres formas:

Con usuario y contraseña (en línea, validando contra la API de OluOlu).

Con Google OAuth 2.0 (redirigiendo a la página oficial de Google).

En modo offline (simulación sin conexión, con un SID ficticio).

Gestión de sesión

Guarda un SID y datos del usuario cuando el login es exitoso.

Muestra el estado de la sesión en la interfaz (autenticado / no autenticado).

Permite cerrar sesión limpiando datos y restableciendo la UI.

Conectividad online / offline

Verifica periódicamente si hay conexión con el servidor (HEAD https://api2.oluolu.io).

Si no hay internet, activa modo offline:

Autenticación simulada.

Publicación simulada (guarda en localStorage para enviar después).

Editor de contenido y publicación

El usuario escribe un texto en un editor.

Al presionar Publicar:

En modo online: realiza varias peticiones a la API de OluOlu para crear y publicar un blog.

En modo offline: guarda la publicación localmente y muestra un mensaje de éxito simulado.

Proceso de publicación con fases

Fase 1: Inicializa la creación del blog.

Fase 2: Envía el contenido a POST /v1/blogs.

Fase 3: Publica el blog en POST /v1/blogs/{id}/publish.

Fase 4: Verifica la publicación con GET /v1/system-notifications/check.

Depuración y logs

Registra cada paso en un panel de debug con timestamps.

Permite alternar la visibilidad de estos logs.

Muestra errores detallados si fallan las peticiones.
