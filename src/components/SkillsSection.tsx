import { 
  Code2, 
  Server, 
  Database, 
  GitBranch, 
  Palette, 
  FileText, 
  Bot,
  Terminal,
  Shapes
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Front-End',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Back-End',
    icon: Server,
    skills: ['Python', 'PHP', 'Node.js', 'Laravel'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Base de données',
    icon: Database,
    skills: ['MySQL'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'DevOps & Outils',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'GitLab', 'Postman'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['Canva', 'Figma'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Bureautique',
    icon: FileText,
    skills: ['Word', 'PowerPoint', 'Excel', 'Access'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Intelligence Artificielle',
    icon: Bot,
    skills: ['ChatGPT', 'DeepSeek', 'Lovable AI', 'Google Gemini'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'IDE',
    icon: Terminal,
    skills: ['Visual Studio Code'],
    color: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'Modélisation',
    icon: Shapes,
    skills: ['UML', 'StarUML'],
    color: 'from-teal-500 to-green-500',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Mes compétences
            </span>
            <h2 className="section-title">
              Technologies & <span className="gradient-text">Outils</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un ensemble de compétences variées acquises durant ma formation et mes projets personnels.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card p-6 glow-effect group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <category.icon className="text-foreground" size={22} />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
