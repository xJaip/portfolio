export default function projects() {
    return `
<div class="container text-center">
      <h2 class="">Conoce algunos de mis Proyectos</h2>
      <span>Filtrar por:</span>
      <div class="row mb-5 py-3">
        <div class="col-sm-10 col-lg-4 mx-auto">
          <h3 class="text-start text-warning">Acorde Inmortal Online</h3>
          <h4 class="text-start text-secondary">Desarrollador</h4>
          <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Manejo de estados globales, interactividad en el sitio y con los elementos del juego y actualización de estado de juego">React</span>
          <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Mover cartas dentro del juego y en la creación de barajas">React dnd</span>
          <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Conexión de jugadores en tiempo real para una partida">Socket.io</span>
          <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Base de datos relacional del Juego: Información de cartas, barajas, diseños, ediciones, jugadores, partidas, etc.">PostgreSQL</span>
          <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Montar el servidor, lógica del juego, API para compras en la tienda, matchmaking, etc.">Node.js</span>
          <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Cargar información de las cartas en memoria del servidor para disminuir consultas a la BD.">memcached</span>
          <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Complemento para React y desarrollo de la lógica del juego">JavaScript</span>
          <p class="fs-5 text-info text-start mt-2">Aplicación web para mi juego de cartas Acorde Inmortal. Creado principalmente con React del lado del cliente y Node.js en el servidor, la página ofrece una experiencia cercana a lo que sería desarrollar una partida de este juego de cartas en vivo además de la compra de productos con monedas del juego y la creación de barajas personalizadas.</p> 
          <p class="fs-5 text-success-emphasis">Para el diseño base las cartas se utilizó una Inteligencia Artificial y Photoshop para su edición y scripts para la edición masiva de cartas.</p>
        </div>
        <div class="col-12 col-lg-7 mx-auto">
          <iframe class="col-12" width="520" height="315" src="https://www.youtube.com/embed/m0PHNQ69MZE?si=Vz4YGeGA8UrkBctv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe class="col-12" width="520" height="315" src="https://www.youtube.com/embed/xGK_g-yC_dM?si=_XyF9SBruFMcb6E8&amp;start=38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>

        <div class="row mb-5 py-3">
          <div class="col-sm-10 col-lg-7 mx-auto">
            <h3 class="text-warning"><a href="https://github.com/xJaip/club-ajedrez-conce/tree/master">Club de Ajedrez Conce</h3></a>
            <h4 class="text-start text-secondary">Desarrollador</h4>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Cuidando la semántica y correcto diseño de la web">HTML 5</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Para complementar interactividad y cargar resultados de torneos">JavaScript</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Componentes para el diseño del sitio con custom classes.">Bootstrap</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Se trabaja en el análisis y configuración para ser accesibles mediante búsquedas en internet">SEO</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Se cuida el diseño responsivo bajo el paradigma Mobile First" >Responsive</span>
            <p class="fs-5 text-info text-start mt-2">Página cuyo objetivo es promocionar el torneo Diente de Leche y el Club de Ajedrez Conce que lo realiza, según las necesidades del cliente. Muestra un acercamiento al FrontEnd utilizando Bootstrap v5.3 y Javascript Vanilla para la creación de Rankings que muestran los resultados de torneos. También lleva un trabajo de posicionamiento en buscadores.</p> 
          </div>
          <div class="col-sm-10 col-lg-5 mx-auto">
            <img class="img-fluid" src="./src/images/club-ajedrez.png" alt="Página del Club de Ajedrez">
          </div>
        </div>

        <div class="row mb-5 py-3">
          <div class="col-sm-10 col-lg-7 mx-auto">
            <h3 class="text-warning">Análisis de SIMCE</h3>
            <h4 class="text-start text-secondary">Analista de Datos</h4>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Limpieza y funciones implícitas en Jupyter Notebook.">Python</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Carga y manipulación de Datos con DataFrame.">Pandas</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Manipulación de Series para cálculos necesarios para el análisis">Numpy</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Creación de distintas gráficas para mostrar insights y personalización de gráficos.">Matplotlib</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Creación de distintas gráficas para mostrar insights y personalización de gráficos" >Seaborn</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Interpretación de información obtenida a través de los datos mediante estadísticos y visualizaciones." >Estadística</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Visualizaciones creadas siguiendo el Framework de Tamara Munzner" >DataViz</span>
            <p class="fs-5 text-info text-start mt-2">Análisis de Resultados SIMCE de 2° medio de 2023. Se descubren fuertes relaciones en asistencia y puntajes de las pruebas de matemática y lenguaje basado en su nivel de logro. Además de la existencia de fuerte correlación entre nivel socio-económico y puntajes en las diferentes pruebas que se mantiene a lo largo de todas las regiones y comunas.</p>
          </div>
          <div class="col-sm-10 col-lg-5 mx-auto">
            <img class="img-fluid" src="./src/images/sin-image.png" alt="Sin imagen disponible">
          </div>
        </div>


        <div class="row mb-5 py-3">
          <div class="col-sm-10 col-lg-7 mx-auto">
            <a href="https://colab.research.google.com/drive/1-INol0ABV6KUua3WfH65-BUOISsP6YJN?usp=sharing"><h3 class="text-warning">Clusterización de Estudiantes</h3></a>
            <h4 class="text-start text-secondary">Científico de Datos</h4>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Limpieza y funciones implícitas en Jupyter Notebook.">Python</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Carga y manipulación de Datos con DataFrame.">Pandas</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Creación de distintas gráficas para mostrar insights y personalización de gráficos.">Matplotlib</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Creación de distintas gráficas para mostrar insights y personalización de gráficos" >Seaborn</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Utilización de los modelos K-means y Agglomerative para la generación de Clusters">Scikit-Learn</span>
            <span class="custom-wrapper d-inline-flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Interpretación de información obtenida a través de los datos mediante estadísticos y visualizaciones." >Estadística</span>

            <p class="fs-5 text-info text-start mt-2">A través de las concentraciones de notas recuperadas de profesores de primero medio se genera una clusterización para crear diferentes cursos en segundo medio con grupos de similares características. Se detectan 4 grupos según inercia, se analizan y se validan para resaltar las características que maximizan la varianza entre los grupos.</p>
          </div>
          <div class="col-sm-10 col-lg-5 mx-auto">
            <img class="img-fluid" src="./src/images/cluster.png" alt="Imagen referencial del Jupiter Notebook">
          </div>
        </div>

      </div>



    </div>


    `;
}
