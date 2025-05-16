import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  year: string;
  children: ReactNode;
}

const ProjectCard = ({ title, subtitle, year, children }: ProjectCardProps) => {
  return (
    <div className="mb-16">
      <div className="mb-4 overflow-hidden rounded-lg bg-secondary">
        {children}
      </div>
      <div className="flex justify-between items-start mt-4">
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="text-muted-foreground">{year}</div>
      </div>
    </div>
  );
};

export default ProjectCard;