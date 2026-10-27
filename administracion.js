window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>⚙️</span>
        <span>Administración y operación</span>
    </div>
    <p>
        Implantar una medida no es suficiente: hay que mantenerla. Esta sección define cómo se
        administran los sistemas después del proyecto, quién hace cada tarea, cómo se registra y cómo
        se comprueba que los controles siguen funcionando.
    </p>
</div>

<h3>7.1. Roles y responsabilidades</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Rol</th>
            <th class="border border-slate-200 p-3 text-left">Responsabilidad principal</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Dirección de la clínica</td>
            <td class="border border-slate-200 p-3">Aprobar políticas, presupuesto y aceptar riesgos residuales.</td>
            <td class="border border-slate-200 p-3">Acta de aprobación y registro de riesgos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Responsable TIC</td>
            <td class="border border-slate-200 p-3">Configurar, mantener y revisar los controles técnicos.</td>
            <td class="border border-slate-200 p-3">Registro de cambios y revisiones.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Administración</td>
            <td class="border border-slate-200 p-3">Gestionar altas, bajas y verificar accesos del personal.</td>
            <td class="border border-slate-200 p-3">Listado de personal y comprobantes de baja.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Todo el personal</td>
            <td class="border border-slate-200 p-3">Cumplir las normas y comunicar incidentes o correos sospechosos.</td>
            <td class="border border-slate-200 p-3">Registro de comunicaciones y formación.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Soporte externo</td>
            <td class="border border-slate-200 p-3">Apoyar en incidentes graves y revisiones especializadas.</td>
            <td class="border border-slate-200 p-3">Contrato, informe de intervención y confidencialidad.</td>
        </tr>
    </tbody>
</table>

<h3>7.2. Operaciones habituales</h3>
<h4>7.2.1. Revisión de alertas</h4>
<ol class="list-decimal pl-6 space-y-2 my-4">
    <li>Consultar el panel de detección y clasificar las alertas nuevas.</li>
    <li>Descartar falsos positivos con justificación y ajustar la regla si procede.</li>
    <li>Abrir una incidencia para los eventos que requieran investigación.</li>
    <li>Registrar la acción tomada y el responsable.</li>
    <li>Escalar los incidentes críticos según el plan de respuesta.</li>
</ol>

<h4>7.2.2. Gestión de actualizaciones</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Sistema</th>
            <th class="border border-slate-200 p-3 text-left">Procedimiento</th>
            <th class="border border-slate-200 p-3 text-left">Verificación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Windows Server</td>
            <td class="border border-slate-200 p-3">Revisar actualizaciones, probar en una máquina de laboratorio y aplicar en ventana acordada.</td>
            <td class="border border-slate-200 p-3">Estado del sistema y servicios críticos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Linux</td>
            <td class="border border-slate-200 p-3">Actualizar repositorios, revisar cambios y aplicar con copia previa.</td>
            <td class="border border-slate-200 p-3">Servicios activos y logs sin errores.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Firewall</td>
            <td class="border border-slate-200 p-3">Revisar versión, reglas y respaldo de configuración antes de actualizar.</td>
            <td class="border border-slate-200 p-3">Conectividad y reglas esperadas.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Aplicación clínica</td>
            <td class="border border-slate-200 p-3">Coordinar con el proveedor y comprobar compatibilidad con la base de datos.</td>
            <td class="border border-slate-200 p-3">Prueba funcional y copia previa.</td>
        </tr>
    </tbody>
</table>

<h4>7.2.3. Gestión de altas y bajas</h4>
<div class="callout callout-warning">
    <div class="callout-title"><span>👤</span> Las bajas son críticas</div>
    <p>
        Una cuenta antigua puede convertirse en una puerta de entrada. La baja debe incluir la
        desactivación de la cuenta, la retirada de permisos, la recuperación de dispositivos y la
        comprobación de que no quedan sesiones activas. Documenta cada paso.
    </p>
</div>

<h3>7.3. Copias y continuidad</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Verificar a diario que las copias programadas se han ejecutado.</li>
    <li>Revisar semanalmente el espacio y los errores del sistema de copias.</li>
    <li>Probar una restauración parcial y una completa al menos una vez al trimestre.</li>
    <li>Mantener una copia fuera de la ubicación principal y protegida con cifrado.</li>
    <li>Actualizar el plan de continuidad cuando cambie la infraestructura.</li>
    <li>Registrar el resultado de cada prueba y las acciones correctivas.</li>
</ul>

