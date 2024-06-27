import { projecList } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

interface ProjectsType {
  title: string
}

export default function ProjectList({ title }: ProjectsType) {
  return (
    <section className='flex flex-col gap-10 py-8 mx-auto max-w-[700px] xl:max-w-[900px] xxl:max-w-[1100px]'>
      <h2 className='text-secondary font-bold text-[30px]'>
        {title}
      </h2>
      <ul className='flex flex-col gap-y-10'>
        {
          projecList.data.map(project => (
            <ProjectCard
              title={project.title}
              key={project.id}
              code={project.code}
              link={project.link}
              description={project.description}
              image={project.image}
              state={project.state}
              technologies={project.technologies}
              type={project.type}
              id={project.id}
            />
          ))
        }
      </ul>
    </section>
  )
}
