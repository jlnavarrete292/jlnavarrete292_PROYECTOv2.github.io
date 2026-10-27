window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span>
        <span>Introducción y contexto del reto</span>
    </div>
    <p>
        La ciberseguridad ya no es un asunto exclusivo de grandes empresas. Cualquier negocio que
        utilice correo electrónico, internet o datos personales está expuesto a amenazas que pueden
        paralizar su actividad. En este proyecto vas a acompañar a una PYME del entorno para pasar
        de una seguridad improvisada a un modelo organizado, proporcionado y verificable.
    </p>
</div>

<h3>1.1. La empresa: Clínica Dental Sonrisa Viva</h3>
<p>
    <strong>Clínica Dental Sonrisa Viva</strong> es una empresa familiar con dos sedes. La sede
    principal, en Torrent, concentra administración, dirección y tres gabinetes dentales. La sede
    de Paiporta tiene dos gabinetes y una pequeña recepción. La plantilla la forman 22 personas:
    personal facultativo, higienistas, recepción, administración, limpieza y una persona responsable
    de la gestión tecnológica que compagina esta tarea con otras funciones.
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Ámbito</th>
            <th class="border border-slate-200 p-3 text-left">Situación actual</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Puestos de trabajo</td>
            <td class="border border-slate-200 p-3">18 equipos Windows 10/11, 4 portátiles y 6 tablets para consentimientos y fotografías.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Servidores</td>
            <td class="border border-slate-200 p-3">Dos Windows Server 2019 (dominio y compartición de archivos) y un Linux con la aplicación de gestión clínica.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Almacenamiento</td>
            <td class="border border-slate-200 p-3">NAS con 8 TB, utilizado a la vez para datos y copias de seguridad.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Red</td>
            <td class="border border-slate-200 p-3">Router de operador, dos switches sin gestión y una red Wi-Fi única para personal y pacientes.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Acceso remoto</td>
            <td class="border border-slate-200 p-3">Escritorio remoto publicado por el router para que dirección y administración trabajen desde casa.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Datos tratados</td>
            <td class="border border-slate-200 p-3">Datos identificativos, de contacto, de salud, imágenes clínicas, presupuestos, facturas y datos de personal.</td>
        </tr>
    </tbody>
</table>

<div class="relative my-8">
    <img src="./images/hero.jpg" alt="Equipo trabajando en la protección de una pequeña empresa" class="w-full rounded-2xl shadow-xl">
    <p class="text-sm text-slate-500 mt-2 text-center">Figura 1: La ciberseguridad debe integrarse en la actividad diaria de la empresa.</p>
</div>

<h3>1.2. El incidente que activa el proyecto</h3>
<p>
    Un martes por la mañana, una persona del departamento de administración recibe un correo que
    suplanta a la asesoría laboral. El mensaje adjunta una supuesta nómina y solicita iniciar sesión
    para descargarla. Al introducir sus credenciales, el atacante accede a la carpeta compartida y
    despliega un ransomware de forma controlada en el laboratorio. La clínica tarda <strong>36 horas</strong>
    en recuperar la actividad, pierde citas y facturas de tres semanas y debe comunicar el incidente
    a la autoridad de protección de datos.
</p>

<div class="callout callout-error">
    <div class="callout-title">
        <span>🔥</span>
        <span>Impacto del incidente</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Continuidad:</strong> dos jornadas con agendas bloqueadas y pacientes derivados a otras clínicas.</li>
        <li><strong>Económico:</strong> 18.400 € entre horas perdidas, recuperación técnica, comunicaciones y compensaciones.</li>
        <li><strong>Legal:</strong> posible infracción del RGPD por falta de medidas técnicas y organizativas adecuadas.</li>
        <li><strong>Reputación:</strong> pérdida de confianza de pacientes y profesionales colaboradores.</li>
        <li><strong>Operativo:</strong> copias incompletas y una restauración que nadie había probado antes.</li>
    </ul>
