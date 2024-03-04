import image0 from "../images/section2/0.jpg";
import image1 from "../images/section2/1.jpg";
import image2 from "../images/section2/2.jpg";
import image3 from "../images/section2/3.jpg";
import image4 from "../images/section2/4.jpg";
import image5 from "../images/section2/5.jpg";
import image6 from "../images/section2/6.jpg";
import image7 from "../images/section2/7.png";
import image8 from "../images/section2/8.jpeg";
import Gallery from "../../components/Gallery/Gallery";

import { Paragraph } from "components";

import tula from "../images/section2/tula.jpg";
import period from "../images/section2/period.jpg";
import barnet from "../images/section2/barnet.jpg";

const images = [
  {
    original: "https://miro.medium.com/max/3466/1*yjBnZOPFMQDoF82bnlyXRg.jpeg",
    thumbnail: "https://miro.medium.com/max/3466/1*yjBnZOPFMQDoF82bnlyXRg.jpeg",
  },
  {
    original: "https://miro.medium.com/max/1606/1*AEYI7Wr1qOOvAwpFZb66yA.jpeg",
    thumbnail: "https://miro.medium.com/max/1606/1*AEYI7Wr1qOOvAwpFZb66yA.jpeg",
  },
  {
    original: "https://miro.medium.com/max/3334/1*B6XuvE9_f6vi5dTBoZuBqw.jpeg",
    thumbnail: "https://miro.medium.com/max/3334/1*B6XuvE9_f6vi5dTBoZuBqw.jpeg",
  },
  {
    original: "https://miro.medium.com/max/2298/1*F6oz1PknsJJ17IlG4yFxKA.jpeg",
    thumbnail: "https://miro.medium.com/max/2298/1*F6oz1PknsJJ17IlG4yFxKA.jpeg",
  },
  {
    original: "https://miro.medium.com/max/2464/1*fMbpM24ZaM7Fr4bTB4gqMQ.jpeg",
    thumbnail: "https://miro.medium.com/max/2464/1*fMbpM24ZaM7Fr4bTB4gqMQ.jpeg",
  },
  {
    original: "https://miro.medium.com/max/2904/1*QojVt2A77qmTkfAoHKM4aw.jpeg",
    thumbnail: "https://miro.medium.com/max/2904/1*QojVt2A77qmTkfAoHKM4aw.jpeg",
  },

  {
    original: "https://miro.medium.com/max/3828/1*pUeqzbQWzpdFlgoriX4Fdw.jpeg",
    thumbnail: "https://miro.medium.com/max/3828/1*pUeqzbQWzpdFlgoriX4Fdw.jpeg",
  },
  {
    original: "https://miro.medium.com/max/2376/1*6UITvoiOgxMH2akN1Kuvng.jpeg",
    thumbnail: "https://miro.medium.com/max/2376/1*6UITvoiOgxMH2akN1Kuvng.jpeg",
  },
  {
    original: "https://miro.medium.com/max/3608/1*X3gJ8XMEG2rB3khTNT6QrQ.jpeg",
    thumbnail: "https://miro.medium.com/max/3608/1*X3gJ8XMEG2rB3khTNT6QrQ.jpeg",
  },
  {
    original: "https://miro.medium.com/max/1904/1*toxWTK8NssGwk1BrcuiObg.jpeg",
    thumbnail: "https://miro.medium.com/max/1904/1*toxWTK8NssGwk1BrcuiObg.jpeg",
  },
  {
    original: "https://miro.medium.com/max/2464/1*VLyuNPdzivFMyH6YljtSzA.jpeg",
    thumbnail: "https://miro.medium.com/max/2464/1*VLyuNPdzivFMyH6YljtSzA.jpeg",
  },
  {
    original: "https://miro.medium.com/max/4400/1*R43w40jReHgnUYmRqgH78A.jpeg",
    thumbnail: "https://miro.medium.com/max/4400/1*R43w40jReHgnUYmRqgH78A.jpeg",
  },
  {
    original: "https://miro.medium.com/max/3290/1*CuXmqQwQW1wWHy9Ny0mbbw.jpeg",
    thumbnail: "https://miro.medium.com/max/3290/1*CuXmqQwQW1wWHy9Ny0mbbw.jpeg",
  },
  {
    original: "https://miro.medium.com/max/3630/1*sa1z_GINHGFp9QRnLHhqWw.jpeg",
    thumbnail: "https://miro.medium.com/max/3630/1*sa1z_GINHGFp9QRnLHhqWw.jpeg",
  },
  {
    original: "https://miro.medium.com/max/2496/1*kKQ8abxpod4rNWYleQCYEQ.jpeg",
    thumbnail: "https://miro.medium.com/max/2496/1*kKQ8abxpod4rNWYleQCYEQ.jpeg",
  },
  {
    original: "https://miro.medium.com/max/3036/1*v1hFqGpTzB4L1FeMPjv1lw.jpeg",
    thumbnail: "https://miro.medium.com/max/3036/1*v1hFqGpTzB4L1FeMPjv1lw.jpeg",
  },
];

