window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span>
        <span>Herramientas de apoyo</span>
    </div>
    <p>
        Esta sección reúne utilidades, plantillas y comandos que pueden ayudarte durante el proyecto.
        Úsalos como punto de partida y adáptalos a tu laboratorio. Todo comando debe entenderse antes
        de ejecutarse.
    </p>
</div>

<h3>8.1. Caja de herramientas recomendada</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Área</th>
            <th class="border border-slate-200 p-3 text-left">Herramientas</th>
            <th class="border border-slate-200 p-3 text-left">Uso en el proyecto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Inventario y documentación</td>
            <td class="border border-slate-200 p-3">Hoja de cálculo, draw.io, Markdown, Git</td>
            <td class="border border-slate-200 p-3">Activos, diagramas, procedimientos y versiones.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Red</td>
            <td class="border border-slate-200 p-3">pfSense, Wireshark, Nmap, ipcalc</td>
            <td class="border border-slate-200 p-3">Segmentación, diagnóstico y comprobación de reglas.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Sistemas</td>
            <td class="border border-slate-200 p-3">PowerShell, Bash, UFW, Windows Defender Firewall</td>
            <td class="border border-slate-200 p-3">Hardening, auditoría y automatización básica.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Detección</td>
            <td class="border border-slate-200 p-3">Wazuh, Sysmon, visor de eventos, journalctl</td>
            <td class="border border-slate-200 p-3">Centralización de logs y alertas.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Vulnerabilidades</td>
            <td class="border border-slate-200 p-3">OpenVAS/Greenbone, Nmap NSE</td>
            <td class="border border-slate-200 p-3">Escaneo, clasificación y verificación de correcciones.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Copias</td>
            <td class="border border-slate-200 p-3">Veeam, rsync, snapshots, VeraCrypt</td>
            <td class="border border-slate-200 p-3">Copias cifradas y pruebas de restauración.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Concienciación</td>
            <td class="border border-slate-200 p-3">Generador de campañas, formularios, cartelería</td>
            <td class="border border-slate-200 p-3">Phishing simulado y formación interna.</td>
        </tr>
    </tbody>
</table>

<h3>8.2. Plantilla de inventario de activos</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Activo</th>
            <th class="border border-slate-200 p-3 text-left">Tipo</th>
            <th class="border border-slate-200 p-3 text-left">Ubicación</th>
            <th class="border border-slate-200 p-3 text-left">Responsable</th>
            <th class="border border-slate-200 p-3 text-left">Criticidad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">A-01</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Servidor / cliente / servicio / dato</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Alta / media / baja</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">A-02</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>8.3. Plantilla de matriz de riesgos</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Riesgo</th>
            <th class="border border-slate-200 p-3 text-left">Activo afectado</th>
            <th class="border border-slate-200 p-3 text-left">Probabilidad</th>
            <th class="border border-slate-200 p-3 text-left">Impacto</th>
            <th class="border border-slate-200 p-3 text-left">Nivel</th>
            <th class="border border-slate-200 p-3 text-left">Medida</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Acceso no autorizado por contraseña débil</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Alta / media / baja</td>
            <td class="border border-slate-200 p-3">Alto / medio / bajo</td>
            <td class="border border-slate-200 p-3">Crítico / alto / medio / bajo</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Phishing con robo de credenciales</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Pérdida de copias por no probarlas</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>8.4. Plantilla de reglas de firewall</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Nº</th>
            <th class="border border-slate-200 p-3 text-left">Origen</th>
            <th class="border border-slate-200 p-3 text-left">Destino</th>
            <th class="border border-slate-200 p-3 text-left">Puerto / servicio</th>
            <th class="border border-slate-200 p-3 text-left">Acción</th>
            <th class="border border-slate-200 p-3 text-left">Justificación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">1</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Permitir / denegar</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">2</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>8.5. Plantilla de informe de incidente</h3>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h4 class="font-bold text-slate-700 mb-3">INFORME DE INCIDENTE DE SEGURIDAD</h4>
    <table class="w-full border-collapse my-4">
        <tr>
            <td class="border border-slate-200 p-2 font-bold w-48">ID del incidente</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-white">
            <td class="border border-slate-200 p-2 font-bold">Fecha y hora de detección</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-2 font-bold">Detectado por</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-white">
            <td class="border border-slate-200 p-2 font-bold">Severidad</td>
            <td class="border border-slate-200 p-2">Crítica / alta / media / baja</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-2 font-bold">Sistemas afectados</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-white">
            <td class="border border-slate-200 p-2 font-bold">Descripción</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-2 font-bold">Evidencias recogidas</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-white">
            <td class="border border-slate-200 p-2 font-bold">Contención aplicada</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-2 font-bold">Causa raíz</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-white">
            <td class="border border-slate-200 p-2 font-bold">Recuperación y validación</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-2 font-bold">Medidas correctivas</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-white">
            <td class="border border-slate-200 p-2 font-bold">Responsable del cierre</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
    </table>
