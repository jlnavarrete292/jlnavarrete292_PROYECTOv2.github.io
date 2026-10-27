window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span>
        <span>Resumen Ejecutivo</span>
    </div>
    <p>
        Este proyecto intermodular propone que el alumnado de segundo curso de SMR diseñe e implante
        un <strong>plan de ciberseguridad integral</strong> para una pequeña empresa del entorno cercano.
        El hilo conductor es un incidente realista: un correo de phishing consigue las credenciales de
        una persona del departamento de administración y provoca el cifrado de una carpeta compartida
        con documentación clínica y facturas.
    </p>
</div>

<h3>Contexto y necesidad empresarial</h3>
<p>
    <strong>Clínica Dental Sonrisa Viva</strong> es una PYME sanitaria con dos sedes en Torrent y
    Paiporta. Cuenta con <strong>22 personas trabajadoras</strong>, <strong>18 equipos de sobremesa</strong>,
    dos servidores Windows Server, un servidor Linux para la aplicación de gestión, un NAS de copias,
    una red Wi-Fi para pacientes y un router doméstico que ya no cubre las necesidades del negocio.
    La clínica atiende a más de <strong>4.500 pacientes</strong> y almacena datos personales y de salud,
    por lo que el impacto de una brecha no es solo económico: también afecta a la confianza de las
    personas y al cumplimiento del RGPD.
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <div class="text-3xl font-bold text-blue-600 mb-2">22</div>
        <div class="text-sm text-slate-600">personas en plantilla</div>
    </div>
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
        <div class="text-3xl font-bold text-red-600 mb-2">36 h</div>
        <div class="text-sm text-slate-600">de interrupción tras el incidente simulado</div>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <div class="text-3xl font-bold text-amber-600 mb-2">18.400 €</div>
        <div class="text-sm text-slate-600">coste estimado entre pérdidas y recuperación</div>
    </div>
</div>

<div class="callout callout-error">
    <div class="callout-title">
        <span>🔥</span>
        <span>Problemática detectada</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>La red es plana: administración, máquinas clínicas, servidores y Wi-Fi de pacientes comparten el mismo segmento.</li>
        <li>Las contraseñas se reutilizan y no existe doble factor de autenticación en el acceso remoto.</li>
        <li>Los servidores no tienen una línea base de seguridad ni un plan de actualizaciones sistemático.</li>
        <li>Las copias se hacen de forma manual y nunca se ha probado una restauración completa.</li>
        <li>No hay registro centralizado de eventos ni un procedimiento claro de respuesta ante incidentes.</li>
        <li>El personal no ha recibido formación sobre phishing, ingeniería social ni uso seguro de los recursos.</li>
    </ul>
</div>

<h3>Solución propuesta</h3>
<p>
    El alumnado deberá construir un <strong>Sistema de Gestión de la Seguridad de la Información
    adaptado a una PYME</strong>, con medidas proporcionadas y sostenibles:
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-3">🛡️ Prevenir</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Inventario de activos y análisis de riesgos.</li>
            <li>Segmentación de red con VLAN y firewall perimetral.</li>
            <li>Hardening de servidores y equipos cliente.</li>
            <li>Gestión de identidades, contraseñas y MFA.</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">🔍 Detectar</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-blue-700">
            <li>Centralización de logs con Wazuh o solución equivalente.</li>
            <li>Alertas ante accesos anómalos y cambios críticos.</li>
            <li>Análisis de vulnerabilidades con OpenVAS.</li>
            <li>Revisión periódica de indicadores de compromiso.</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-3">💾 Recuperar</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-green-700">
            <li>Estrategia de copias 3-2-1 con cifrado.</li>
            <li>Pruebas de restauración documentadas.</li>
            <li>Plan de continuidad y vuelta a la normalidad.</li>
            <li>Registro de lecciones aprendidas.</li>
        </ul>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-3">🧑‍🏫 Concienciar</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-amber-700">
            <li>Campaña de phishing simulado en el laboratorio.</li>
            <li>Guía breve de buenas prácticas para la plantilla.</li>
            <li>Protocolo de comunicación de incidentes.</li>
            <li>Formación inclusiva y adaptada a perfiles no técnicos.</li>
        </ul>
    </div>
</div>

<h3>Metodología: aprendizaje basado en proyectos</h3>
<p>
    El proyecto se organiza como un <strong>reto profesional</strong> con fases de investigación,
    diseño, implementación, prueba y presentación. El profesorado actúa como facilitador y el alumnado
    trabaja en equipos pequeños con roles rotativos. Cada fase termina con una <strong>revisión entre
    iguales</strong> y una evidencia que se incorpora al expediente del proyecto.
</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🎯</span>
        <span>Resultados esperados</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Reducir la superficie de exposición de la PYME con medidas técnicas verificables.</li>
        <li>Detectar y documentar al menos tres vulnerabilidades relevantes en el entorno de laboratorio.</li>
        <li>Demostrar una restauración completa de copias en un escenario controlado.</li>
        <li>Elaborar un plan de respuesta ante incidentes comprensible para personal no técnico.</li>
        <li>Presentar una solución defendible ante el equipo directivo de la empresa simulada.</li>
    </ul>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Importante para el alumnado</span>
    </div>
    <p>
        Este documento es una <strong>guía de trabajo</strong>, no una solución cerrada. La empresa,
        los datos y los incidentes son ficticios, pero las decisiones técnicas deben estar justificadas.
        Trabaja siempre en un entorno de laboratorio autorizado y no ejecutes pruebas de seguridad sobre
        sistemas reales sin permiso escrito.
    </p>
</div>
`;
