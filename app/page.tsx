import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SkillCircle from "@/components/ui/SkillCircle";
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { ProjectsGrid } from "@/components/Projects/ProjectsGrid";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto max-w-5xl bg-white shadow-md rounded-lg p-6">
        <header className="flex flex-col items-center gap-6">
          <img
            src="https://img.freepik.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Foto de Edison Javier Cardenas Roa"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-200"
          />
          <div className="text-center ">
            <h1 className="text-2xl font-semibold">Edison Javier Cardenas Roa</h1>
            <p className="text-sm text-gray-600">Técnico Análisis y Desarrollo de Software</p>
            <p className="text-sm text-gray-500">Cundinamarca, Colombia</p>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <a
                href="mailto:javiecardenas128@gmail.com"
                className=" px-3 py-1 text-sm border rounded hover:bg-gray-50 flex"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              </a>
              <a href="/cv.pdf" className="px-3 py-1 text-sm border rounded hover:bg-gray-50 flex">
                <FontAwesomeIcon icon={faFile} className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/javierR26"
                className=" px-3 py-1 text-sm border rounded hover:bg-gray-50 flex"
              >
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/edison-cárdenas-a0b05a307"
                className=" px-3 py-1 text-sm border rounded hover:bg-gray-50 flex"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </a>

            </div>
          </div>
        </header>

        <section className="mt-6 grid grid-cols-1  gap-6">
          <article className="md:col-span-2">
            <h2 className="text-xl font-medium mb-2">Sobre mí</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dicta vel nihil adipisci dolores
              incidunt iste assumenda esse perferendis, molestiae veniam dolor id quisquam explicabo vero possimus
              sapiente at error? (Reemplaza este texto con una descripción tuya real).
            </p>

            <div className="mt-6">
              <h2 className="text-lg font-medium mb-2">Experiencia</h2>
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold">Sutex</h3>
                <p className="text-sm text-gray-600">Programación y gestión de bases de datos</p>
                <p className="text-sm mt-2">
                  Realicé mis prácticas en el SENA trabajando en desarrollo de software y manejo de bases de datos.
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

            <div>
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
                En mi tiempo libre estudio cómo empezar con el desarrollo de videojuegos en Godot. (Corrige nombre si
                lo deseas).
              </p>
            </div>
          </aside>
        </section>
      </div >
    </main >
  );
}

{/* 
        <div id="inicio" className="flex bg-white h-screen p-2">
          <div className="justify-self: center; self-center  flex-1 h-90 p-5 text-justify content-center">
            <h1 className="text-3xl ">Sobre Mi</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, placeat ex. Tempora, enim. Quam magni consequuntur voluptate, dolor doloribus placeat maxime accusantium eaque expedita ex numquam eum ratione reiciendis quis!</p>
            <div className="flex flex-row justify-between">
              <Button className="w-60 text-base bg-blue-600 ">Descarga cv</Button>
              <div className="flex flex-row gap-2 text-black text-3xl ">
                <a href="https://github.com/javierR26" target="_blank" className="w-7 h-7">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/edison-cárdenas-a0b05a307" target="_blank" className="w-7 h-7">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:javiecardenas128@gmail.com" target="_blank" className="w-7 h-7">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
          <div className="self-center w-32 flex-1 text-justify rounded-full">
            <div className="flex justify-center h-full "><img src="https://img.freepik.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80" alt="#" className="w-95 h-95 rounded-full" />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="flex flex-wrap justify-center gap-8 p-8 bg-white text-white">
            <SkillCircle skill="JavaScript" value={50} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCV6pkoBzfVUeYqCGwtx7_LHWPu2FXjEGOA&s"} />
            <SkillCircle skill="Html" value={50} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png "} />
            <SkillCircle skill="Css" value={50} img={"https://cdn-icons-png.flaticon.com/512/5968/5968242.png  "} />
            <SkillCircle skill="Java" value={50} img={"https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-icono-del-lenguaje-de-programacion-java.png "} />
            <SkillCircle skill="Python" value={50} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"} />
            <SkillCircle skill="Spring Boot" value={60} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png"} />
            <SkillCircle skill="Next" value={60} img={"https://cdn.worldvectorlogo.com/logos/next-js.svg"} />
            <SkillCircle skill="Fast Api" value={50} img={"https://gitlab.com/uploads/-/system/project/avatar/32450680/cover.png"} />
          </div>
        </div>
        <div id="Proyectos" className="bg-white p-2">
          <Carousel
            className="w-full"
          >
            <CarouselContent className="relative">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1 h-60">
                    <Card className="h-55">
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute bottom-0 left-0" />
            <CarouselNext className="absolute bottom-0 right-0" />
          </Carousel>
        </div>
        <hr />
        <div id="Educacion" className="flex bg-white  p-2">
          <div className="bg-white w-64 flex-1 h-50">
            <h1>Estudios y experiencia</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nesciunt est pariatur impedit officia quaerat alias culpa temporibus at sequi magnam, beatae nisi! Ab sequi accusamus vel sed laborum molestias.</p>
          </div>
        </div> 
         </div >
  );
}
*/}