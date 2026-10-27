window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span>
        <span>Análisis de requisitos</span>
    </div>
    <p>
        Los requisitos convierten las necesidades de la clínica en comprobaciones verificables. Cada
        requisito debe poder demostrarse con una evidencia: una captura, un comando, un informe o una
        prueba de restauración.
    </p>
</div>

<h3>4.1. Requisitos funcionales</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Requisito</th>
            <th class="border border-slate-200 p-3 text-left">Criterio de aceptación</th>
            <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-01</td>
            <td class="border border-slate-200 p-3">Inventariar equipos, servidores, servicios, datos y personas responsables.</td>
            <td class="border border-slate-200 p-3">El inventario cubre el 100 % de los activos del laboratorio y tiene responsable asignado.</td>
            <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-02</td>
            <td class="border border-slate-200 p-3">Identificar y priorizar riesgos con una matriz de probabilidad e impacto.</td>
            <td class="border border-slate-200 p-3">Cada riesgo crítico tiene una medida asociada y una evidencia de seguimiento.</td>
            <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-03</td>
            <td class="border border-slate-200 p-3">Segmentar la red en zonas diferenciadas para administración, clínica, servidores e invitados.</td>
            <td class="border border-slate-200 p-3">Una prueba desde la Wi-Fi de invitados no alcanza servidores ni puestos clínicos.</td>
            <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-04</td>
            <td class="border border-slate-200 p-3">Aplicar reglas de firewall con criterio de mínimo privilegio.</td>
            <td class="border border-slate-200 p-3">Solo los puertos y flujos necesarios están permitidos; el resto se deniega por defecto.</td>
            <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-05</td>
            <td class="border border-slate-200 p-3">Gestionar usuarios, grupos y permisos según el puesto de trabajo.</td>
            <td class="border border-slate-200 p-3">Cada persona accede solo a los recursos necesarios y las bajas se tramitan el mismo día.</td>
            <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-06</td>
            <td class="border border-slate-200 p-3">Configurar autenticación multifactor en el acceso remoto y en cuentas privilegiadas.</td>
            <td class="border border-slate-200 p-3">Un acceso remoto sin segundo factor es rechazado y queda registrado.</td>
            <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-07</td>
            <td class="border border-slate-200 p-3">Aplicar una línea base de hardening a servidores y clientes.</td>
            <td class="border border-slate-200 p-3">Se eliminan servicios innecesarios, se restringen accesos y se documentan los cambios.</td>
            <td class="border border-slate-200 p-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Alta</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-08</td>
            <td class="border border-slate-200 p-3">Realizar copias 3-2-1 cifradas y probar la restauración.</td>
            <td class="border border-slate-200 p-3">Existe al menos una copia fuera del equipo principal y una restauración completa documentada.</td>
            <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-09</td>
            <td class="border border-slate-200 p-3">Centralizar logs y generar alertas ante eventos relevantes.</td>
            <td class="border border-slate-200 p-3">Se detecta un intento de acceso fallido repetido o un cambio crítico y se genera una alerta revisable.</td>
            <td class="border border-slate-200 p-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Alta</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-10</td>
            <td class="border border-slate-200 p-3">Elaborar un plan de respuesta ante incidentes y una guía de concienciación.</td>
            <td class="border border-slate-200 p-3">El plan identifica roles, pasos, canales de comunicación y evidencias; la guía es comprensible para personal no técnico.</td>
            <td class="border border-slate-200 p-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Alta</span></td>
        </tr>
    </tbody>
</table>