const images1 = [
  {
    original: "https://miro.medium.com/max/810/1*AipKsc6vO8fUBVSq9RekTg.jpeg",
    thumbnail: "https://miro.medium.com/max/810/1*AipKsc6vO8fUBVSq9RekTg.jpeg",
  },
  {
    original: "https://miro.medium.com/max/1560/1*acYlq0ofyHJJXzONSyEseQ.jpeg",
    thumbnail: "https://miro.medium.com/max/1560/1*acYlq0ofyHJJXzONSyEseQ.jpeg",
  },
  {
    original: "https://miro.medium.com/max/960/1*mzN8WECe_Z8hSorDXHn1iw.jpeg",
    thumbnail: "https://miro.medium.com/max/960/1*mzN8WECe_Z8hSorDXHn1iw.jpeg",
  },
  {
    original: "https://miro.medium.com/max/956/1*rrDYJyjVgjUi4Euyel6rbQ.jpeg",
    thumbnail: "https://miro.medium.com/max/956/1*rrDYJyjVgjUi4Euyel6rbQ.jpeg",
  },
  {
    original: "https://miro.medium.com/max/1930/1*cc3sEBBeAS_3XHVt_4aYVg.jpeg",
    thumbnail: "https://miro.medium.com/max/1930/1*cc3sEBBeAS_3XHVt_4aYVg.jpeg",
  },
  {
    original: "https://miro.medium.com/max/956/1*dLh4R0fjZSnOiBkNIzC9qg.jpeg",
    thumbnail: "https://miro.medium.com/max/956/1*dLh4R0fjZSnOiBkNIzC9qg.jpeg",
  },
  {
    original: "https://miro.medium.com/max/964/1*bW3xC4Q9sEU3R5aLo9Ll-Q.jpeg",
    thumbnail: "https://miro.medium.com/max/964/1*bW3xC4Q9sEU3R5aLo9Ll-Q.jpeg",
  },
  {
    original: "https://miro.medium.com/max/930/1*zhfNoXpeXZqXvFRXnyWIfg.jpeg",
    thumbnail: "https://miro.medium.com/max/930/1*zhfNoXpeXZqXvFRXnyWIfg.jpeg",
  },
  {
    original: "https://miro.medium.com/max/956/1*RgqS_RFbPQDsbJIm5QFnIg.jpeg",
    thumbnail: "https://miro.medium.com/max/956/1*RgqS_RFbPQDsbJIm5QFnIg.jpeg",
  },
  {
    original: "https://miro.medium.com/max/1528/1*7dWGfZnVjl7qG9dIPX-8ng.jpeg",
    thumbnail: "https://miro.medium.com/max/1528/1*7dWGfZnVjl7qG9dIPX-8ng.jpeg",
  },
  {
    original: "https://miro.medium.com/max/670/1*7SEkVlNORGCCkPrJAyR-Kg.jpeg",
    thumbnail: "https://miro.medium.com/max/670/1*7SEkVlNORGCCkPrJAyR-Kg.jpeg",
  },
  {
    original: "https://miro.medium.com/max/910/1*r0XwNEZBVkb8-hF90NzvUg.jpeg",
    thumbnail: "https://miro.medium.com/max/910/1*r0XwNEZBVkb8-hF90NzvUg.jpeg",
  },
];

const images2 = [
  {
    original: "https://miro.medium.com/max/1398/1*nRXf7IXbnBnxo9uxWNZPzw.jpeg",
    thumbnail: "https://miro.medium.com/max/1398/1*nRXf7IXbnBnxo9uxWNZPzw.jpeg",
  },
  {
    original: "https://miro.medium.com/max/1400/1*v1hFqGpTzB4L1FeMPjv1lw.jpeg",
    thumbnail: "https://miro.medium.com/max/1400/1*v1hFqGpTzB4L1FeMPjv1lw.jpeg",
  },
];

