import React from 'react';
import Head from 'next/head';
import { Rocket, Coins, Users, ArrowRight } from 'lucide-react';

// Configuration object
const config = {
  projectName: "<<PROJECT_NAME: Name of the cryptocurrency project>>",
  colors: {
    primary: "<<PRIMARY_COLOR: Main color theme of the website>>",
    secondary: "<<SECONDARY_COLOR: Secondary color theme of the website>>",
    text: "<<TEXT_COLOR: Color of the main text on the website>>",
    accent: "<<ACCENT_COLOR: Color for highlighted elements like buttons>>"
  },
  header: {
    navItems: ["<<NAVIGATION_ITEM_1: First item in the navigation menu e.g About, Tokenomics, Launch Strategy, Community, Airdrop, Faucet>>", "<<NAVIGATION_ITEM_2: Second item in the navigation menu e.g About, Tokenomics, Launch Strategy, Community, Airdrop, Faucet>>", "<<NAVIGATION_ITEM_3: Third item in the navigation menu,. e.g About, Tokenomics, Launch Strategy, Community, Airdrop, Faucet>>"]
  },
  hero: {
    title: "<<HERO_TITLE: Main headline of the landing page>>",
    subtitle: "<<HERO_SUBTITLE: Brief description or tagline of the project>>"
  },
  cta: {
    buttonText: "<<CTA_BUTTON_TEXT: Text for buy meme coin button, replace this with buy meme coion_symbol>>"
  },
  features: [
    {
      title: "<<FEATURE_TITLE 1: Title of a key feature of the project>>",
      description: "<<FEATURE_DESCRIPTION: Brief explanation of a key feature related to launch to that makes this project unique>>",
      icon: "Rocket"
    },
    {
      title: "<<FEATURE_TITLE: Title of a key feature of the project>>",
      description: "<<FEATURE_DESCRIPTION: Brief explanation of a key feature related to treasury that makes this project unique>>",
      icon: "Coins"
    },
    {
      title: "<<FEATURE_TITLE: Title of a key feature of the project>>",
      description: "<<FEATURE_DESCRIPTION: Brief explanation of a key feature related to the community that makes this project unique>>",
      icon: "Users"
    }
  ],
  footer: {
    copyright: "<<COPYRIGHT_TEXT: Copyright notice and year>>"
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
        <h1 className="text-4xl font-bold">🚀 {config.projectName}</h1>
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