<h3>7.4. Gestión de incidentes</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fase</th>
            <th class="border border-slate-200 p-3 text-left">Preguntas clave</th>
            <th class="border border-slate-200 p-3 text-left">Documento generado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Detección</td>
            <td class="border border-slate-200 p-3">¿Qué ha ocurrido? ¿Cuándo? ¿Qué sistemas están afectados?</td>
            <td class="border border-slate-200 p-3">Registro inicial del incidente.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Clasificación</td>
            <td class="border border-slate-200 p-3">¿Es crítico? ¿Afecta a datos personales? ¿Hay que notificar?</td>
            <td class="border border-slate-200 p-3">Ficha de clasificación y decisión.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Contención</td>
            <td class="border border-slate-200 p-3">¿Cómo limitamos el impacto sin destruir evidencias?</td>
            <td class="border border-slate-200 p-3">Registro de acciones y cadena de custodia.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Erradicación y recuperación</td>
            <td class="border border-slate-200 p-3">¿Qué causa raíz eliminamos? ¿Qué copia restauramos?</td>
            <td class="border border-slate-200 p-3">Informe técnico y prueba de recuperación.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Cierre</td>
            <td class="border border-slate-200 p-3">¿Qué hemos aprendido? ¿Qué medidas evitativas aplicamos?</td>
            <td class="border border-slate-200 p-3">Informe final y plan de acciones.</td>
        </tr>
    </tbody>
</table>

<h3>7.5. Indicadores de seguimiento</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Indicador</th>
            <th class="border border-slate-200 p-3 text-left">Qué mide</th>
            <th class="border border-slate-200 p-3 text-left">Meta orientativa</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Cobertura de inventario</td>
            <td class="border border-slate-200 p-3">Porcentaje de activos identificados y con responsable.</td>
            <td class="border border-slate-200 p-3">100 % de los activos críticos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Vulnerabilidades críticas abiertas</td>
            <td class="border border-slate-200 p-3">Número de hallazgos críticos sin corregir.</td>
            <td class="border border-slate-200 p-3">Cero en sistemas expuestos.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Restauraciones verificadas</td>
            <td class="border border-slate-200 p-3">Pruebas de recuperación completadas correctamente.</td>
            <td class="border border-slate-200 p-3">Al menos una por trimestre.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Alertas revisadas</td>
            <td class="border border-slate-200 p-3">Porcentaje de alertas con seguimiento documentado.</td>
            <td class="border border-slate-200 p-3">100 % de las alertas críticas.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Personal formado</td>
            <td class="border border-slate-200 p-3">Personas que han completado la concienciación.</td>
            <td class="border border-slate-200 p-3">Todo el personal con acceso a datos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Incidentes comunicados</td>
            <td class="border border-slate-200 p-3">Incidentes reportados frente a detectados internamente.</td>
            <td class="border border-slate-200 p-3">Aumento progresivo de la comunicación temprana.</td>
        </tr>
    </tbody>
</table>

<h3>7.6. Gestión de cambios y documentación</h3>
<div class="callout callout-info">
    <div class="callout-title"><span>📝</span> Todo cambio debe dejar rastro</div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Qué se cambia, por qué, quién lo autoriza y quién lo ejecuta.</li>
        <li>Riesgo del cambio y plan de vuelta atrás.</li>
        <li>Pruebas realizadas antes y después.</li>
        <li>Fecha, versión y documentación actualizada.</li>
        <li>Comunicación a las personas afectadas.</li>
    </ul>
</div>

<h3>7.7. Formación y cultura de seguridad</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Incluir una sesión breve en la acogida de nuevo personal.</li>
    <li>Enviar recordatorios periódicos con ejemplos reales y lenguaje claro.</li>
    <li>Facilitar un canal sencillo para comunicar correos o comportamientos sospechosos.</li>
    <li>Evitar culpabilizar a quien reporta un error: la comunicación temprana reduce el daño.</li>
    <li>Adaptar los materiales a personas con distintas capacidades y niveles digitales.</li>
</ul>

<h3>7.8. Orientaciones para el profesorado</h3>
<div class="callout callout-warning">
    <div class="callout-title"><span>🧑‍🏫</span> Seguimiento del proyecto</div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Revisa que el alumnado distingue entre <strong>incidente, alerta y vulnerabilidad</strong>.</li>
        <li>Pide evidencias de las pruebas, no solo capturas de la herramienta instalada.</li>
        <li>Introduce un cambio imprevisto a mitad del proyecto para evaluar la adaptación.</li>
        <li>Valora la calidad de la documentación y la capacidad de explicar decisiones a personas no técnicas.</li>
        <li>Utiliza la revisión entre iguales para mejorar el plan de respuesta y la guía de concienciación.</li>
    </ul>
</div>
`;
