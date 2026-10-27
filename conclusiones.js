window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.conclusiones = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span>
        <span>Conclusiones y cierre del proyecto</span>
    </div>
    <p>
        Esta sección no es un resumen copiado de las anteriores. Debe recoger qué has aprendido, qué
        decisiones han funcionado, qué limitaciones tiene la solución y qué harías de forma diferente.
        La reflexión crítica forma parte de la evaluación.
    </p>
</div>

<h3>9.1. Valoración de los resultados</h3>
<p>
    Compara la situación inicial con la final. Apóyate en evidencias concretas: número de
    vulnerabilidades críticas, pruebas de conectividad entre VLAN, alertas generadas, restauración
    completada y personas formadas. Evita afirmaciones genéricas como "la seguridad ha mejorado"
    sin datos que lo demuestren.
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Ámbito</th>
            <th class="border border-slate-200 p-3 text-left">Situación inicial</th>
            <th class="border border-slate-200 p-3 text-left">Resultado obtenido</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Inventario y riesgos</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Segmentación de red</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Hardening</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Copias y restauración</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Detección y respuesta</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Concienciación</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>9.2. Dificultades y decisiones</h3>
<div class="callout callout-warning">
    <div class="callout-title"><span>🧩</span> Explica el proceso, no solo el resultado</div>
    <ul class="list-disc pl-6 space-y-2">
        <li>¿Qué problema técnico te bloqueó y cómo lo resolviste?</li>
        <li>¿Qué alternativa descartaste y por qué?</li>
        <li>¿Qué error cometiste que ahora evitarías?</li>
        <li>¿Qué decisión tomaste por limitaciones de presupuesto o de personal?</li>
        <li>¿Cómo repartisteis el trabajo y qué haríais diferente en la organización del equipo?</li>
    </ul>
</div>

<h3>9.3. Limitaciones de la solución</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>El laboratorio no reproduce toda la complejidad de una clínica real.</li>
    <li>Algunas herramientas pueden requerir licencias o soporte para un uso profesional sostenido.</li>
    <li>La concienciación no elimina el riesgo humano; debe mantenerse en el tiempo.</li>
    <li>La seguridad es un proceso continuo: nuevas vulnerabilidades aparecen cada día.</li>
    <li>La solución depende de que la dirección apruebe y mantenga los recursos necesarios.</li>
</ul>

<h3>9.4. Líneas de mejora</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🔐 Identidad</h4>
        <p class="text-sm m-0">Ampliar MFA a todos los servicios, revisar privilegios y aplicar acceso condicional.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">📊 Detección</h4>
        <p class="text-sm m-0">Mejorar la correlación de eventos, reducir falsos positivos y definir casos de uso.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">💾 Continuidad</h4>
        <p class="text-sm m-0">Automatizar pruebas de restauración y documentar escenarios de recuperación.</p>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-2">🧑‍🏫 Personas</h4>
        <p class="text-sm m-0">Convertir la concienciación en un programa periódico con métricas y refuerzo.</p>
    </div>
</div>

<h3>9.5. Posibles entregables finales</h3>
<div class="callout callout-success">
    <div class="callout-title"><span>📦</span> Expediente del proyecto</div>
    <ol class="list-decimal pl-6 space-y-2">
        <li><strong>Memoria técnica</strong> con contexto, análisis, diseño e implementación.</li>
        <li><strong>Inventario de activos</strong> y matriz de riesgos actualizada.</li>
        <li><strong>Diagramas de red</strong> antes y después, con justificación de la segmentación.</li>
        <li><strong>Guía de hardening</strong> con comandos, capturas y resultados.</li>
        <li><strong>Informe de vulnerabilidades</strong> antes y después del proyecto.</li>
        <li><strong>Prueba de restauración</strong> documentada y verificada.</li>
        <li><strong>Plan de respuesta ante incidentes</strong> y plantillas asociadas.</li>
        <li><strong>Campaña de concienciación</strong> con materiales y resultados agregados.</li>
        <li><strong>Presentación ejecutiva</strong> para dirección y guion de defensa.</li>
        <li><strong>Registro de lecciones aprendidas</strong> y propuestas de mejora.</li>
    </ol>
