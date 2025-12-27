import { Calendar, MapPin, GraduationCap, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Calendar, label: 'Né le', value: '10/02/2007' },
    { icon: MapPin, label: 'Localisation', value: 'France' },
    { icon: GraduationCap, label: 'Formation', value: '2ème année Dev Web' },
    { icon: Sparkles, label: 'Passion', value: 'IA & Technologies' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                À propos de moi
              </span>
              <h2 className="section-title">
                Un développeur passionné par{' '}
                <span className="gradient-text">l'innovation</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Je suis <strong className="text-foreground">Mohamed Elharouchi</strong>, étudiant de 18 ans 
                  en 2ème année de formation Développeur Web Full Stack. Passionné par les technologies 
                  modernes et l'intelligence artificielle, je m'efforce de créer des solutions web 
                  innovantes et performantes.
                </p>
                <p>
                  Mon parcours m'a permis de maîtriser un large éventail de technologies, du front-end 
                  avec React et JavaScript, au back-end avec Node.js, PHP et Laravel. Je suis également 
                  familier avec les outils DevOps et les bases de données.
                </p>
                <p>
                  Toujours à la recherche de nouveaux défis, j'explore activement les possibilités 
                  offertes par l'IA pour améliorer mes projets et ma productivité.
                </p>
              </div>
            </div>

            {/* Right Content - Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="glass-card p-6 glow-effect"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-display font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
