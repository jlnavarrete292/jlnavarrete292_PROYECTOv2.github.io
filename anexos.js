window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span>
        <span>Anexos técnicos y plantillas</span>
    </div>
    <p>
        Los anexos recogen los documentos de trabajo que no encajan en el cuerpo principal. Completa
        cada plantilla con datos de tu laboratorio y elimina las filas que no utilices. No incluyas
        información personal real ni credenciales en las evidencias.
    </p>
</div>

<h3>A.1. Checklist de arranque del proyecto</h3>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <ul class="space-y-3">
        <li>☐ He leído el escenario y entiendo el objetivo del proyecto.</li>
        <li>☐ Conozco los límites del laboratorio y las pruebas autorizadas.</li>
        <li>☐ El equipo tiene roles asignados y un canal de comunicación.</li>
        <li>☐ Existe un repositorio de evidencias y una tabla de seguimiento.</li>
        <li>☐ He creado una instantánea inicial de las máquinas virtuales.</li>
        <li>☐ He comprobado la conectividad básica entre zonas.</li>
        <li>☐ He identificado los activos críticos y sus responsables.</li>
        <li>☐ He acordado el formato de los entregables.</li>
    </ul>
</div>

<h3>A.2. Inventario de activos</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Nombre</th>
            <th class="border border-slate-200 p-3 text-left">Tipo</th>
            <th class="border border-slate-200 p-3 text-left">SO / versión</th>
            <th class="border border-slate-200 p-3 text-left">IP</th>
            <th class="border border-slate-200 p-3 text-left">Servicios</th>
            <th class="border border-slate-200 p-3 text-left">Criticidad</th>
            <th class="border border-slate-200 p-3 text-left">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">A-01</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Servidor</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">A-02</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Cliente</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">A-03</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Servicio</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>A.3. Matriz de riesgos</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Amenaza</th>
            <th class="border border-slate-200 p-3 text-left">Vulnerabilidad</th>
            <th class="border border-slate-200 p-3 text-left">Probabilidad</th>
            <th class="border border-slate-200 p-3 text-left">Impacto</th>
            <th class="border border-slate-200 p-3 text-left">Riesgo</th>
            <th class="border border-slate-200 p-3 text-left">Tratamiento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">R-01</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Alta / media / baja</td>
            <td class="border border-slate-200 p-3">Alto / medio / bajo</td>
            <td class="border border-slate-200 p-3">Crítico / alto / medio / bajo</td>
            <td class="border border-slate-200 p-3">Mitigar / transferir / aceptar / evitar</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">R-02</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>A.4. Registro de cambios</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fecha</th>
            <th class="border border-slate-200 p-3 text-left">Cambio realizado</th>
            <th class="border border-slate-200 p-3 text-left">Justificación</th>
            <th class="border border-slate-200 p-3 text-left">Riesgo</th>
            <th class="border border-slate-200 p-3 text-left">Vuelta atrás</th>
            <th class="border border-slate-200 p-3 text-left">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>A.5. Checklist de hardening</h3>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h4 class="font-bold text-slate-700 mb-3">Servidores</h4>
    <ul class="space-y-3">
        <li>☐ Se han eliminado servicios y protocolos innecesarios.</li>
        <li>☐ Se han aplicado actualizaciones de seguridad.</li>
        <li>☐ Las cuentas privilegiadas están separadas y protegidas con MFA.</li>
        <li>☐ El acceso remoto está restringido y registrado.</li>
        <li>☐ La auditoría de eventos críticos está activada.</li>
        <li>☐ Las contraseñas por defecto se han cambiado.</li>
        <li>☐ El firewall del sistema tiene reglas explícitas.</li>
        <li>☐ Se ha documentado la configuración final.</li>
    </ul>
</div>

