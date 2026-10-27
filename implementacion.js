window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span>
        <span>Guía de implementación</span>
    </div>
    <p>
        Esta sección te acompaña en la puesta en práctica. No es una receta cerrada: cada paso debe
        adaptarse al laboratorio y documentarse con evidencias. Trabaja por fases, prueba cada cambio
        y vuelve atrás si algo deja de funcionar.
    </p>
</div>

<div class="callout callout-error">
    <div class="callout-title"><span>🚫</span> Límites de seguridad</div>
    <p>
        Ejecuta las pruebas únicamente en el laboratorio autorizado. No escanees redes públicas, no
        ataques equipos de terceros y no utilices datos reales de pacientes. Si una práctica puede
        afectar al centro, detente y consulta con el profesorado.
    </p>
</div>

<h3>6.1. Fase 1: preparación y línea base</h3>
<ol class="list-decimal pl-6 space-y-3 my-4">
    <li><strong>Documenta el estado inicial</strong> con una instantánea de las máquinas virtuales y una tabla de configuración.</li>
    <li><strong>Comprueba la conectividad</strong> entre las zonas del laboratorio y guarda el resultado.</li>
    <li><strong>Realiza un inventario técnico</strong> con nombres, direcciones, sistemas operativos, servicios y responsables.</li>
    <li><strong>Crea el repositorio de evidencias</strong> con carpetas para inventario, red, sistemas, copias, detección y concienciación.</li>
    <li><strong>Define la línea base</strong> de puertos abiertos, usuarios y servicios que deberían existir.</li>
</ol>

<div class="callout callout-info">
    <div class="callout-title"><span>🔎</span> Reconocimiento autorizado</div>
    <p>Ejemplo de comprobación inicial de un equipo del laboratorio. Sustituye la dirección por la que corresponda:</p>
<pre class="text-xs overflow-x-auto bg-slate-900 text-green-400 p-4 rounded-lg">
nmap -sV -O 192.168.30.10
nmap -sS -p 22,80,139,443,445,3389 192.168.30.0/24
</pre>
    <p class="text-sm mt-3">Guarda la salida y explica qué servicios son necesarios y cuáles deberían cerrarse.</p>
</div>

<h3>6.2. Fase 2: segmentación y firewall</h3>
<h4>6.2.1. Configurar VLAN y direccionamiento</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Crea las VLAN acordadas en el switch y en el firewall.</li>
    <li>Asigna puertos de acceso a cada VLAN y configura los enlaces troncales necesarios.</li>
    <li>Documenta el plan de direcciones y evita solapamientos.</li>
    <li>Comprueba que los equipos de una VLAN no alcanzan por defecto a otras.</li>
</ul>

<h4>6.2.2. Crear reglas de firewall</h4>
<div class="callout callout-warning">
    <div class="callout-title"><span>⚠️</span> Orden de las reglas</div>
    <p>
        Las reglas se evalúan de arriba abajo. Coloca primero las excepciones necesarias y después la
        denegación por defecto. Comenta cada regla con su finalidad y revisa que no haya sombras o
        duplicados.
    </p>
</div>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Comprobación</th>
            <th class="border border-slate-200 p-3 text-left">Resultado esperado</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Desde invitados a servidores</td>
            <td class="border border-slate-200 p-3">Bloqueado y registrado</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Desde clínica a aplicación</td>
            <td class="border border-slate-200 p-3">Permitido solo el puerto necesario</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Desde administración a servidores</td>
            <td class="border border-slate-200 p-3">Permitido con registro</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Acceso remoto sin MFA</td>
            <td class="border border-slate-200 p-3">Rechazado</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>6.3. Fase 3: identidades y accesos</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Crea las unidades organizativas y los grupos de seguridad según el diseño.</li>
    <li>Configura políticas de contraseña y bloqueo de cuentas.</li>
    <li>Separa las cuentas de administración de las cuentas de uso diario.</li>
    <li>Activa MFA en el acceso remoto y en las cuentas privilegiadas.</li>
    <li>Documenta el procedimiento de alta, cambio de puesto y baja.</li>
    <li>Revisa permisos de carpetas compartidas y elimina accesos heredados innecesarios.</li>
</ul>

<div class="callout callout-info">
    <div class="callout-title"><span>🪟</span> Comprobaciones en Windows</div>
<pre class="text-xs overflow-x-auto bg-slate-900 text-green-400 p-4 rounded-lg">
whoami /groups
net user
Get-LocalGroupMember -Group "Administradores"
Get-SmbShare
Get-SmbShareAccess -Name "Documentos"
</pre>
    <p class="text-sm mt-3">Adapta los nombres y comprueba que los permisos coinciden con la función de cada grupo.</p>
</div>

<h3>6.4. Fase 4: hardening de sistemas</h3>
<h4>6.4.1. Servidores Windows</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Deshabilitar servicios y protocolos innecesarios, especialmente SMBv1.</li>
    <li>Restringir RDP a la red de administración y exigir MFA.</li>
    <li>Activar auditoría de inicios de sesión, cambios de privilegios y accesos a objetos.</li>
    <li>Aplicar actualizaciones y revisar el estado de Windows Defender.</li>
    <li>Configurar el firewall del sistema con reglas explícitas.</li>
    <li>Revisar cuentas locales, contraseñas por defecto y tareas programadas.</li>
</ul>

<h4>6.4.2. Servidores Linux</h4>
<div class="callout callout-info">
    <div class="callout-title"><span>🐧</span> Línea base de ejemplo</div>
