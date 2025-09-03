     document.addEventListener('DOMContentLoaded', function() {
            // Elementos de inicio de sesión
            const loginModal = document.getElementById('loginModal');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const loginBtn = document.getElementById('loginBtn');
            const loginError = document.getElementById('loginError');
            const logoutBtn = document.getElementById('logoutBtn');
            const googleLoginBtn = document.getElementById('googleLoginBtn');
            const connectionWarning = document.getElementById('connectionWarning');
            const connectionStatusBar = document.getElementById('connectionStatusBar');
            
            // Elementos de la consola
            const consoleContainer = document.getElementById('consoleContainer');
            const consoleContent = document.getElementById('consoleContent');
            const clearConsoleBtn = document.getElementById('clearConsoleBtn');
            
            // Elementos de la aplicación
            const editor = document.getElementById('contentEditor');
            const publishBtn = document.getElementById('publishBtn');
            const progressBar = document.getElementById('progressBar');
            const successMessage = document.getElementById('successMessage');
            const errorMessage = document.getElementById('errorMessage');
            const connectionError = document.getElementById('connectionError');
            const blogIdElement = document.getElementById('blogId');
            const charCount = document.getElementById('charCount');
            const successResponse = document.getElementById('successResponse');
            const errorResponse = document.getElementById('errorResponse');
            const errorText = document.getElementById('errorText');
            const connectionErrorText = document.getElementById('connectionErrorText');
            const connectionStatus = document.getElementById('connectionStatus');
            const sessionIdElement = document.getElementById('sessionId');
            const retryConnectionBtn = document.getElementById('retryConnectionBtn');
            const debugInfo = document.getElementById('debugInfo');
            const debugStatus = document.getElementById('debugStatus');
            const debugContent = document.getElementById('debugContent');
            const debugToggle = document.getElementById('debugToggle');
            const editorContainer = document.getElementById('editorContainer');
            const phase1Title = document.getElementById('phase1Title');
            const phase2Title = document.getElementById('phase2Title');
            const phase3Title = document.getElementById('phase3Title');
            const phase1Requests = document.getElementById('phase1Requests');
            const phase2Requests = document.getElementById('phase2Requests');
            const phase3Requests = document.getElementById('phase3Requests');
            
            // Variables de estado
            let isAuthenticated = false;
            let isOnline = true;
            let sessionData = {
                sid: null,
                userId: null,
                email: null
            };
            
            // URL de OAuth de Google proporcionada
            const googleOAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?gsiwebsdk=3&client_id=463858969175-f3r6krchk06lgjq9n30snjmh5havi495.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=storagerelay%3A%2F%2Fhttps%2Foluolu.com%3Fid%3Dauth528749&prompt=consent&access_type=offline&response_type=code&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&flowName=GeneralOAuthFlow";
            
            // Configurar el botón de inicio de sesión con Google
            googleLoginBtn.addEventListener('click', function() {
                openGoogleOAuthPopup();
            });
            
            // Configurar el botón para limpiar la consola
            clearConsoleBtn.addEventListener('click', function() {
                consoleContent.innerHTML = '';
                addConsoleLog('Consola limpiada', 'info');
            });
            
            // Función para abrir la ventana emergente de Google OAuth
            function openGoogleOAuthPopup() {
                addConsoleLog('Iniciando autenticación con Google...', 'info');
                
                // Abrir ventana emergente
                const popupWidth = 500;
                const popupHeight = 600;
                const left = (screen.width - popupWidth) / 2;
                const top = (screen.height - popupHeight) / 2;
                
                const popup = window.open(
                    googleOAuthUrl,
                    'GoogleOAuth',
                    `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`
                );
                
                if (!popup) {
                    addConsoleLog('Error: El navegador bloqueó la ventana emergente. Permite ventanas emergentes para este sitio.', 'error');
                    loginError.textContent = 'El navegador bloqueó la ventana emergente. Permite ventanas emergentes para este sitio.';
                    return;
                }
                
                addConsoleLog('Ventana emergente de Google OAuth abierta', 'success');
                
                // Verificar periódicamente si la ventana emergente se cerró
                const checkPopup = setInterval(function() {
                    if (popup.closed) {
                        clearInterval(checkPopup);
                        addConsoleLog('Ventana emergente cerrada. Procesando autenticación...', 'info');
                        
                        // Simular autenticación exitosa después de cerrar la ventana
                        setTimeout(function() {
                            simulateGoogleAuthSuccess();
                        }, 1500);
                    }
                }, 500);
            }
            
            // Simular autenticación exitosa con Google
            function simulateGoogleAuthSuccess() {
                addConsoleLog('Autenticación con Google exitosa', 'success');
                addConsoleLog('Obteniendo token de acceso...', 'info');
                
                // Simular obtención de token
                setTimeout(function() {
                    addConsoleLog('Token de acceso recibido: gtoken_abc123xyz456', 'success');
                    
                    // Simular intercambio de token por sesión
                    addConsoleLog('Intercambiando token de Google por sesión de OluOlu...', 'info');
                    
                    setTimeout(function() {
                        addConsoleLog('Sesión obtenida correctamente. SID: sess_google_789xyz', 'success');
                        
                        // Completar el proceso de autenticación
                        completeGoogleLogin();
                    }, 1000);
                }, 1000);
            }
            
            // Completa el proceso de inicio de sesión con Google
            function completeGoogleLogin() {
                // Guardar datos de sesión
                sessionData = {
                    sid: 'sess_google_' + Math.random().toString(36).substring(2) + Date.now().toString(36),
                    userId: 'user_google_' + Math.floor(Math.random() * 10000),
                    email: 'usuario@gmail.com'
                };
                
                // Actualizar UI
                isAuthenticated = true;
                loginModal.style.display = 'none';
                editorContainer.style.display = 'block';
                phase1Title.style.display = 'block';
                phase2Title.style.display = 'block';
                phase3Title.style.display = 'block';
                phase1Requests.style.display = 'block';
                phase2Requests.style.display = 'block';
                phase3Requests.style.display = 'block';
                logoutBtn.style.display = 'block';
                
                connectionStatus.innerHTML = '<i class="fas fa-check-circle"></i> Autenticado con Google';
                connectionStatus.className = 'session-status status-connected';
                sessionIdElement.textContent = `SID: ${sessionData.sid.substring(0, 20)}...`;
                sessionIdElement.title = sessionData.sid;
                
                debugStatus.textContent = 'Estado: Autenticado con Google';
                addConsoleLog('Sesión con Google iniciada correctamente', 'success');
                addDebugLog('Sesión con Google iniciada correctamente');
                
                // Simular peticiones de inicialización
                simulateInitialRequests();
            }
            
            // Simular peticiones iniciales después del login
            function simulateInitialRequests() {
                addConsoleLog('Cargando datos de usuario...', 'info');
                
                setTimeout(function() {
                    addConsoleLog('GET https://api2.oluolu.io/v1/user/profile - 200 OK', 'success');
                    
                    setTimeout(function() {
                        addConsoleLog('GET https://api2.oluolu.io/v1/user/settings - 200 OK', 'success');
                        
                        setTimeout(function() {
                            addConsoleLog('Sistema inicializado correctamente', 'success');
                        }, 500);
                    }, 600);
                }, 800);
            }
            
            // Función para agregar logs a la consola
            function addConsoleLog(message, type = 'info') {
                const timestamp = new Date().toLocaleTimeString();
                const logEntry = document.createElement('div');
                logEntry.className = `log-entry ${type === 'error' ? 'log-error' : type === 'success' ? 'log-success' : ''}`;
                
                logEntry.innerHTML = `
                    <span class="log-timestamp">[${timestamp}]</span>
                    <span class="log-message">${message}</span>
                `;
                
                consoleContent.appendChild(logEntry);
                consoleContent.scrollTop = consoleContent.scrollHeight;
                
                // También mostrar en consola del navegador
                if (type === 'error') {
                    console.error(message);
                } else if (type === 'success') {
                    console.log('%c' + message, 'color: green; font-weight: bold');
                } else {
                    console.log(message);
                }
            }
            
            // Función para agregar logs de depuración
            function addDebugLog(message) {
                const timestamp = new Date().toLocaleTimeString();
                const logEntry = document.createElement('div');
                logEntry.textContent = `[${timestamp}] ${message}`;
                debugContent.appendChild(logEntry);
                debugContent.scrollTop = debugContent.scrollHeight;
            }
            
            // Toggle para mostrar/ocultar detalles de depuración
            debugToggle.addEventListener('click', function() {
                if (debugContent.style.display === 'block') {
                    debugContent.style.display = 'none';
                    debugToggle.textContent = 'Mostrar detalles';
                } else {
                    debugContent.style.display = 'block';
                    debugToggle.textContent = 'Ocultar detalles';
                }
            });
            
            // Inicializar consola
            addConsoleLog('Sistema de consola inicializado', 'info');
            
            // Simular chequeo de conexión al cargar
            setTimeout(function() {
                addConsoleLog('Verificando conectividad...', 'info');
                
                setTimeout(function() {
                    addConsoleLog('Conexión a internet verificada', 'success');
                    addConsoleLog('Conectado a https://api2.oluolu.io', 'success');
                }, 800);
            }, 1000);
        });
