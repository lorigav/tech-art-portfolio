import { Projects } from "../../../constants/projects";
import ImagePreview from "../../components/Modal";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = Projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-5/6 max-w-5xl py-10">
      <Link href="/" className="btn btn-ghost mb-6">
        ← Back to Work
      </Link>

      <h1 className="mb-2 text-3xl font-bold md:text-5xl">{project.title}</h1>
      <p className="mb-8 text-lg text-base-content/70">{project.tagline}</p>

      <div className="mb-10 flex flex-col gap-6 md:flex-row md:gap-10">
        <p className="flex-1 whitespace-pre-line text-justify">
          {project.description}
        </p>
        {(project.role || project.tools) && (
          <div className="card w-full flex-shrink-0 bg-base-200 p-5 md:w-64">
            {project.role && (
              <div className="mb-4">
                <h3 className="font-semibold uppercase text-sm text-base-content/60">
                  Role
                </h3>
                <p>{project.role}</p>
              </div>
            )}
            {project.tools && (
              <div>
                <h3 className="font-semibold uppercase text-sm text-base-content/60">
                  Tools
                </h3>
                <p>{project.tools}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <h2 className="mb-4 text-xl font-semibold">Gallery</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.images.map((image, index) => (
          <ImagePreview key={index} imagePath={image} />
        ))}
      </div>
    </main>
  );
}
