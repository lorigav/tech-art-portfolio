import Image from "next/image";
import Link from "next/link";
import { Projects } from "../constants/projects";

export default function Home() {
  return (
    <main>
      {Projects.map((project) => (
        <section
          key={project.slug}
          className="group relative h-[70vh] w-full overflow-hidden md:h-[85vh]"
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-4 px-4 pb-14 text-center text-white">
            <h2 className="text-3xl font-bold drop-shadow-md md:text-5xl">
              {project.title}
            </h2>
            <p className="max-w-xl text-white/80 drop-shadow-sm">
              {project.tagline}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="btn btn-primary btn-wide"
            >
              View Project
            </Link>
          </div>
        </section>
      ))}
    </main>
  );
}