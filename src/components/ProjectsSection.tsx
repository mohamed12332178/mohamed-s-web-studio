import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plateforme de commerce en ligne complète avec panier, paiement et gestion des commandes. Interface utilisateur moderne et responsive.',
    technologies: ['React', 'Node.js', 'MySQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Application de gestion de tâches collaborative avec authentification, tableaux Kanban et notifications en temps réel.',
    technologies: ['React', 'Laravel', 'MySQL', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Portfolio Personnel',
    description: 'Site portfolio moderne et interactif présentant mes compétences et projets. Animations fluides et design responsive.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'API REST Blog',
    description: 'API RESTful complète pour un système de blog avec authentification JWT, gestion des articles et commentaires.',
    technologies: ['Node.js', 'Express', 'MySQL', 'JWT'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour visualiser des données analytiques avec graphiques dynamiques et filtres avancés.',
    technologies: ['React', 'Chart.js', 'Python', 'Flask'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Chat Application',
    description: 'Application de messagerie en temps réel avec rooms, messages privés et partage de fichiers.',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Mes réalisations
            </span>
            <h2 className="section-title">
              Projets <span className="gradient-text">récents</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une sélection de projets qui démontrent mes compétences techniques et ma créativité.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="glass-card overflow-hidden group glow-effect"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  
                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {project.title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                Voir plus sur GitHub
                <Github className="ml-2" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