export const tintaAyer = [
  {
    id: 1,
    image: (
      <img
        style={{ width: "100%", aspectRatio: 200 / 133 }}
        src={image0}
        alt=""
      />
    ),
    slug: "con-identidad-de-pasion-y-sueños-en-mañana",
    title: "Con identidad de pasión y sueños en mañana ",
    category: "con-tinta-de-ayer",
    excerpt: `Querida Carilda:
    Si alguna vez Matanzas olvidara nombrar la silueta de los puentes, las olas de la bahía, los bancos del Parque Libertad, el viejo Teatro Sauto...`,
    description: (
      <>
        <img style={{ width: "100%", marginBottom: 20 }} src={image1} alt="" />
        <Paragraph style={{ textAlign: "right" }}>
          La Habana, 6 de julio del 2002 “Año de los Héroes Prisioneros del
          Imperio”
        </Paragraph>
        <Paragraph>Querida Carilda :</Paragraph>
        <Paragraph>
          Si alguna vez Matanzas olvidara nombrar la silueta de los puentes, las
          olas de la bahía, los bancos del Parque Libertad, el viejo Teatro
          Sauto, las galerías y los patios coloniales, los antiguos y nuevos
          edificios, las plazas, las gentes, las calles, los ríos y hasta la
          misma vida y hasta la misma vida de la ciudad, con solo decir Carilda
          todo fuera poética y maravillosamente reconocido, sin decir
          absolutamente nada más.
        </Paragraph>
        <Paragraph>
          Ahora que el tiempo regala 80 años a tu joven sonrisa, a tus ojos
          claros, a las palabras que imaginas en versos sorprendentes y han
          tecleado tus dedos incansables, te felicito cálida y afectuosamente,
          como alguien que comparte esa pasión que confesabas hace pocos días,
          como alguien que nunca aspira al pasado y vive y sueña en mañana.
        </Paragraph>
        <Paragraph>
          A una mujer que escribe para comunicar su amor a la patria, a los
          héroes y mártires, a la familia, la rosa, hormigas, al dolor, a la
          justicia y quiere como último abrazo, el abrazo de toda la tierra de
          su patria sobre su tumba, nosotros, los cubanos que hemos tenido el
          privilegio de conocerte y leer tu obra, palpable constancia de la
          fuerza creadora, la cubanía y el valor de una mujer con quien contamos
          para todas nuestras batallas, dedicamos nuestro homenaje en el
          esfuerzo de alcanzar en la cultura y la educación de nuestro pueblo la
          altura de tu poesía.
        </Paragraph>
        <Paragraph>
          Permíteme en tu cumpleaños, el privilegio de darte gracias por tanta
          sensibilidad y por el lirismo de tu pertenencia a este Archipiélago en
          Revolución.
        </Paragraph>
        <Paragraph>Un abrazo fraternal,</Paragraph>
        <Paragraph style={{ marginBottom: 50 }}>Fidel Castro</Paragraph>

        <Paragraph style={{ textAlign: "center", marginBottom: 100 }}>
          * Carta enviada por Fidel a Carilda en su 80 cumpleaños, publicada en
          el Periódico Girón
        </Paragraph>
      </>
    ),
  },
  {
    id: 2,
    image: (
      <img
        style={{ width: "100%", aspectRatio: 200 / 133 }}
        src={image7}
        alt=""
      />
    ),
    slug: "de-cronista-a-cronista-apuntes-sobre-la-relacion-de-carilda-y-el-periodico-giron",
    title: "La relación de Carilda y el Periódico Girón",
    category: "con-tinta-de-ayer",
    author: "Guillermo Carmona Rodríguez",
    excerpt: `El Periódico Girón se funda en 1960 y su objetivo desde el inicio fue registrar el acontecer de la provincia de Matanzas, con todos sus matices y contradicciones. 
    `,
    description: (
      <>
        <img style={{ width: "100%", marginBottom: 20 }} src={period} alt="" />
        <Paragraph>
          El Periódico Girón se funda, con el nombre con el que hoy lo conocemos
          en 1960. Como es deber y misión y fe de los de su tipo le correspondía
          guardar en tinta una ciudad y una provincia, primero como noticia y
          luego como crónica que trascendiera hasta los matanceros no nacidos.
          Sin embargo, hay otras maneras en que un pedazo de tierra (entendida
          más allá de los sustratos del suelo) sea conservado para la
          posterioridad.
        </Paragraph>
        <Paragraph>
          Si los medios de prensa representan la verdad objetiva de un contexto,
          entonces las artes son la otra cara de la moneda, la subjetividad con
          que cargamos los mares y los puentes y la gente que gasta suelas. Ahí
          entran los poetas que podríamos llamar los cronistas de lo intangible.
          Quizás en la segunda mitad del siglo XX yumurino, en nombre y alma, la
          más reconocida de ellos fue Carilda Oliver Labra. Este texto busca un
          somero acercamiento entre la novia y el diario de Matanzas. Este no
          fue siempre feliz ni justo, como mismo, no siempre los hombres son
          felices ni justos.
        </Paragraph>
        <Paragraph>
          El primer texto de Carilda aparecería diez años después de la
          fundación de Girón. La poetisa después del sisma social de 1959 sin
          tanta parafernalia y oscuridad, como sucedería con otros intelectuales
          en la década de los 70, cae en una especie de ostracismo social. En
          verdad no se le limita, pero sí se le invisibiliza; sencillamente su
          nombre se vuelve un espacio vacío. Es un caso bastante peculiar,
          porque no olvidemos que en su haber se hallan poemas revolucionarios
          como Canto a Fidel que cuenta la leyenda que subieron en una bota a la
          Sierra Maestra y lo leyeron en Radio Rebelde en medio de la contienda
          entre los barbudos y las fuerzas batistianas.
        </Paragraph>
        <Paragraph>
          Arturo Arango, afamado guionista y escritor cubano, quien trabajó como
          especialista de literatura en Matanzas a finales de los 70 escribiría
          en un artículo publicado en la Gaceta de Cuba:
        </Paragraph>
        <Paragraph>
          “Nunca supe las razones por las que fue marginada. En Matanzas nadie
          de los campos de la cultura o de la política era indiferente a su
          presencia. En aquel ambiente, muy cargado de conflictos y
          contradicciones estaban vivas rencillas que procedían de los años 50.
          Esas desavenencias, en su caso, se confundían con la admiración sin
          límites que muchos le profesaban (…) En última instancia, durante ese
          periodo de exclusiones fue víctima de la envidia que generan los
          mediocres”.
        </Paragraph>
        <Paragraph>
          Estas rencillas a las que hace referencia Arango provenían de la
          proximidad de Carilda con las cúpulas matanceras del poder antes del
          59, como su amistad con la alcaldesa de la ciudad, y otras figuras
          públicas del régimen. A ello se le suma que parte de su familia emigró
          hacia los Estados Unidos al principio de la Revolución. Estos
          elementos en tiempos convulsos y de cambio, activaron la suspicacia y
          el recelo de más de uno. Varios de los testigos de la época coinciden
          en que este ostracismo era puramente provincial y no existió ningún
          decreto guillotina; todo era de boca a boca, de jefe a subordinado y
          entre coterráneos.
        </Paragraph>
        <Paragraph>
          Después de más de una década de silencio editorial, la primera
          publicación Carilda la realiza en el Girón; para ser más exacto, en el
          suplemento cultural Yumurí en el año 77. Este anexo del Girón surge
          mediados de dicha década y es el primero de su tipo en el país y
          durante bastante tiempo el único. Aurora López, coordinadora en sus
          años iniciales, cuenta cómo ocurrió el suceso.
        </Paragraph>
        <Paragraph>
          “El Periódico estaba cerca de la línea del tren por la Terminal de
          Ómnibus, lo que es hoy propaganda del Partido, y Carilda vivía a dos
          cuadras de ahí. Ella iba un promedio de dos veces a la semana para que
          le publicaran. Era la etapa de su ostracismo.
        </Paragraph>
        <Paragraph>
          El director en aquel entonces del Periódico provenía de una familia
          muy revolucionaria. Fue un combatiente clandestino que incluso sufrió
          prisión y torturas. Él sentía una aversión muy grande a todo lo que le
          oliera a tiranía batistiana y ella estaba muy relacionada con el
          régimen anterior.
        </Paragraph>
        <Paragraph>
          Yo iba a hablar con él y le decía Carilda está ahí y el no, no, no.
          Ella gana el premio 26 de julio de la FAR con el poema “La ceiba dijo
          tú”. Subí a ver al director y le pregunté, ¿y ahora?, Bueno si la FAR
          se lo premió hay que publicarlo, me contesta. Así fue como el primer
          sitio donde publica después de su ostracismo es el suplemento”.
        </Paragraph>
        <Paragraph>
          Este poema, publicado en el Yumurí, sería el paso inicial en la
          reincorporación de Carilda a la vida literaria matancera. Su primera
          presentación pública, según relata Arturo Arango, la realizó en la
          sala José White, en ese momento Casa de Cultura, en la cual utilizó el
          mismo vestido que en su último recital, quince años atrás, para
          demostrar que la vida había retomado su cauce, que la poesía se
          imponía por encima de los prejuicios.
        </Paragraph>
        <Paragraph>
          Después de este punto de giro, la poeta colabora asiduamente con el
          Yumurí. Si recorremos los archivos del Girón, encontraremos diversos
          textos de su autoría, algunos de actualidad, como “Miguel Barnet en
          Matanzas”, sobre el reconocido etnólogo y poeta; crónicas históricas,
          “La visita de Tula a Matanzas” donde habla de la presencia de
          Gertrudis Gómez de Avellaneda en la urbe; o la reseña “Julia de
          Burgos: Criatura de agua”, entre otros. Inclusive dichos textos le
          permiten ingresar a la Unión de Periodistas de Cuba, organización a la
          que pertenece hasta su muerte. Esta relación cesa cuando cercano al
          principio de los 90 el Yumurí deja de imprimirse.
        </Paragraph>
        <Paragraph>
          También recupera su prestancia como figura de la cultura yumurina y
          voz autorizada para opinar sobre los derroteros de las artes, locales
          y universales. En los registros también hallamos muchas entrevistas a
          su persona, sobre temas diversos, como “Es necesaria la crítica para
          el desarrollo cultural…”; notas en las cuales el principal es su
          presencia y otros escritos que giran alrededor de esa poderosa órbita
          suya.
        </Paragraph>
        <Paragraph>
          “Mira la relación que llegó a tener con el Periódico que al principio
          de la década de los 80, Orlandito (Orlando García Lorenzo que sería
          luego presidente provincial de la UNEAC) va a Nicaragua a impartir
          clases y todos los meses enviaba un trabajo desde allí para el
          periódico, Carilda era quien lo recibía y se encargaba de revisarlo,
          limpiarlo y llevarlo para el Yumurí”, relata Maritza Tejera, quien
          trabajó en ese periodo en el suplemento.
        </Paragraph>
        <Paragraph>
          “Recuerdo que ella va a la Unión Soviética donde se encuentra con
          Yevgueni Yevtushenko, el afamado poeta, y al regresar le da una
          conferencia a los periodistas del diario sobre su periplo”, agrega en
          su recuento.
        </Paragraph>
        <Paragraph>
          Después del comienzo del Período Especial hasta la muerte de la poeta
          en las páginas de cultura del ya semanario Girón guardarían diversos
          textos mediante los cuales se pudiera crear una cronología de los
          hitos de su trayectoria artística. “Siempre tuvo mucha afinidad con la
          prensa; sobre todo, la escrita. En el año 97 cuando se le da el Premio
          Nacional de Literatura la primera entrevista que se le hace, la misma
          noche cuando se hace el público el reconocimiento, es para el Girón.”,
          ejemplifica Maritza.
        </Paragraph>
        <Paragraph style={{ marginBottom: 100 }}>
          En este 2022 se celebra el centenario de Carilda, aunque ella se nos
          haya escapado entre los dedos, porque al final la vida material y
          orgánica, y perdonen la licencia poética, tiene la consistencia
          efímera de las aguas, permanece una leyenda y una estirpe. El Girón,
          consecuente a su relación histórica con ella, continuará en la defensa
          de su legado, de cronista a cronista, de matancero a matancero.
        </Paragraph>

        <Gallery images={images1} />
      </>
    ),
  },
  {
    id: 3,
    image: (
      <img
        style={{ width: "100%", aspectRatio: 200 / 133 }}
        src={image4}
        alt=""
      />
    ),
    slug: "miguel-barnet-en-matanzas",
    title: "Miguel Barnet y su diálogo con la poetisa",
    category: "con-tinta-de-ayer",
    author: "Carilda Oliver Labra",
    excerpt: `La Sección de Literatura de la Brigada Hermanos Saiz de Matanzas inauguró hace pocos meses un ciclo de coloquios sobre la obra de Carilda.`,
    description: (
      <>
        <img style={{ width: "100%", marginBottom: 20 }} src={barnet} alt="" />
        <Paragraph>
          La Sección de Literatura de la Brigada Hermanos Saiz de Matanzas
          inauguró hace pocos meses un ciclo de coloquios sobre la obra de los
          más fundamentales escritores cubano, para impulsar el interés
          colectivo en la crítica literaria y fortalecer la vocación por un
          género que, quizás por las múltiples dificultades en el ejercicio del
          mismo, no ha alcanzado el suficiente desarrollo en el país. Resulta
          pues una iniciativa digna de apoyo, porque tal empeño tiene como
          objetivo propender al estudio de nuestros más destacados hombres de
          letras, siguiendo siempre una metodología al alcance de los jóvenes
          que comienzan ahora a iniciarse en estos menesteres.
        </Paragraph>
        <Paragraph>
          El primer coloquio fue dedicado a Onelio Jorge Cardoso. Corresponde
          hoy, segundo de la serie, intentar una valoración, que aunque no tiene
          ambiciosas pretensiones sí es feliz suceso en nuestro ambiente porque
          facilitará un enfoque general de la obra de Miguel Barnet; abarcador
          tanto de su narrativa como de su poesía, y propiciará el
          enjuiciamiento riguroso de temática y estilo. Tendremos además la
          presencia del escritor quien, oídas todas las deliberaciones,
          esclarecerá conceptos, apoyará tesis o las combatirá, según lo estime
          prudente y necesario.
        </Paragraph>
        <Paragraph>
          Miguel Barnet, cuya primera obra, Biografía de un cimarrón (1966), ha
          sido traducida a innumerables idiomas e incluso ha servido de anécdota
          para óperas en Europa, amén de haber merecido más de una veintena de
          ediciones que recorren el mundo, es también el autor de La canción de
          Rachel (1970) y Gallego (1983), ambas también novelas testimoniales.
          Esta trilogía hábilmente estructurada por el autor, sin aparente
          instrumentación literaria, delinea en su doble carácter social e
          histórico tres personajes muy criollos: el negro, la mulata y el
          gallego. Esta fusión de elementos étnicos a los que su talento supo
          dotar de homogeneidad, constituye en la historia de nuestra literatura
          algo excepcional si tenemos en cuenta además que inaugura el género de
          testimonio.
        </Paragraph>
        <Paragraph>
          La profesión de nuestro escritor entregado desde muy joven a la
          investigación científica como etnólogo y folclorista, le ha motivado e
          influenciado indudablemente; tanto en la fase narrativa como en la
          poética. En la mayor parte de sus textos hay una búsqueda de la
          identidad nacional. Ha ahondado en nuestras raíces, en las esencias
          populares, en el folclor y es un profundo conocedor de los estratos
          sociales; y no solamente eso, sino que ha penetrado en la poesía de
          los misterios religiosos, naturales, cosmogónicos, y con donaire la ha
          sabido llevar a la letra, en forma directa, sin alambicamientos ni
          afeites, en uso de un lenguaje comunicativo y espontáneo pero nunca
          mediocre. Diríamos que Barnet es implacable consigo mismo y no se ha
          permitido el menor desliz hacia el mal gusto o la vulgaridad; virtud
          esta que hay que estimularle mucho pues siempre ha trabajado con
          factores lingüísticos difíciles, y sin embargo, no ha caído en
          populismos.
        </Paragraph>
        <Paragraph>
          Afirmaba Fernández Retamar: “de los poetas surgidos con posterioridad
          a la Revolución es él quien primero encuentra su voz propia”, y
          efectivamente, en medio de la confusión de proyecciones y el desaliño
          formal vigentes, Barnet, dueño de sí, debuta con un desenfado
          contenido, con un lirismo potente pero sutil, en libros como La
          Sagrada Familia, que obtuviera mención en el Concurso Casa de Las
          Américas en 1967 y es uno de los más puros y auténticos de la
          literatura cubana.
        </Paragraph>
        <Paragraph>
          A través de sus páginas, el autor se divide en dos vertientes
          importantes: la familia, a la cual ama y con la que polemiza
          dignamente, y las motivaciones de los mitos yorubas, a los que aprende
          en una simbiosis maravillosa con su yo poético. Este libro, si no
          hubiera existido Biografía de un cimarrón con aquella poderos
          incursión en la vida centenaria de un negro esclavo que huyó a los
          montes de Cuba en plena etapa esclavista –relato en primera persona en
          el cual supo Barnet menudear la poesía, la realidad y la imaginación–
          hubiera evidenciado el gran escritor que es, pues las raíces nutricias
          de sus asuntos, la fuerza de una expresión originalísima y el
          descubrimiento de sentires y dichos muy cubanos han aportado a su
          obra, como décimos al principio, un mérito indiscutible en el
          encuentro de nuestra identidad nacional; y han servido de acicate,
          estímulo e inspiración a muchos otros autores para la búsqueda de
          nuestros ancestros criollos.
        </Paragraph>
        <Paragraph>
          En su obra inédita, que parcialmente conocemos, sigue vigente este
          programa. Así, en el cuaderno Con pies de gato, ahora en preparación,
          apunta el interés creador hacia nuestro paisaje físico y espiritual,
          abunda en un entregado amor al país; y luego deriva rumbo a algunos
          personajes locales, como el Caballero de París, la Macorina, la
          Marquesa, etc; figuras que devuelve a la leyenda cubana transfiguradas
          por su gracia. Y en La vida real, novela ya en prensa, asume la
          historia de un nativo exiliado en tierras norteamericanas haciendo de
          su nostalgia y vicisitudes todo un tratado de nacionalismo y hermosa
          poesía. Es este libro, posiblemente, el que situará a Barnet entre los
          más grandes escritores comprometidos con su patria y la Revolución.
        </Paragraph>
        <Paragraph>
          Tales razones nos obligan a reconocer con gratitud el coloquio de los
          brigadistas matanceros de la “Hermanos Saiz”, que tendrá lugar a media
          mañana, hoy sábado siete en la Casa del Escritor. Han acertado al
          seleccionar un creador nuestro, que a sus exquisitas virtudes de
          modestia y nobleza, une la muy elevada de haberle desentrañado a Cuba
          su propia fisionomía, aquellas fuentes que la alimentan con savias muy
          particulares y que él ha integrado en un todo científico y artístico a
          la vez hecho este que confiere una connotación cultural muy específica
          a su obra dentro del panorama de las letras caribeñas.
        </Paragraph>
        <Paragraph style={{ marginBottom: 50 }}>Septiembre de 1985</Paragraph>
        <Paragraph style={{ textAlign: "center" }}>GÉNESIS I</Paragraph>
        <Paragraph
          style={{
            textAlign: "justify",
            display: "flex",
            justifyContent: "center",
            marginBottom: 50,
          }}
        >
          <i style={{ width: 300 }}>
            “Para hacer una tierra fértil bastó un río para hacer un río bastó
            una corriente del mal para hacer el mar bastó la lluvia para hacer
            la lluvia bastó Dios para hacer a Dios hubo que contar con todos los
            hombre. (Del libro inédito Con pies de gato)”
          </i>
        </Paragraph>

        <Paragraph style={{ marginBottom: 100 }}>
          * Publicado en el suplemento Yumurí en septiembre de 1985
        </Paragraph>
      </>
    ),
  },
  {
    id: 4,
    image: (
      <img
        style={{ width: "100%", aspectRatio: 200 / 133 }}
        src={tula}
        alt=""
      />
    ),
    slug: "la-visita-de-tula-a-matanzas",
    title: "La visita de Tula a la cuidad de Matanzas ",
    category: "con-tinta-de-ayer",
    author: "Carilda Oliver Labra",
    excerpt: `La historia cuenta que hace 120 años, Tula, la más célebre y grande de las poetisas cubanas, llegó a Matanzas y visitó Liceo Artístico y Literario de la ciudad.`,
    description: (
      <>
        <img style={{ width: "100%", marginBottom: 20 }} src={image5} alt="" />

        <Paragraph>
          La historia cuenta que hace 120 años, Tula, la más célebre y grande de
          las poetisas cubanas, llegó a Matanzas para honrar con su presencia
          los primeros juegos florales que tendrían lugar en nuestro Liceo
          Artístico y Literario y que fue tal el entusiasmo y la devoción de
          nuestros antepasados que, para halagarla merecidamente, dieron con la
          idea de depositar en sus sienes una corona de oro y laurel. Suponemos
          que ya por entonces la ilustre mujer sabía perfectamente que aquello
          era ridículo (y no va la crítica contra los organizadores del evento
          sino contra las cosas al uso de la época) pero que, por discreta y
          cortés, accedió a prestar su hermosa testa para semejante desvarío.
        </Paragraph>
        <Paragraph>
          Como iba a permanecer poco tiempo en esta ciudad, se afanaron los
          intelectuales del patio por preparar en dos días el inopinado festejo,
          y escogidas que fueron dos espaciosas quintas de la Playa, celebrose
          allí, con gran boato y solemnidad, la coronación, el día seis de
          noviembre de mil ochocientos sesenta y uno.
        </Paragraph>
        <Paragraph>
          Magnífica de sencillez apareció Tula aquella noche, y según contaba su
          bella amiga Lola Cruz -quien la acompañó en el trance- la poetisa hubo
          de admirar a todos por su naturalidad, por su perfecta dicción y por
          un porte singularmente regio. El comedimiento, la belleza y el genio
          marchaban parejos en ella.
        </Paragraph>
        <Paragraph>
          Con esa disimulada incomodidad con que reciben los seres superiores
          las agresiones a su modestia, pero con corrección y gratitud, permitió
          Tula que por breves momentos descansara la ofrenda cariñosa sobre su
          cabeza, y a las palabras escritas por Domingo del Monte y leídas por
          Rafael Otero respondió solamente:
        </Paragraph>
        <Paragraph>
          “Recuerdo que ha dicho un célebre pensador que el corazón tiene sus
          razones, que la razón no se explica. En efecto: en mí se ha probado la
          exactitud de esa bella frase. El instinto, adelantándose con mucho a
          la razón misma del sentimiento, me hizo amar a Matanzas desde antes de
          conocerla”.
        </Paragraph>
        <Paragraph>
          “Hoy que logro pisar por fin la florida alfombra de su riquísimo
          suelo, hoy que aspiro entre sus cultos y hospitalarios hijos este
          ambiente de amor, que embriaga el alma; hoy que recibo tantas, tan
          fraternales muestras de cariño que debo enorgullecerme y cuya
          halagadora expresión repiten en torno mío elocuentes intérpretes de la
          popular benevolencia… hoy señores, veo justificada por completo
          aquella misteriosa razón que la razón no podía explicar, aquella
          ardiente simpatía que me llegaba de antiguo con este noble ilustrado
          pueblo y pido en vano al lenguaje pobre de los hombres palabras que
          alcancen a expresaros las emociones infinitas que se desbordan en mi
          alma”.
        </Paragraph>
        <Paragraph>
          “Os diré, sin embargo, que me aplaudo, me regocijo de que hayáis
          convertido en deuda sagrada, en deuda ineludible de reconocimiento,
          mis afectos espontáneos por vuestra poética Yucayo, y que si
          desgraciadamente no existen en mi inteligencia tesoros de luces con
          que justificar por mi parte vuestro generoso entusiasmo, siento con
          ufanía, que hay aquí, en este corazón que supo adivinaros, tesoros de
          amor, tesoros de gratitud con que eternamente pagarlo”.
        </Paragraph>
        <Paragraph style={{ marginBottom: 50 }}>
          Felices aquellos que escucharon el trueno de la emoción en su voz y
          vieron el sello de eternidad en su frente… ¡Ah, que pocos adivinarían
          entonces lo que conturbaba secretamente su corazón, qué pocos sabrían
          leer la verdad en sus ojos misteriosos de poeta desgraciada…! Pero,
          ahora, a ciento veinte años de aquel año lustroso y gentil, puedo
          certificarles, con un conocimiento intuitivo que me llega de mujer a
          mujer, con una herencia terrible que duele de poeta a poeta, que, si
          aquella noche Tula abandonó antes que todos los salones suntuosos
          donde había sido honrada, fue porque andaba mal del alma y no quería
          ser sorprendida en su tristeza.
        </Paragraph>

        <Paragraph style={{ marginBottom: 100 }}>
          * Publicado en el suplemento Yumurí.
        </Paragraph>
      </>
    ),
  },
  {
    id: 5,
    image: (
      <img
        style={{ width: "100%", aspectRatio: 200 / 133 }}
        src={image8}
        alt=""
      />
    ),
    slug: "archivo-fotografico-del-periodico-giron-sobre-carilda",
    category: "con-tinta-de-ayer",
    title: "Fotografías del Periódico Girón sobre Carilda",
    excerpt: `Los vínculos entre Carilda y el Periódico Girón siempre fueron muy estrechos, lo cual permitió al rotativo acumular un nutrido archivo fotográfico sobre su figura.`,
    description: (
      <>
        <Gallery images={images} />
      </>
    ),
  },
];
