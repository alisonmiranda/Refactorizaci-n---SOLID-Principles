# Proyecto para practicar

Este proyecto usa Vanilla TypeScript con Vite para estudiar los principios SOLID y Clean Code mediante una refactorización SRP.

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Bitácora de reflexión SRP

### Antes
El bloque inicial en `src/01-srp/product-bloc.ts` mezclaba tres responsabilidades distintas:
- carga y guardado de productos,
- envío de correos,
- lógica de suscripciones.

Ese diseño era frágil porque cualquier cambio en persistencia, notificaciones o suscripciones obligaba a tocar la misma clase. También dificultaba probar cada parte por separado y aumentaba el acoplamiento.

### Después
La refactorización separó estas responsabilidades en clases especializadas:
- `ProductService`: carga y guarda productos.
- `Mailer`: encapsula el envío de correos.
- `SubscriptionBloc`: concentra la lógica de suscripciones.
- `ProductBloc`: ahora actúa como coordinador y recibe dependencias por inyección.

Esta estructura mejora la mantenibilidad porque cada módulo tiene una única razón de cambio y el código es más fácil de extender.

### Retos que resolvimos
1. Evitar que `ProductBloc` tuviera conocimiento de cómo se guardan los datos.
2. Separar la lógica de notificación para no mezclar infraestructura con negocio.
3. Mantener el flujo principal sin perder claridad al introducir dependencias inyectadas.

### Conclusión
La refactorización demuestra que SRP no consiste solo en mover métodos, sino en identificar responsabilidades reales y aislarlas. Esto hace el sistema más legible, testeable y preparado para cambios futuros.

## Evidencia de entrega
- Rama de trabajo: `feature/srp-refactor`
- Commits semánticos realizados: `init`, `refactor`, `refactor`, `refactor`, `refactor`
- Verificación: `npm run build` debe ejecutarse correctamente antes de entregar el PR hacia `main`.
