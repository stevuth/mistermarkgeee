
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Target, Mic2 } from "lucide-react";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { Badge } from "../ui/badge";

const services = [
  {
    icon: Target,
    title: "Artist Campaign Sprint",
    description: "Results-driven marketing and short-term management to launch your project correctly."
  },
  {
    icon: Video,
    title: "Cinematic Production",
    description: "High-end videography and storytelling that reflects the 5C standard of excellence."
  },
  {
    icon: Mic2,
    title: "Strategic Consulting",
    description: "Expert advice on navigating the marketplace of ideas with a Christ-centered perspective."
  }
];

const WorkWithMeSection = () => {
  return (
    <section id="work-with-me" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 animated-gradient opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary text-primary">Collaborate</Badge>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
            Ready to <AnimatedGradientText>Create</AnimatedGradientText> Together?
          </h2>
          <p className="mt-6 text-xl text-foreground/70">
            Every collaboration is a mission. I help visionaries bridge the gap between their Conviction and the Culture.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 bg-secondary/20 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
              >
                <service.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-headline text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" className="animated-gradient text-white font-bold h-14 px-10 rounded-full" asChild>
              <a href="#contact">
                Book Your Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-foreground/50 text-sm">
              Current focus: <span className="text-foreground">Birmingham & Remote Campaigns</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMeSection;