<h3>4.2. Requisitos no funcionales</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Requisito</th>
            <th class="border border-slate-200 p-3 text-left">Métrica o comprobación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RNF-01</td>
            <td class="border border-slate-200 p-3">Seguridad por defecto</td>
            <td class="border border-slate-200 p-3">Toda regla no definida se deniega y los servicios expuestos están justificados.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RNF-02</td>
            <td class="border border-slate-200 p-3">Trazabilidad</td>
            <td class="border border-slate-200 p-3">Los cambios críticos y los accesos privilegiados quedan registrados con fecha y responsable.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RNF-03</td>
            <td class="border border-slate-200 p-3">Disponibilidad</td>
            <td class="border border-slate-200 p-3">Las medidas no impiden la actividad clínica; existe procedimiento de recuperación.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RNF-04</td>
            <td class="border border-slate-200 p-3">Mantenibilidad</td>
            <td class="border border-slate-200 p-3">La configuración está documentada y puede reproducirse por otra persona.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RNF-05</td>
            <td class="border border-slate-200 p-3">Usabilidad</td>
            <td class="border border-slate-200 p-3">El personal no técnico puede seguir la guía de buenas prácticas sin ayuda constante.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RNF-06</td>
            <td class="border border-slate-200 p-3">Accesibilidad</td>
            <td class="border border-slate-200 p-3">Los materiales formativos usan lenguaje claro, buen contraste y alternativas textuales.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RNF-07</td>
            <td class="border border-slate-200 p-3">Privacidad</td>
            <td class="border border-slate-200 p-3">Se aplica minimización de datos y se evita incluir información real en las evidencias.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RNF-08</td>
            <td class="border border-slate-200 p-3">Proporcionalidad</td>
            <td class="border border-slate-200 p-3">Cada medida tiene un coste y una carga operativa justificados para una PYME.</td>
        </tr>
    </tbody>
</table>

<h3>4.3. Requisitos técnicos del entorno</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Red:</strong> VLAN de administración, clínica, servidores e invitados; direccionamiento documentado y sin solapamientos.</li>
    <li><strong>Firewall:</strong> política por defecto de denegación, reglas comentadas y registro de eventos relevantes.</li>
    <li><strong>Windows Server:</strong> controlador de dominio, unidades organizativas, grupos de seguridad y políticas de contraseña.</li>
    <li><strong>Linux:</strong> acceso SSH con clave, usuario no root, servicios mínimos y registro de autenticación.</li>
    <li><strong>Copias:</strong> al menos tres copias, dos medios distintos y una ubicación externa; cifrado y verificación de integridad.</li>
    <li><strong>Monitorización:</strong> agente o reenvío de logs, retención suficiente y alertas accionables.</li>
    <li><strong>Documentación:</strong> repositorio versionado con inventario, diagramas, procedimientos y registro de cambios.</li>
</ul>

<h3>4.4. Requisitos legales y organizativos</h3>
<div class="callout callout-info">
    <div class="callout-title"><span>⚖️</span> No olvides</div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Registro de actividades de tratamiento y base jurídica.</li>
        <li>Evaluación de impacto cuando el tratamiento de datos de salud sea probablemente alto riesgo.</li>
        <li>Procedimiento de gestión de brechas y comunicación a las personas afectadas.</li>
        <li>Acuerdos de confidencialidad y contratos con proveedores.</li>
        <li>Política de contraseñas, acceso remoto, uso aceptable y dispositivos móviles.</li>
        <li>Conservación de evidencias y cadena de custodia en incidentes.</li>
    </ul>
</div>

<h3>4.5. Matriz de trazabilidad</h3>
<p>
    Completa una matriz que relacione cada requisito con la sección de diseño, la evidencia de
    implementación y la prueba realizada. Esta matriz será fundamental en la defensa del proyecto.
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Requisito</th>
            <th class="border border-slate-200 p-3 text-left">Diseño asociado</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia</th>
            <th class="border border-slate-200 p-3 text-left">Prueba</th>
            <th class="border border-slate-200 p-3 text-left">Estado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">RF-01</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Pendiente</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">RF-02</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Pendiente</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">RF-03</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Pendiente</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">RF-04</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Pendiente</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">RF-08</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Pendiente</td>
        </tr>
    </tbody>
</table>

<h3>4.6. Guía para completar esta sección</h3>
<div class="callout callout-success">
    <div class="callout-title"><span>✍️</span> Revisa tus requisitos</div>
    <ol class="list-decimal pl-6 space-y-2">
        <li>Comprueba que cada requisito es <strong>medible</strong> y tiene un criterio de aceptación claro.</li>
        <li>Elimina requisitos que no puedas verificar o que no aporten valor al riesgo identificado.</li>
        <li>Añade requisitos específicos de tu diseño, por ejemplo puertos, protocolos o herramientas.</li>
        <li>Relaciona cada requisito con una prueba concreta que puedas ejecutar en el laboratorio.</li>
        <li>Actualiza la matriz de trazabilidad a medida que avances.</li>
    </ol>
</div>
`;
