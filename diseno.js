window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span>
        <span>Diseño de la solución</span>
    </div>
    <p>
        Esta sección transforma los requisitos en una arquitectura concreta. El diseño debe ser
        comprensible para otra persona técnica y debe explicar por qué cada zona, regla y control
        existe. Los diagramas son parte del entregable, no un adorno.
    </p>
</div>

<h3>5.1. Principios de diseño</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🔐 Mínimo privilegio</h4>
        <p class="text-sm m-0">Cada persona y cada sistema accede solo a lo imprescindible para su función.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🧱 Defensa en profundidad</h4>
        <p class="text-sm m-0">Varias capas independientes: red, sistema, identidad, datos y personas.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">🔄 Recuperación probada</h4>
        <p class="text-sm m-0">No basta con tener copias; hay que demostrar que se pueden restaurar.</p>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-2">📏 Proporcionalidad</h4>
        <p class="text-sm m-0">La solución debe poder mantenerse con los recursos reales de la clínica.</p>
    </div>
</div>

<h3>5.2. Arquitectura de red propuesta</h3>
<p>
    La red se divide en zonas para limitar el movimiento lateral. La Wi-Fi de pacientes queda
    completamente separada de la red clínica. El firewall aplica reglas entre zonas y registra los
    eventos relevantes.
</p>

<div class="bg-slate-50 rounded-xl p-6 my-8 border border-slate-200">
    <h4 class="text-center font-bold text-slate-600 mb-4">Diagrama lógico de la red</h4>
    <div class="bg-white rounded-lg p-6 border border-slate-200">
        <pre class="text-xs md:text-sm overflow-x-auto text-slate-700">
                              INTERNET
                                  |
                         [Router operador]
                                  |
                         [Firewall pfSense]
                        /        |         \\
                       /         |          \\
              VLAN 10        VLAN 20       VLAN 30
           ADMINISTRACIÓN    CLÍNICA       SERVIDORES
           192.168.10.0/24  192.168.20.0/24 192.168.30.0/24
                |                |              |
          Dirección,       Gabinetes,      AD, gestión,
          administración,  recepción,      base de datos,
          facturación      tablets         NAS de datos
                                  |
                              VLAN 40
                            INVITADOS
                          192.168.40.0/24
                                  |
                         Wi-Fi pacientes
                    (solo Internet, sin acceso interno)

          VLAN 50: GESTIÓN DE RED (switch/firewall) 192.168.50.0/24
        </pre>
    </div>
    <p class="text-sm text-slate-500 mt-3 text-center">Figura 2: Segmentación lógica propuesta. Debes adaptar direcciones y nombres a tu laboratorio.</p>
</div>

<h3>5.3. Plan de direccionamiento y VLAN</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">VLAN</th>
            <th class="border border-slate-200 p-3 text-left">Nombre</th>
            <th class="border border-slate-200 p-3 text-left">Red</th>
            <th class="border border-slate-200 p-3 text-left">Uso previsto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">10</td>
            <td class="border border-slate-200 p-3">ADMIN</td>
            <td class="border border-slate-200 p-3">192.168.10.0/24</td>
            <td class="border border-slate-200 p-3">Dirección, administración y facturación.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">20</td>
            <td class="border border-slate-200 p-3">CLINICA</td>
            <td class="border border-slate-200 p-3">192.168.20.0/24</td>
            <td class="border border-slate-200 p-3">Gabinetes, recepción y tablets de consentimientos.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">30</td>
            <td class="border border-slate-200 p-3">SERVIDORES</td>
            <td class="border border-slate-200 p-3">192.168.30.0/24</td>
            <td class="border border-slate-200 p-3">Controlador de dominio, aplicación clínica y NAS.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">40</td>
            <td class="border border-slate-200 p-3">INVITADOS</td>
            <td class="border border-slate-200 p-3">192.168.40.0/24</td>
            <td class="border border-slate-200 p-3">Wi-Fi de pacientes, solo salida a Internet.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">50</td>
            <td class="border border-slate-200 p-3">GESTION</td>
            <td class="border border-slate-200 p-3">192.168.50.0/24</td>
            <td class="border border-slate-200 p-3">Administración del firewall y de los switches.</td>
        </tr>
    </tbody>