</div>

<h3>1.3. Propuesta de trabajo</h3>
<p>
    El equipo de alumnado actuará como <strong>consultoría de ciberseguridad</strong> contratada por la
    clínica. Deberá auditar el entorno de laboratorio que reproduce la infraestructura de la empresa,
    priorizar riesgos, proponer medidas y demostrar su eficacia con evidencias. La solución final debe
    ser <strong>proporcionada al tamaño de la empresa</strong>: no se trata de implantar tecnología
    costosa, sino de reducir el riesgo con decisiones justificadas y mantenibles.
</p>

<h3>1.4. Objetivos SMART</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <div class="callout-title"><span>🎯</span> Objetivo 1</div>
        <p class="text-sm m-0">Elaborar un inventario de activos y un análisis de riesgos que cubra el 100 % de los equipos, servicios y datos críticos identificados en el laboratorio.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <div class="callout-title"><span>🎯</span> Objetivo 2</div>
        <p class="text-sm m-0">Segmentar la red en al menos cuatro zonas y aplicar reglas de firewall que impidan el acceso directo desde la Wi-Fi de invitados a los servidores y a los puestos clínicos.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <div class="callout-title"><span>🎯</span> Objetivo 3</div>
        <p class="text-sm m-0">Aplicar una línea base de hardening y eliminar el 100 % de las vulnerabilidades críticas y altas detectadas en el escaneo inicial del laboratorio.</p>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <div class="callout-title"><span>🎯</span> Objetivo 4</div>
        <p class="text-sm m-0">Diseñar y probar un sistema de copias 3-2-1 con cifrado, verificando al menos una restauración completa y documentando el procedimiento.</p>
    </div>
    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
        <div class="callout-title"><span>🎯</span> Objetivo 5</div>
        <p class="text-sm m-0">Redactar un plan de respuesta ante incidentes y una guía de concienciación comprensible para personal no técnico.</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div class="callout-title"><span>🎯</span> Objetivo 6</div>
        <p class="text-sm m-0">Presentar la solución ante un panel simulado de dirección, justificando decisiones técnicas, costes y riesgos residuales.</p>
    </div>
</div>

<h3>1.5. Alcance y límites</h3>
<p>
    El proyecto se desarrolla sobre un <strong>entorno de laboratorio autorizado</strong> que reproduce
    la empresa. No se realizarán pruebas sobre infraestructuras reales, redes de terceros ni servicios
    en producción. El alcance incluye los sistemas del laboratorio, la documentación asociada y la
    simulación de incidentes. Quedan fuera del alcance la contratación de servicios cloud, la
    adquisición de hardware y las auditorías legales formales.
</p>

<h3>1.6. Relación con los módulos del ciclo</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Módulo</th>
            <th class="border border-slate-200 p-3 text-left">Aportación al proyecto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Redes locales</td>
            <td class="border border-slate-200 p-3">Segmentación, VLAN, direccionamiento, cableado y Wi-Fi segura.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Sistemas operativos en red</td>
            <td class="border border-slate-200 p-3">Dominio, usuarios, grupos, políticas, recursos compartidos y permisos.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Seguridad informática</td>
            <td class="border border-slate-200 p-3">Análisis de riesgos, hardening, firewall, detección y respuesta.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Gestión de bases de datos</td>
            <td class="border border-slate-200 p-3">Protección de la base de datos clínica, accesos y copias coherentes.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Aplicaciones web</td>
            <td class="border border-slate-200 p-3">Revisión de la aplicación de gestión y buenas prácticas OWASP.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Formación y orientación laboral</td>
            <td class="border border-slate-200 p-3">Prevención de riesgos, protección de datos y comunicación profesional.</td>
        </tr>
    </tbody>
</table>

