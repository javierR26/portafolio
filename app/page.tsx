import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ProjectsGrid } from "@/components/Projects/ProjectsGrid";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div id="inicio" className="container mx-auto max-w-5xl bg-white shadow-md rounded-lg p-6">
        <header className="flex flex-col items-center gap-6">
          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            alt="Foto de Edison Javier Cardenas Roa"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-200"
          />
          <div className="text-center ">
            <h1 className="text-2xl font-semibold">Edison Javier Cardenas Roa</h1>
            <p className="text-sm text-gray-600">Técnico Análisis y Desarrollo de Software</p>
            <p className="text-sm text-gray-500">Cundinamarca, Colombia</p>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <Link
                href="/formulario"
                className=" px-3 py-1 text-sm border rounded hover:bg-gray-50 flex"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
              </Link>
              <Link href="/doc/hoja_v.pdf" className="px-3 py-1 text-sm border rounded hover:bg-gray-50 flex">
                <FontAwesomeIcon icon={faFile} className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com/javierR26"
                className=" px-3 py-1 text-sm border rounded hover:bg-gray-50 flex"
              >
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/edison-cárdenas-a0b05a307"
                className=" px-3 py-1 text-sm border rounded hover:bg-gray-50 flex"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </Link>

            </div>
          </div>
        </header>

        <section className="mt-6 grid grid-cols-1  gap-6">
          <article className="md:col-span-2">
            <h2 className="text-xl font-medium mb-2">Sobre mí</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Soy desarrollador fullstack en formación y disfruto trabajar tanto en frontend como en backend.
              Del lado del frontend me motiva descubrir nuevas herramientas, analizar otros sitios y transformar
              ideas en interfaces funcionales. En backend me interesa especialmente el diseño de bases de datos
              y la creación de APIs, entendiendo cómo se conecta toda la lógica detrás de una aplicación.

              Me apasiona aprender y programar porque me permite convertir ideas en código y explorar
              diferentes ramas del desarrollo de software. Siempre estoy abierto a nuevos retos y a seguir
              creciendo como desarrollador.

            </p>

            <div className="mt-6">
              <h2 className="text-lg font-medium mb-2">Experiencia</h2>
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold">Sutex</h3>
                <p className="text-sm text-gray-600">Programación y gestión de bases de datos</p>
                <p className="text-sm mt-2">
                  Realicé mis prácticas en el SENA participando en el desarrollo de software y la gestión de bases
                  de datos. Trabajé con el ERP Epicor desarrollando y adaptando módulos según las necesidades
                  del sistema.

                  Además, desarrollé un proyecto utilizando FastAPI junto con HTML, CSS, Bootstrap y JavaScript,
                  aplicando conceptos de backend y frontend. Durante este proceso también utilicé C# a nivel básico
                  y reforcé buenas prácticas como control de versiones con Git y GitHub, así como la documentación
                  de proyectos.
                </p>
              </div>
            </div>
            <h2 className="text-lg font-medium mb-2">Proyectos</h2>
            <ProjectsGrid />
          </article>

          <aside className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">Tecnologías</h2>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Python", "FastAPI", "Next.js"].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-2 py-1 border rounded bg-white inline-block"
                    aria-hidden="true"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div id="Educacion">
              <h2 className="text-lg font-medium mb-2">Formación</h2>
              <div className="bg-gray-50 p-3 rounded mb-2">
                <h3 className="font-semibold">Técnico</h3>
                <p className="text-sm text-gray-600">Colegio Antonio Nariño — Bases de programación</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <h3 className="font-semibold">Tecnólogo</h3>
                <p className="text-sm text-gray-600">SENA — Desarrollo de software</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-2">Extra</h2>
              <p className="text-sm">
                En mi tiempo libre practico desarrollo de videojuegos con Godot, explorando conceptos básicos
                de lógica, diseño y mecánicas de juego.

              </p>
            </div>
          </aside>
        </section>
      </div >
    </main >
  );
}
