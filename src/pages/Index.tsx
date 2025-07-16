import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Youtube, Phone } from "lucide-react";
import tropicalBg from "@/assets/tropical-beach-bg.jpg";

const Index = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de garantir meu ingresso para o show RISADA À BEIRA-MAR! 🏖️😂");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const shows = [
    { city: "Salvador", date: "20/12", venue: "Teatro Castro Alves" },
    { city: "Recife", date: "22/12", venue: "Teatro do Parque" },
    { city: "Rio de Janeiro", date: "26/12", venue: "Copacabana Palace" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${tropicalBg})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-8">
        
        {/* Logo/Emoji floating */}
        <div className="mb-8 text-8xl md:text-9xl animate-float">
          🏖️
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-tropical bg-clip-text text-transparent leading-tight mb-4 animate-pulse-neon">
            RISADA À<br />
            BEIRA-MAR
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="text-3xl animate-bounce-slow">🌞</div>
            <p className="font-body text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              com <span className="text-primary font-bold">Marcelo Tô Rindo</span>
            </p>
            <div className="text-3xl animate-bounce-slow">🌞</div>
          </div>
        </div>

        {/* Shows Info */}
        <div className="bg-background/90 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-8 border-2 border-accent shadow-neon max-w-2xl w-full">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-6 text-primary">
            📅 DATAS E LOCAIS
          </h2>
          
          <div className="space-y-4">
            {shows.map((show, index) => (
              <div key={index} className="flex items-center justify-between bg-muted/50 rounded-2xl p-4 hover:bg-muted transition-colors">
                <div className="flex items-center gap-3">
                  <MapPin className="text-secondary w-6 h-6" />
                  <div>
                    <div className="font-body font-bold text-lg text-foreground">{show.city}</div>
                    <div className="font-body text-sm text-muted-foreground">{show.venue}</div>
                  </div>
                </div>
                <div className="font-display text-2xl text-primary font-bold">
                  {show.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-gradient-sunset hover:bg-gradient-tropical text-white font-body font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-neon transform hover:scale-105 transition-all duration-300 animate-pulse-neon"
          >
            <Phone className="mr-3 w-6 h-6" />
            Quero garantir meu ingresso! 🎟️
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="flex items-center gap-6 mb-8 text-4xl md:text-5xl">
          <span className="animate-bounce-slow">🥥</span>
          <span className="animate-float">🕶️</span>
          <span className="animate-bounce-slow">🏄‍♂️</span>
          <span className="animate-float">🍹</span>
          <span className="animate-bounce-slow">🎭</span>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="bg-gradient-ocean text-white p-3 rounded-full hover:scale-110 transition-transform shadow-neon-blue"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="bg-gradient-sunset text-white p-3 rounded-full hover:scale-110 transition-transform shadow-neon"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 Marcelo Tô Rindo - Humor que aquece o coração! ☀️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