</table>

<h3>5.4. Reglas de firewall esperadas</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Origen</th>
            <th class="border border-slate-200 p-3 text-left">Destino</th>
            <th class="border border-slate-200 p-3 text-left">Servicio</th>
            <th class="border border-slate-200 p-3 text-left">Decisión</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">INVITADOS</td>
            <td class="border border-slate-200 p-3">Internet</td>
            <td class="border border-slate-200 p-3">HTTP/HTTPS, DNS</td>
            <td class="border border-slate-200 p-3"><span class="text-green-700 font-bold">Permitir</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">INVITADOS</td>
            <td class="border border-slate-200 p-3">ADMIN, CLINICA, SERVIDORES</td>
            <td class="border border-slate-200 p-3">Cualquiera</td>
            <td class="border border-slate-200 p-3"><span class="text-red-700 font-bold">Denegar</span></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">CLINICA</td>
            <td class="border border-slate-200 p-3">SERVIDORES</td>
            <td class="border border-slate-200 p-3">Aplicación clínica y compartición de archivos</td>
            <td class="border border-slate-200 p-3"><span class="text-green-700 font-bold">Permitir</span> solo puertos necesarios</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">ADMIN</td>
            <td class="border border-slate-200 p-3">SERVIDORES</td>
            <td class="border border-slate-200 p-3">Administración y aplicación</td>
            <td class="border border-slate-200 p-3"><span class="text-green-700 font-bold">Permitir</span> con registro</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">CLINICA</td>
            <td class="border border-slate-200 p-3">ADMIN</td>
            <td class="border border-slate-200 p-3">Cualquiera</td>
            <td class="border border-slate-200 p-3"><span class="text-red-700 font-bold">Denegar</span> por defecto</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">GESTION</td>
            <td class="border border-slate-200 p-3">Firewall y switches</td>
            <td class="border border-slate-200 p-3">SSH/HTTPS de administración</td>
            <td class="border border-slate-200 p-3"><span class="text-green-700 font-bold">Permitir</span> solo desde equipos autorizados</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Cualquiera</td>
            <td class="border border-slate-200 p-3">Cualquiera</td>
            <td class="border border-slate-200 p-3">No definido</td>
            <td class="border border-slate-200 p-3"><span class="text-red-700 font-bold">Denegar</span> y registrar</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>⚠️</span> Cuidado con el acceso remoto</div>
    <p>
        El escritorio remoto publicado directamente en Internet es un riesgo elevado. El diseño debe
        sustituirlo por una VPN con MFA o por una solución de acceso remoto gestionada. Si se mantiene
        RDP, debe estar detrás de la VPN y limitado a los equipos y personas autorizadas.
    </p>
</div>

<h3>5.5. Diseño de identidades y accesos</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Unidades organizativas:</strong> Dirección, Administración, Clínica, Recepción, Sistemas y Equipos.</li>
    <li><strong>Grupos de seguridad:</strong> un grupo por función y por recurso compartido.</li>
    <li><strong>Cuentas privilegiadas:</strong> separadas de las cuentas de uso diario y con MFA.</li>
    <li><strong>Contraseñas:</strong> gestor corporativo, longitud mínima, bloqueo por intentos fallidos y revisión de credenciales comprometidas.</li>
    <li><strong>Altas y bajas:</strong> procedimiento con responsable, fecha y verificación de acceso retirado.</li>
    <li><strong>Invitados:</strong> cuenta sin acceso a recursos internos y con portal cautivo si es posible.</li>
</ul>

