# Birthday Reymi

Página estática de cumpleaños hecha con HTML, Tailwind CSS, CSS y JavaScript. Preparada para GitHub Pages.

## Archivos
- `index.html`: estructura y contenido.
- `css/styles.css`: estilos visuales y responsive.
- `js/script.js`: carta, galería, música, animaciones y deseo.
- `assets/images/`: carpeta para fotografías propias.
- `assets/music/`: carpeta para el MP3.

## Personalización rápida

### 1. Cambiar fotografías
En `index.html`, busca las imágenes de la portada y las tarjetas Polaroid (`images.unsplash.com`) y reemplaza cada URL por la ruta de tu foto, por ejemplo:
`assets/images/portada.jpg`

Copia las fotografías dentro de `assets/images/`. Para las Polaroid, reemplaza tanto `src` como `data-image` para que la ampliación muestre la misma fotografía.

### 2. Agregar música
Copia un archivo MP3 dentro de `assets/music/` y nómbralo exactamente:
`birthday-song.mp3`

La web intenta reproducirlo automáticamente, pero Chrome, Safari y otros navegadores pueden exigir una primera interacción del usuario. El botón de música siempre estará disponible.

### 3. Editar la carta
En `index.html`, busca `id="letterMessage"` y modifica los párrafos. También puedes editar los mensajes de las tarjetas y el cierre.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub, por ejemplo `birthday-reymi`.
2. Sube el contenido de esta carpeta a la raíz del repositorio. `index.html` debe quedar en la raíz.
3. Abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`. Guarda.
6. Espera a que GitHub Pages publique el sitio. La URL aparecerá en esa misma sección.

No requiere build, Node.js ni instalación de dependencias. Tailwind se carga mediante CDN, por lo que se necesita conexión a internet para cargarlo y para Google Fonts.

## Nota
Las fotografías incluidas son imágenes ilustrativas de Unsplash. Sustitúyelas por las fotografías personales que quieras compartir. Usa únicamente música e imágenes sobre las que tengas permiso de uso.
