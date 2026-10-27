window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span>
        <span>Estudio de viabilidad</span>
    </div>
    <p>
        Una solución de seguridad solo es válida si la empresa puede mantenerla. En esta sección
        valorarás la viabilidad técnica, económica, operativa y legal de las medidas propuestas, así
        como los riesgos que pueden impedir su implantación.
    </p>
</div>

<h3>3.1. Viabilidad técnica</h3>
<p>
    El laboratorio dispone de recursos suficientes para reproducir la infraestructura de la clínica.
    Antes de proponer cambios, comprueba que puedes ejecutar las máquinas virtuales necesarias y que
    la red de laboratorio está aislada de la red del centro.
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Recurso</th>
            <th class="border border-slate-200 p-3 text-left">Requisito mínimo</th>
            <th class="border border-slate-200 p-3 text-left">Comprobación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Virtualización</td>
            <td class="border border-slate-200 p-3">8 GB de RAM y 4 núcleos disponibles</td>
            <td class="border border-slate-200 p-3">Crear y arrancar dos máquinas simultáneamente.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Almacenamiento</td>
            <td class="border border-slate-200 p-3">80 GB libres</td>
            <td class="border border-slate-200 p-3">Espacio para servidores, clientes y copias de laboratorio.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Red</td>
            <td class="border border-slate-200 p-3">Red interna o modo host-only</td>
            <td class="border border-slate-200 p-3">Los equipos se ven entre sí y no salen a Internet sin autorización.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Sistemas</td>
            <td class="border border-slate-200 p-3">Windows Server, Windows cliente y Linux</td>
            <td class="border border-slate-200 p-3">Instalaciones disponibles o imágenes proporcionadas por el centro.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Herramientas</td>
            <td class="border border-slate-200 p-3">Nmap, OpenVAS, Wazuh, pfSense y cliente de copias</td>
            <td class="border border-slate-200 p-3">Descarga autorizada y verificación de integridad.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>⚠️</span> Seguridad del laboratorio</div>
    <p>
        Documenta la configuración de red antes de empezar y crea una instantánea inicial. Si una
        práctica bloquea el acceso, debes poder volver al estado anterior sin afectar al resto del
        grupo. Nunca conectes el laboratorio a la red real de la empresa simulada.
    </p>
</div>

<h3>3.2. Viabilidad económica</h3>
<p>
    La propuesta debe ser realista para una clínica de 22 personas. Se priorizan herramientas de
    código abierto y el aprovechamiento de la infraestructura existente, pero se incluye una reserva
    para formación, soporte y posibles renovaciones.
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Concepto</th>
            <th class="border border-slate-200 p-3 text-left">Opción prevista</th>
            <th class="border border-slate-200 p-3 text-left">Coste orientativo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Firewall perimetral</td>
            <td class="border border-slate-200 p-3">Equipo reutilizado con pfSense</td>
            <td class="border border-slate-200 p-3">0 € de licencia</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">SIEM / detección</td>
            <td class="border border-slate-200 p-3">Wazuh en máquina virtual</td>
            <td class="border border-slate-200 p-3">0 € de licencia</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Análisis de vulnerabilidades</td>
            <td class="border border-slate-200 p-3">OpenVAS/Greenbone Community</td>
            <td class="border border-slate-200 p-3">0 € de licencia</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Copias de seguridad</td>
            <td class="border border-slate-200 p-3">NAS existente + disco externo cifrado</td>
            <td class="border border-slate-200 p-3">120 € aprox. (disco)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Gestor de contraseñas</td>
            <td class="border border-slate-200 p-3">KeePassXC o Bitwarden</td>
            <td class="border border-slate-200 p-3">0-60 € al año</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Formación y concienciación</td>
            <td class="border border-slate-200 p-3">Material propio y sesión interna</td>
            <td class="border border-slate-200 p-3">0-300 €</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Soporte externo puntual</td>
            <td class="border border-slate-200 p-3">Reserva para incidentes graves</td>
            <td class="border border-slate-200 p-3">500 € al año</td>
        </tr>
        <tr class="border-t-2 border-slate-300 bg-slate-100">
            <td class="border border-slate-200 p-3 font-bold">Coste anual estimado</td>
            <td class="border border-slate-200 p-3 font-bold">Medidas proporcionadas</td>
            <td class="border border-slate-200 p-3 font-bold text-green-700">680-980 €</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title"><span>💰</span> Comparación con el coste del incidente</div>
    <p>
        El incidente simulado se estimó en <strong>18.400 €</strong>. Incluso con la reserva de soporte,
        la inversión anual propuesta es muy inferior al coste de una sola brecha. Este argumento debe
        aparecer en la presentación a dirección, acompañado de los riesgos residuales.
    </p>