</div>

<h3>8.6. Plantilla de verificación de copias</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Comprobación</th>
            <th class="border border-slate-200 p-3 text-left">Resultado</th>
            <th class="border border-slate-200 p-3 text-left">Observaciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">La copia programada se ejecutó</td>
            <td class="border border-slate-200 p-3">Sí / no</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">El tamaño y el número de archivos son coherentes</td>
            <td class="border border-slate-200 p-3">Sí / no</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">La copia está cifrada y protegida</td>
            <td class="border border-slate-200 p-3">Sí / no</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Se ha restaurado un archivo de prueba</td>
            <td class="border border-slate-200 p-3">Sí / no</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Se ha restaurado un servicio completo</td>
            <td class="border border-slate-200 p-3">Sí / no</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Se ha medido el resultado y documentado</td>
            <td class="border border-slate-200 p-3">Sí / no</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>8.7. Comandos de apoyo</h3>
<div class="callout callout-info">
    <div class="callout-title"><span>🖥️</span> Windows PowerShell</div>
<pre class="text-xs overflow-x-auto bg-slate-900 text-green-400 p-4 rounded-lg">
# Estado del firewall
Get-NetFirewallProfile

# Reglas de firewall activas
Get-NetFirewallRule | Where-Object Enabled -eq True | Select-Object DisplayName, Direction, Action

# Últimos inicios de sesión fallidos
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 20

# Servicios en ejecución
Get-Service | Where-Object Status -eq 'Running'
</pre>
</div>

<div class="callout callout-info">
    <div class="callout-title"><span>🐧</span> Linux</div>
<pre class="text-xs overflow-x-auto bg-slate-900 text-green-400 p-4 rounded-lg">
# Puertos en escucha
ss -tulpn

# Usuarios con shell
getent passwd | grep -E "bash|sh$"

# Estado de UFW
sudo ufw status verbose

# Registros de autenticación
sudo journalctl -u ssh --since "1 hour ago"

# Verificación de integridad de una copia
sha256sum copia.tar.gz
</pre>
</div>

<div class="callout callout-warning">
    <div class="callout-title"><span>⚠️</span> Uso responsable</div>
    <p>
        Los comandos anteriores son ejemplos genéricos. Algunos pueden revelar información sensible
        o modificar la configuración del sistema. Ejecútalos solo en el laboratorio y con autorización.
    </p>
</div>

<h3>8.8. Guía para completar esta sección</h3>
<div class="callout callout-success">
    <div class="callout-title"><span>✍️</span> Aporta tus propias herramientas</div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Añade al menos un script propio, aunque sea sencillo, para automatizar una comprobación.</li>
        <li>Adapta las plantillas a la empresa simulada y elimina los campos que no uses.</li>
        <li>Documenta el propósito, los requisitos y el riesgo de cada comando o script.</li>
        <li>Incluye una captura del resultado y explica cómo interpretarlo.</li>
        <li>Comparte con el equipo las herramientas que mejor te hayan funcionado y justifica por qué.</li>
    </ul>
</div>
`;
