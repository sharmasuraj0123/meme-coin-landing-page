import React from 'react';
import Head from 'next/head';
import { Rocket, Coins, Users, ArrowRight } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Configuration object
const config = {

  "projectName": "NebulaPepe",

  "colors": {

    "primary": "darkblue",

    "secondary": "red",

    "text": "white",

    "accent": "white"

  },

  "header": {
    "navItems": [
      "About",

      "Tokenomics",

      "Community"
    ]

  },

  "hero": {

    "title": "Welcome to NebulaPepe",

    "subtitle": "Join the cosmic journey of memes and the universe! \ud83d\ude80\ud83d\udc38",

    "narrative": `sds's`

  },

  "cta": {

    "buttonText": "Buy PEPE"

  },

  "features": [
    {

      "title": "Cosmic Launch",

      "description": "Experience our unique cosmic-themed token launch.",

      "icon": "Rocket"

    },

    {

      "title": "Galactic Treasury",

      "description": "Our well-planned treasury ensures the longevity of the project.",

      "icon": "Coins"

    },

    {

      "title": "Stellar Community",

      "description": "Join a thriving community of meme lovers united by a common cause.",

      "icon": "Users"

    }
  ],

  "footer": {

    "copyright": "NebulaPepe \u00a9 2023"

  }

};

const Button = ({ children, className, style }) => (
  <button className={`px-4 py-2 rounded ${className}`} style={style}>
    {children}
  </button>
);

export default function Home() {
  const iconMap = {
    Rocket: Rocket,
    Coins: Coins,
    Users: Users                                                   
  };

  return (
    <div className="min-h-screen p-8" style={{
      background: `linear-gradient(to bottom right, ${config.colors.primary}, ${config.colors.secondary})`,
      color: config.colors.text
    }}>
      <Head>
        <title>{config.projectName} - {config.hero.subtitle}</title>
        <meta name="description" content={config.hero.subtitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center mb-16">

        <h1 className="text-4xl font-bold"><img src="logo.jpg" alt="Logo" style={{ width: '100px', height: '100px' }} /></h1>
        <nav>
          {config.header.navItems.map((item, index) => (
            <Button
              key={index}
              className="mr-4 last:mr-0 hover:scale-110 transition-transform"
              style={{ color: config.colors.text }}
            >
              {item}
            </Button>
          ))}
        </nav>
      </header>

      <main className="text-center">
        <h2 className="text-7xl sm:text-8xl font-extrabold mb-8 leading-tight animate-float">
          {config.hero.title}
        </h2>
        <p className="text-2xl mb-12">{config.hero.subtitle}</p>
        <p className="text-2xl mb-12">{config.hero.narrative}</p>
        <Button
          className="text-xl px-10 py-6 rounded-full animate-pulse"
          style={{
            backgroundColor: config.colors.accent,
            color: config.colors.primary
          }}
        >
          {config.cta.buttonText} <ArrowRight className="ml-2 inline-block w-6 h-6" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {config.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="p-6 rounded-lg transform hover:scale-105 transition-transform"
                style={{ backgroundColor: `${config.colors.text}20` }}
              >
                <IconComponent className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="mt-20 text-center">
        <p className="text-xl">{config.footer.copyright}</p>
      </footer>
    </div>
  );
}