<pre class="text-xs overflow-x-auto bg-slate-900 text-green-400 p-4 rounded-lg">
# Revisar puertos en escucha
ss -tulpn

# Revisar usuarios y privilegios
cat /etc/passwd
getent group sudo

# Estado del firewall
sudo ufw status verbose

# Intentos de acceso fallidos
sudo journalctl -u ssh --since "today"
</pre>
    <p class="text-sm mt-3">No apliques comandos sin entender qué hacen. Documenta cada cambio y su justificación.</p>
</div>

<h4>6.4.3. Equipos cliente</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Eliminar software no autorizado y cuentas locales innecesarias.</li>
    <li>Activar cifrado de disco cuando sea posible.</li>
    <li>Configurar bloqueo automático de pantalla y actualizaciones.</li>
    <li>Revisar permisos de instalación y uso de dispositivos USB.</li>
    <li>Instalar un gestor de contraseñas y formar en su uso.</li>
</ul>

<h3>6.5. Fase 5: detección y monitorización</h3>
<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Despliega Wazuh o la herramienta acordada en el laboratorio.</li>
    <li>Instala los agentes en los servidores y en al menos un cliente.</li>
    <li>Configura la recogida de logs de autenticación, firewall y sistema.</li>
    <li>Crea reglas o alertas para accesos fallidos repetidos, cambios de permisos y servicios críticos detenidos.</li>
    <li>Prueba una alerta controlada y documenta el evento, la detección y la respuesta.</li>
    <li>Ajusta los umbrales para evitar ruido excesivo.</li>
</ol>

<div class="callout callout-warning">
    <div class="callout-title"><span>📊</span> Alerta útil frente a alerta ruidosa</div>
    <p>
        Una alerta debe indicar qué ha pasado, en qué equipo, con qué gravedad y qué acción se espera.
        Si no puedes actuar sobre ella, probablemente no sea una alerta útil. Documenta cuántas alertas
        revisas y cuántas acaban siendo falsos positivos.
    </p>
</div>

<h3>6.6. Fase 6: análisis de vulnerabilidades</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Actualiza las firmas de OpenVAS/Greenbone antes del escaneo.</li>
    <li>Realiza un escaneo autenticado y otro no autenticado sobre el laboratorio.</li>
    <li>Clasifica los hallazgos por criticidad y comprueba si son explotables en el contexto.</li>
    <li>Prioriza las vulnerabilidades críticas y altas con una medida concreta.</li>
    <li>Repite el escaneo después de aplicar las correcciones y compara resultados.</li>
</ul>

<div class="callout callout-info">
    <div class="callout-title"><span>🧪</span> Evidencias del antes y el después</div>
    <p>
        Guarda el informe inicial y el final. La mejora no se demuestra con una afirmación, sino con
        la comparación de hallazgos, capturas y explicación de las medidas aplicadas.
    </p>
</div>

<h3>6.7. Fase 7: copias y restauración</h3>
<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Define qué datos y configuraciones son críticos.</li>
    <li>Configura una copia automatizada y otra manual de comprobación.</li>
    <li>Cifra las copias y protege las credenciales de acceso.</li>
    <li>Guarda una copia fuera del equipo principal.</li>
    <li>Realiza una restauración completa en un entorno de prueba.</li>
    <li>Documenta el resultado, los errores encontrados y el procedimiento corregido.</li>
</ol>

<div class="callout callout-success">
    <div class="callout-title"><span>✅</span> Criterio de aceptación</div>
    <p>
        La restauración debe permitir recuperar el servicio y los datos críticos sin depender de la
        copia original. Si no puedes demostrarlo, la medida no está completa.
    </p>
</div>

<h3>6.8. Fase 8: concienciación y phishing simulado</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Diseña una campaña de phishing simulado con el visto bueno del profesorado.</li>
    <li>No incluyas datos reales ni enlaces maliciosos; utiliza un entorno controlado.</li>
    <li>Elabora una guía breve con señales de alarma y pasos a seguir.</li>
    <li>Mide el resultado de forma agregada y anónima.</li>
    <li>Realiza una sesión de refuerzo con ejemplos y preguntas frecuentes.</li>
</ul>

<h3>6.9. Fase 9: documentación y cierre</h3>
<div class="callout callout-info">
    <div class="callout-title"><span>📚</span> Expediente final</div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Inventario actualizado y matriz de riesgos revisada.</li>
        <li>Diagramas de red y tabla de reglas de firewall.</li>
        <li>Guía de hardening con comandos y capturas.</li>
        <li>Informe de vulnerabilidades antes y después.</li>
        <li>Prueba de restauración documentada.</li>
        <li>Plan de respuesta y guía de concienciación.</li>
        <li>Registro de cambios, dificultades y decisiones pendientes.</li>
    </ul>
</div>

<h3>6.10. Sugerencias para completar la implementación</h3>
<div class="callout callout-success">
    <div class="callout-title"><span>✍️</span> Cómo avanzar sin bloquearte</div>
    <ol class="list-decimal pl-6 space-y-2">
        <li>Empieza por una medida pequeña y comprobable: por ejemplo, separar invitados y verificar que no acceden al NAS.</li>
        <li>Documenta el cambio antes y después; si algo falla, tendrás una pista clara.</li>
        <li>Pide revisión entre iguales antes de pasar a la siguiente fase.</li>
        <li>Si una herramienta no funciona, registra el error, la alternativa probada y la decisión tomada.</li>
        <li>No dejes la documentación para el final: redacta mientras implementas.</li>
    </ol>
</div>
`;