</div>

<h3>9.6. Rúbrica de autoevaluación</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Criterio</th>
            <th class="border border-slate-200 p-3 text-left">Insuficiente</th>
            <th class="border border-slate-200 p-3 text-left">Adecuado</th>
            <th class="border border-slate-200 p-3 text-left">Excelente</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Análisis y justificación</td>
            <td class="border border-slate-200 p-3">Copia soluciones sin explicar el contexto.</td>
            <td class="border border-slate-200 p-3">Justifica las decisiones principales.</td>
            <td class="border border-slate-200 p-3">Compara alternativas y argumenta con criterios técnicos, económicos y legales.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Implementación técnica</td>
            <td class="border border-slate-200 p-3">Configura parcialmente y no prueba.</td>
            <td class="border border-slate-200 p-3">Implementa lo esencial y documenta pruebas.</td>
            <td class="border border-slate-200 p-3">Implementa, verifica, corrige y demuestra el antes y el después.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Documentación y evidencias</td>
            <td class="border border-slate-200 p-3">Incompleta o sin capturas.</td>
            <td class="border border-slate-200 p-3">Clara y suficiente para reproducir lo esencial.</td>
            <td class="border border-slate-200 p-3">Profesional, versionada y comprensible para otra persona.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Seguridad y ética</td>
            <td class="border border-slate-200 p-3">No respeta límites del laboratorio.</td>
            <td class="border border-slate-200 p-3">Trabaja en el entorno autorizado y protege datos.</td>
            <td class="border border-slate-200 p-3">Anticipa riesgos, documenta límites y aplica privacidad desde el diseño.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Comunicación</td>
            <td class="border border-slate-200 p-3">Exposición confusa o solo técnica.</td>
            <td class="border border-slate-200 p-3">Explica la solución con claridad.</td>
            <td class="border border-slate-200 p-3">Adapta el mensaje a dirección y a personal no técnico y responde con solvencia.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Trabajo en equipo</td>
            <td class="border border-slate-200 p-3">Reparto desigual y poca coordinación.</td>
            <td class="border border-slate-200 p-3">Cumple su rol y comunica avances.</td>
            <td class="border border-slate-200 p-3">Coordina, revisa el trabajo de otras personas y mejora el proceso.</td>
        </tr>
    </tbody>
</table>

<h3>9.7. Preparación de la defensa</h3>
<div class="callout callout-info">
    <div class="callout-title"><span>🎤</span> Guion sugerido</div>
    <ol class="list-decimal pl-6 space-y-2">
        <li>Presenta la empresa y el incidente en menos de dos minutos.</li>
        <li>Explica los tres riesgos principales y por qué son críticos.</li>
        <li>Muestra el antes y el después con una evidencia visual.</li>
        <li>Justifica una decisión técnica concreta y una limitación.</li>
        <li>Presenta el coste aproximado y el retorno esperado.</li>
        <li>Cierra con las líneas de mejora y pide las preguntas del panel.</li>
    </ol>
</div>

<h3>9.8. Orientaciones para el profesorado</h3>
<div class="callout callout-warning">
    <div class="callout-title"><span>🧑‍🏫</span> Evaluación del cierre</div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Comprueba que las conclusiones se apoyan en evidencias y no solo en opiniones.</li>
        <li>Pregunta por una decisión concreta y por una alternativa descartada.</li>
        <li>Valora la capacidad de reconocer limitaciones y riesgos residuales.</li>
        <li>Incluye una pregunta imprevista para evaluar la comprensión profunda.</li>
        <li>Permite formatos alternativos de defensa si el alumnado lo necesita.</li>
    </ul>
</div>
`;
