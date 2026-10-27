window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["estado-arte"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span>
        <span>Estado del arte y marco de referencia</span>
    </div>
    <p>
        Antes de proponer soluciones, necesitas conocer qué amenazas afectan a una PYME, qué marcos
        de referencia existen y qué herramientas se utilizan en el sector. Esta sección es una guía
        de investigación: no basta con enumerar productos, hay que comparar y justificar.
    </p>
</div>

<h3>2.1. Panorama actual de amenazas para una PYME</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Amenaza</th>
            <th class="border border-slate-200 p-3 text-left">Cómo se manifiesta</th>
            <th class="border border-slate-200 p-3 text-left">Impacto típico</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Phishing y ingeniería social</td>
            <td class="border border-slate-200 p-3">Correos, mensajes o llamadas que suplantan a un contacto de confianza.</td>
            <td class="border border-slate-200 p-3">Robo de credenciales, fraude, acceso inicial.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Ransomware</td>
            <td class="border border-slate-200 p-3">Cifrado de archivos y petición de rescate.</td>
            <td class="border border-slate-200 p-3">Parada de la actividad, pérdida de datos y coste de recuperación.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Contraseñas débiles o reutilizadas</td>
            <td class="border border-slate-200 p-3">Ataques de fuerza bruta, relleno de credenciales y acceso remoto.</td>
            <td class="border border-slate-200 p-3">Suplantación de identidad y accesos no autorizados.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Sistemas sin actualizar</td>
            <td class="border border-slate-200 p-3">Servicios expuestos con vulnerabilidades conocidas.</td>
            <td class="border border-slate-200 p-3">Ejecución remota de código y escalada de privilegios.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Red plana y Wi-Fi abierta</td>
            <td class="border border-slate-200 p-3">Cualquier dispositivo puede alcanzar servidores y equipos internos.</td>
            <td class="border border-slate-200 p-3">Movimiento lateral y robo de información.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Copias sin probar</td>
            <td class="border border-slate-200 p-3">Backups incompletos, sin cifrar o en el mismo lugar que los datos.</td>
            <td class="border border-slate-200 p-3">Imposibilidad de recuperar el servicio.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>🔎</span> Investiga</div>
    <p>
        Busca al menos dos casos reales de incidentes de ciberseguridad en PYMES o en el sector
        sanitario. Resume qué ocurrió, qué medida habría reducido el impacto y cita la fuente.
        No utilices datos personales ni información confidencial.
    </p>
</div>

<h3>2.2. Marcos y normativas de referencia</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">NIST Cybersecurity Framework</h4>
        <p class="text-sm m-0">Marco voluntario organizado en identificar, proteger, detectar, responder y recuperar. Es útil para estructurar el proyecto y comunicar el estado de seguridad a dirección.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">ISO/IEC 27001</h4>
        <p class="text-sm m-0">Norma internacional para sistemas de gestión de la seguridad de la información. Aporta el ciclo de mejora continua y el catálogo de controles del anexo A.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">RGPD y LOPDGDD</h4>
        <p class="text-sm m-0">Obligan a aplicar medidas técnicas y organizativas adecuadas, a proteger datos de salud y a notificar brechas cuando corresponda.</p>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-2">CIS Controls</h4>
        <p class="text-sm m-0">Lista priorizada de controles prácticos. Los primeros controles son muy útiles para una PYME: inventario, configuración segura, control de accesos y copias.</p>
    </div>
    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
        <h4 class="font-bold text-rose-800 mb-2">MITRE ATT&amp;CK</h4>
        <p class="text-sm m-0">Base de conocimiento de tácticas y técnicas de ataque. Permite relacionar las detecciones con comportamientos reales.</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">OWASP Top 10</h4>
        <p class="text-sm m-0">Referencia para revisar la aplicación web de gestión y las prácticas de desarrollo seguro.</p>
    </div>
</div>

<h3>2.3. Soluciones y herramientas candidatas</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Necesidad</th>
            <th class="border border-slate-200 p-3 text-left">Opciones a comparar</th>
            <th class="border border-slate-200 p-3 text-left">Criterios de selección</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Firewall y segmentación</td>
            <td class="border border-slate-200 p-3">pfSense, OPNsense, firewall del router, solución comercial.</td>
            <td class="border border-slate-200 p-3">Coste, facilidad de administración, soporte de VLAN, VPN e IDS/IPS.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Detección y logs</td>
            <td class="border border-slate-200 p-3">Wazuh, ELK Stack, Splunk Free, solución cloud.</td>
            <td class="border border-slate-200 p-3">Consumo de recursos, curva de aprendizaje, alertas y retención.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Vulnerabilidades</td>
            <td class="border border-slate-200 p-3">OpenVAS/Greenbone, Nessus Essentials, Nmap scripts.</td>
            <td class="border border-slate-200 p-3">Licencia, actualización de firmas, informes y facilidad de uso.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Copias de seguridad</td>
            <td class="border border-slate-200 p-3">Veeam Community, Bacula, rsync, snapshots del NAS.</td>
            <td class="border border-slate-200 p-3">Cifrado, automatización, verificación y restauración granular.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Contraseñas y MFA</td>
            <td class="border border-slate-200 p-3">KeePassXC, Bitwarden, políticas de grupo, Microsoft Entra ID.</td>
            <td class="border border-slate-200 p-3">Gestión compartida, auditoría, facilidad de uso y coste.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Concienciación</td>
            <td class="border border-slate-200 p-3">Phishing simulado, píldoras formativas, cartelería y guías breves.</td>
            <td class="border border-slate-200 p-3">Accesibilidad, medición del aprendizaje y adecuación al contexto sanitario.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title"><span>🧠</span> Criterio profesional</div>
    <p>
        No elijas una herramienta solo porque sea la más conocida. Para cada necesidad, compara al
        menos dos opciones y explica por qué una encaja mejor con una PYME: coste total, complejidad,
        mantenimiento, formación necesaria y riesgo de dependencia.
    </p>
</div>

<h3>2.4. Tendencias que debes considerar</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Zero Trust:</strong> no confiar por defecto en ningún usuario ni dispositivo; verificar siempre y aplicar mínimo privilegio.</li>
    <li><strong>Defensa en profundidad:</strong> combinar controles de red, sistema, identidad, datos y personas.</li>
    <li><strong>Seguridad como servicio:</strong> muchas PYMES externalizan la monitorización; valora ventajas e inconvenientes.</li>
    <li><strong>IA aplicada a la detección:</strong> útil para priorizar alertas, pero no sustituye una buena configuración ni la revisión humana.</li>
    <li><strong>Protección de datos desde el diseño:</strong> minimizar datos, cifrar, limitar accesos y conservar solo lo necesario.</li>
</ul>

<h3>2.5. Guía para completar esta sección</h3>
<div class="callout callout-info">
    <div class="callout-title"><span>📝</span> Producto de la fase</div>
    <ol class="list-decimal pl-6 space-y-2">
        <li>Redacta un apartado con las amenazas más relevantes para la clínica y su impacto.</li>
        <li>Incluye una tabla comparativa de al menos tres herramientas por cada necesidad crítica.</li>
        <li>Justifica las tecnologías que vas a utilizar en tu laboratorio.</li>
        <li>Añade las fuentes consultadas y la fecha de acceso.</li>
        <li>Señala qué decisiones quedan pendientes de validar con el equipo o con el cliente simulado.</li>
    </ol>
</div>
`;