</div>

<h3>3.3. Viabilidad operativa</h3>
<p>
    La clínica no dispone de un departamento de informática dedicado. Por tanto, las medidas deben
    poder ser mantenidas por una persona con apoyo externo puntual. Valora la carga operativa de cada
    herramienta y evita soluciones que generen más alertas de las que se pueden atender.
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Medida</th>
            <th class="border border-slate-200 p-3 text-left">Responsable</th>
            <th class="border border-slate-200 p-3 text-left">Frecuencia de revisión</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Revisión de alertas de Wazuh</td>
            <td class="border border-slate-200 p-3">Responsable TIC interno</td>
            <td class="border border-slate-200 p-3">Diaria o según criticidad</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Actualizaciones de servidores</td>
            <td class="border border-slate-200 p-3">Responsable TIC + soporte</td>
            <td class="border border-slate-200 p-3">Mensual, con ventana acordada</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Prueba de restauración</td>
            <td class="border border-slate-200 p-3">Responsable TIC</td>
            <td class="border border-slate-200 p-3">Trimestral</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Revisión de accesos y altas/bajas</td>
            <td class="border border-slate-200 p-3">Administración + responsable TIC</td>
            <td class="border border-slate-200 p-3">Mensual</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Concienciación</td>
            <td class="border border-slate-200 p-3">Dirección + responsable TIC</td>
            <td class="border border-slate-200 p-3">Al menos una vez al año</td>
        </tr>
    </tbody>
</table>

<h4>Alternativas si no hay recursos</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Priorizar lo esencial:</strong> copias probadas, MFA en acceso remoto, actualizaciones y segmentación básica.</li>
    <li><strong>Externalizar la monitorización:</strong> contratar un servicio gestionado y mantener la respuesta local.</li>
    <li><strong>Fases:</strong> implantar primero los controles de mayor impacto y menor complejidad.</li>
    <li><strong>Formación interna:</strong> convertir a una persona de la plantilla en referente de seguridad.</li>
</ul>

<h3>3.4. Viabilidad legal y de protección de datos</h3>
<p>
    La clínica trata datos de salud, considerados de categoría especial. Las medidas propuestas deben
    alinearse con el RGPD, la LOPDGDD y el criterio de responsabilidad proactiva. No se trata solo de
    evitar sanciones: se trata de proteger a las personas.
</p>

<div class="callout callout-info">
    <div class="callout-title"><span>⚖️</span> Puntos que debes documentar</div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Base jurídica del tratamiento y finalidad de los datos clínicos.</li>
        <li>Medidas de seguridad aplicadas y evaluación de riesgos.</li>
        <li>Procedimiento de notificación de brechas a la autoridad de control y a las personas afectadas.</li>
        <li>Contratos con proveedores que traten datos por cuenta de la clínica.</li>
        <li>Política de conservación y borrado seguro de documentación clínica.</li>
        <li>Registro de actividades de tratamiento y control de accesos.</li>
    </ul>
</div>

<h3>3.5. Riesgos del proyecto y mitigación</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Riesgo</th>
            <th class="border border-slate-200 p-3 text-left">Probabilidad</th>
            <th class="border border-slate-200 p-3 text-left">Mitigación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Falta de tiempo para completar todas las fases</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Priorizar entregables y acordar un alcance mínimo viable.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Bloqueo del laboratorio por una mala configuración</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Instantáneas, documentación de cambios y acceso de recuperación.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Exceso de alertas y fatiga de revisión</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Ajustar umbrales y priorizar alertas accionables.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Dependencia de una única persona</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Documentar procedimientos y formar a una segunda persona.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Falta de evidencias de las pruebas</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Registrar capturas, comandos y resultados en el expediente.</td>
        </tr>
    </tbody>
</table>

<h3>3.6. Guía para completar esta sección</h3>
<div class="callout callout-success">
    <div class="callout-title"><span>✍️</span> Tu análisis</div>
    <p>
        Ajusta los costes a las decisiones reales de tu laboratorio y añade una tabla de alternativas.
        Después, redacta una conclusión breve: ¿la solución es viable? ¿Qué harías primero si el
        presupuesto se redujera a la mitad? Justifica la respuesta con criterios técnicos, económicos
        y legales.
    </p>
</div>
`;
