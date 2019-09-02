## litebox-test

# Caso

El proyecto consiste en un Catálogo de Películas dinámico. Las películas se encuentran categorizadas y provienen de una API pública.
Sin embargo, el catálogo debería poder ser actualizado, pudiendo agregar nuevas películas. No se dispone de un endpoint para agregar nuevas películas, sino que deberían guardarse en localStorage.
Se espera, de esta manera, que el Catálogo de Películas final, liste las películas que provienen de la API pública + del local storage y las categorice.

# Diseño

El prototipo de diseño se encuentra disponible en [Zeplin](https://zpl.io/VQRNKx4)
Desde Zeplin se deberían poder descargar los assets. 
De todas formas, adjuntamos el file [Sketch](https://drive.google.com/file/d/15fvlZr5TYtLcBA8xnhZLoF8MOjSEOCne/view?usp=sharing) con los archivos editables.

El diseño a lograr contiene links con distintos estados (hovers), sin embargo las animaciones o transiciones que se ejecuten, dependen 100% de vos. Definitivamente son un bonus!
El único link que debería ejecutar una acción es el de Agregar Películas, el resto son simplemente ilustrativos y no necesitan cumplir ninguna función pero sí deberían ser maquetados.

# Desarrollo
Una vez finalizado el ejercicio, deberás compartir un repositorio en Git para poder evaluarlo.
Como te mencionamos en la reunión, la estructura del proyecto es sólo sugerida. Si te sentís cómodo con otro stack, podés cambiarlo sin problema.

Criterios de Evaluación

- Puntualidad en la entrega
- Fidelidad entre el diseño y el maquetado
- Semántica del código
- Carga del sitio
- Velocidad de respuesta del sitio
- Correcto funcionamiento del sitio



## API Connection

# Get Película Destacada (La más nueva en Now Playing)
[GET] https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20

# Get Próximamente (Listar las 4 primeras)
[GET] https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20

# Get Populares (Listar las 4 primeras)
[GET] https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20

- Información acerca del uso de imágenes:
https://developers.themoviedb.org/3/getting-started/images