<h3>1.7. Tareas iniciales propuestas</h3>
<div class="callout callout-info">
    <div class="callout-title"><span>🚀</span> Primeros pasos del equipo</div>
    <ol class="list-decimal pl-6 space-y-2">
        <li><strong>Leer el escenario</strong> y repartir roles: coordinación, redes, sistemas, documentación y comunicación.</li>
        <li><strong>Crear el expediente del proyecto</strong> con un repositorio de evidencias y una tabla de seguimiento.</li>
        <li><strong>Inventariar</strong> los activos del laboratorio: equipos, servicios, datos, personas y dependencias.</li>
        <li><strong>Identificar activos críticos</strong> y estimar impacto y probabilidad de las amenazas principales.</li>
        <li><strong>Realizar un reconocimiento autorizado</strong> del laboratorio con Nmap y revisar la configuración de red.</li>
        <li><strong>Definir la línea base</strong> de seguridad que se usará para medir la mejora.</li>
        <li><strong>Acordar el formato de las evidencias</strong>: capturas, comandos, tablas y explicación de decisiones.</li>
    </ol>
</div>

<h3>1.8. Posibles entregables</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <p class="text-sm m-0"><strong>D1.</strong> Inventario de activos y matriz de riesgos.</p>
    </div>
    <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <p class="text-sm m-0"><strong>D2.</strong> Informe de auditoría inicial con evidencias.</p>
    </div>
    <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <p class="text-sm m-0"><strong>D3.</strong> Diseño de red segmentada y reglas de firewall.</p>
    </div>
    <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <p class="text-sm m-0"><strong>D4.</strong> Guía de hardening de servidores y clientes.</p>
    </div>
    <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <p class="text-sm m-0"><strong>D5.</strong> Plan de copias y prueba de restauración.</p>
    </div>
    <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <p class="text-sm m-0"><strong>D6.</strong> Plan de respuesta ante incidentes.</p>
    </div>
    <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <p class="text-sm m-0"><strong>D7.</strong> Campaña de concienciación y phishing simulado.</p>
    </div>
    <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <p class="text-sm m-0"><strong>D8.</strong> Presentación ejecutiva y defensa del proyecto.</p>
    </div>
</div>

<h3>1.9. Orientaciones para el profesorado</h3>
<div class="callout callout-warning">
    <div class="callout-title"><span>🧑‍🏫</span> Guía docente</div>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Preparar el laboratorio</strong> con una red aislada, máquinas virtuales y una instantánea inicial restaurable.</li>
        <li><strong>Delimitar por escrito</strong> qué pruebas están autorizadas y recordar la prohibición de escanear redes ajenas.</li>
        <li><strong>Presentar el reto con un cliente simulado</strong>: una persona del centro puede asumir el rol de dirección de la clínica.</li>
        <li><strong>Usar rúbricas</strong> que valoren la justificación, las evidencias y la claridad de la documentación, no solo el resultado técnico.</li>
        <li><strong>Incluir revisiones intermedias</strong> para detectar bloqueos y evitar que el alumnado acumule trabajo al final.</li>
        <li><strong>Adaptar el nivel</strong>: el alumnado que avance más rápido puede asumir el despliegue de un SIEM o de un IDS/IPS.</li>
        <li><strong>Garantizar la accesibilidad</strong> de los materiales y ofrecer alternativas para la exposición oral.</li>
    </ul>
</div>

<h3>1.10. Sugerencias para que el alumnado complete el desarrollo</h3>
<div class="callout callout-success">
    <div class="callout-title"><span>✍️</span> Tu trabajo, paso a paso</div>
    <p>
        No copies las tablas y déjalas vacías. Cada apartado debe contener decisiones propias y
        evidencias de lo que has probado. Puedes empezar por el inventario y el análisis de riesgos,
        después diseñar la red, aplicar el hardening y, finalmente, documentar la detección y la
        respuesta. Guarda capturas de los comandos y de las comprobaciones: serán la prueba de tu
        aprendizaje.
    </p>
</div>
`;
