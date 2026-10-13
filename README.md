# Reto Ortografía · 6º de Primaria

Juego para practicar ortografía en el aula. Se muestran tres palabras y hay que elegir la que está bien escrita. Cada acierto suma un punto, pero al primer fallo se acaba la partida.

## Cómo se juega

1. Escribe tu nombre (así se guardan tus fallos en tu dispositivo).
2. Elige un nivel: **Fácil**, **Medio** o **Difícil**.
3. Toca la palabra bien escrita. En ordenador también puedes pulsar 1, 2 o 3.
4. Si fallas, la palabra pasa a **Mis fallos** para que la repases más tarde.
5. Si entras en el top 10 de tu nivel, guarda tu puntuación en **Récords**.

## Repaso de fallos

Cada palabra fallada se queda en tu lista hasta que la aciertas dos veces seguidas en el repaso. Algunas aparecen también mezcladas en las partidas normales.

## Ejecutarlo

Es un único archivo HTML sin dependencias que instalar. Abre `index.html` en el navegador, o publícalo con GitHub Pages:

1. En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`.
2. Guarda y espera un minuto. La app quedará en `https://tu-usuario.github.io/nombre-del-repositorio/`.

## Notas

- Las tipografías (Unbounded y Figtree) se cargan desde Google Fonts, así que hace falta conexión para verlas; sin ella se usan tipos de reserva.
- Los fallos y los récords se guardan en el navegador de cada dispositivo. El ranking compartido entre jugadores solo funciona en la versión publicada como artefacto de Claude.
- El diseño usa una paleta mandarina con detalles dorados, verde botella y rojo, y tiene modo oscuro automático.

## Añadir o cambiar palabras

Las palabras están en el objeto `LEVELS` dentro del `<script>` de `index.html`. Cada entrada es una lista de tres textos: primero la palabra correcta y después las dos incorrectas.

```js
["huevo", "uevo", "huebo"]
```