<h3>5.6. Diseño de copias y continuidad</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Copia</th>
            <th class="border border-slate-200 p-3 text-left">Ubicación</th>
            <th class="border border-slate-200 p-3 text-left">Contenido</th>
            <th class="border border-slate-200 p-3 text-left">Protección</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Copia 1</td>
            <td class="border border-slate-200 p-3">NAS de producción</td>
            <td class="border border-slate-200 p-3">Datos y configuración</td>
            <td class="border border-slate-200 p-3">Snapshots y control de acceso</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Copia 2</td>
            <td class="border border-slate-200 p-3">Disco externo cifrado</td>
            <td class="border border-slate-200 p-3">Copia completa semanal</td>
            <td class="border border-slate-200 p-3">Cifrado y almacenamiento separado</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Copia 3</td>
            <td class="border border-slate-200 p-3">Ubicación externa</td>
            <td class="border border-slate-200 p-3">Copia cifrada de datos críticos</td>
            <td class="border border-slate-200 p-3">Acceso restringido y verificación de integridad</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title"><span>✅</span> Regla 3-2-1</div>
    <p>
        Tres copias de los datos, en dos medios diferentes y una fuera de la ubicación principal.
        Añade una prueba de restauración documentada: una copia que nunca se ha restaurado no es una
        copia fiable.
    </p>
</div>

<h3>5.7. Diseño de detección y respuesta</h3>
<p>
    La detección se apoya en registros de servidores, firewall y endpoints. Wazuh puede centralizar
    eventos y generar alertas. El objetivo no es recoger todo sin criterio, sino disponer de eventos
    útiles para investigar.
</p>

<div class="bg-slate-50 rounded-xl p-6 my-8 border border-slate-200">
    <h4 class="text-center font-bold text-slate-600 mb-4">Flujo de respuesta ante incidentes</h4>
    <div class="bg-white rounded-lg p-6 border border-slate-200">
        <pre class="text-xs md:text-sm overflow-x-auto text-slate-700">
  [Detección]
       |
       v
  [Clasificación] ---> ¿Falso positivo? ---> Cerrar y ajustar alerta
       |
       v
  [Contención] ---> Aislar equipo, bloquear cuenta, segmentar red
       |
       v
  [Erradicación] ---> Eliminar malware, corregir vulnerabilidad, restablecer credenciales
       |
       v
  [Recuperación] ---> Restaurar copia, validar servicio, vigilar recaída
       |
       v
  [Lecciones aprendidas] ---> Informe, medidas correctivas y comunicación
        </pre>
    </div>
</div>

<h3>5.8. Guía para completar el diseño</h3>
<div class="callout callout-info">
    <div class="callout-title"><span>📝</span> Entregable de diseño</div>
    <ol class="list-decimal pl-6 space-y-2">
        <li>Dibuja tu propia red con draw.io, Diagrams.net o herramienta similar e incluye el diagrama en el informe.</li>
        <li>Justifica el número de VLAN y por qué has separado esos grupos.</li>
        <li>Documenta las reglas del firewall con una tabla como la anterior, adaptada a tu laboratorio.</li>
        <li>Explica cómo se gestionan altas, bajas y cuentas privilegiadas.</li>
        <li>Diseña el plan de copias y define qué prueba de restauración vas a ejecutar.</li>
        <li>Describe el flujo de respuesta y los roles de cada persona del equipo.</li>
        <li>Señala los riesgos residuales que no puedes eliminar con el presupuesto disponible.</li>
    </ol>
</div>

<div class="callout callout-warning">
    <div class="callout-title"><span>🧑‍🏫</span> Orientación para el profesorado</div>
    <p>
        Revisa que el diseño sea coherente con los requisitos y que las reglas de firewall no se
        contradigan. Pide al alumnado que defienda una decisión concreta, por ejemplo por qué la Wi-Fi
        de invitados no puede acceder al NAS. Valora especialmente la claridad del diagrama y la
        justificación de los riesgos residuales.
    </p>
</div>
`;