<h3>A.6. Checklist de copias y restauración</h3>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <ul class="space-y-3">
        <li>☐ Existen tres copias de los datos críticos.</li>
        <li>☐ Se utilizan al menos dos medios diferentes.</li>
        <li>☐ Una copia está fuera de la ubicación principal.</li>
        <li>☐ Las copias están cifradas.</li>
        <li>☐ Se ha probado una restauración de archivo.</li>
        <li>☐ Se ha probado una restauración completa del servicio.</li>
        <li>☐ Se ha medido el resultado y documentado.</li>
        <li>☐ Se conocen las limitaciones y los riesgos residuales.</li>
    </ul>
</div>

<h3>A.7. Checklist de respuesta ante incidentes</h3>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <ul class="space-y-3">
        <li>☐ El incidente está registrado con identificador y fecha.</li>
        <li>☐ Se ha clasificado la severidad y el impacto.</li>
        <li>☐ Se han conservado las evidencias necesarias.</li>
        <li>☐ Se ha contenido el incidente sin destruir información.</li>
        <li>☐ Se ha identificado la causa raíz.</li>
        <li>☐ Se ha recuperado el servicio y verificado su funcionamiento.</li>
        <li>☐ Se ha valorado la notificación a la autoridad y a las personas afectadas.</li>
        <li>☐ Se han definido medidas correctivas y un responsable.</li>
    </ul>
</div>

<h3>A.8. Plantilla de campaña de concienciación</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Elemento</th>
            <th class="border border-slate-200 p-3 text-left">Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Objetivo</td>
            <td class="border border-slate-200 p-3">Qué comportamiento se quiere mejorar.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Público destinatario</td>
            <td class="border border-slate-200 p-3">Personal clínico, administración, dirección o proveedores.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Mensaje principal</td>
            <td class="border border-slate-200 p-3">Una idea clara y accionable.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Canal</td>
            <td class="border border-slate-200 p-3">Correo simulado, sesión breve, cartelería o píldora formativa.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Métrica</td>
            <td class="border border-slate-200 p-3">Indicador agregado y anónimo para medir el resultado.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Refuerzo</td>
            <td class="border border-slate-200 p-3">Acción posterior para consolidar el aprendizaje.</td>
        </tr>
    </tbody>
</table>

<h3>A.9. Glosario</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Término</th>
            <th class="border border-slate-200 p-3 text-left">Definición breve</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Activo</td>
            <td class="border border-slate-200 p-3">Cualquier elemento que tiene valor para la organización: datos, equipos, servicios o personas.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Vulnerabilidad</td>
            <td class="border border-slate-200 p-3">Debilidad que puede ser aprovechada por una amenaza.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Riesgo</td>
            <td class="border border-slate-200 p-3">Combinación de la probabilidad de una amenaza y el impacto que produciría.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Hardening</td>
            <td class="border border-slate-200 p-3">Proceso de reducir la superficie de ataque de un sistema.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">MFA</td>
            <td class="border border-slate-200 p-3">Autenticación multifactor: combina algo que sabes, algo que tienes o algo que eres.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">VLAN</td>
            <td class="border border-slate-200 p-3">Red local virtual que permite separar lógicamente el tráfico.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">SIEM</td>
            <td class="border border-slate-200 p-3">Sistema que centraliza y correlaciona eventos de seguridad.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">RPO</td>
            <td class="border border-slate-200 p-3">Cantidad máxima de datos que la empresa puede permitirse perder.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">RTO</td>
            <td class="border border-slate-200 p-3">Tiempo máximo aceptable para recuperar un servicio.</td>
        </tr>
    </tbody>
</table>

<h3>A.10. Control de versiones del documento</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Versión</th>
            <th class="border border-slate-200 p-3 text-left">Fecha</th>
            <th class="border border-slate-200 p-3 text-left">Cambios</th>
            <th class="border border-slate-200 p-3 text-left">Autoría</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">0.1</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Versión inicial.</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">1.0</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3">Entrega final.</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title"><span>✅</span> Antes de entregar</div>
    <p>
        Revisa que no haya datos personales reales, credenciales ni capturas con información sensible.
        Comprueba que todas las tablas están completas, que las evidencias se pueden localizar y que
        otra persona podría reproducir los pasos principales con tu documentación.
    </p>
</div>
`;
