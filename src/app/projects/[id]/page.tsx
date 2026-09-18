import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── Static params for SSG ── */
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

/* ── Dynamic metadata per project ── */
type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — TrxMod21X`,
    description: project.description,
    openGraph: {
      title: `${project.title} — TrxMod21X`,
      description: project.description,
      type: "article",
    },
  };
}

/* ── Page Component ── */
export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
