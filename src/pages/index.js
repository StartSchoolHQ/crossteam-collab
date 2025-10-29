import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

const sections = [
  {
    title: 'Session 1',
    subtitle: 'Web app workflow', 
    description: 'Learn how web applications work end-to-end',
    link: '/docs/category/web-application-workflow',
  },
  {
    title: 'Session 2',
    subtitle: 'Frontend development', 
    description: 'Build interactive user interfaces with HTML, CSS, and JavaScript',
    link: '/docs/category/frontend-development-intro',
  },
  {
    title: 'Session 3',
    subtitle: 'Version management', 
    description: 'Master Git and GitHub for code collaboration',
    link: '/docs/category/version-management',
  },
  {
    title: 'Session 4',
    subtitle: 'Understanding APIs', 
    description: 'How applications communicate',
    link: '/docs/category/apis',
  },
  {
    title: 'Session 5',
    subtitle: 'Understanding Backend', 
    description: 'Where the magic happens',
    link: '/docs/category/backend',
  },
];

function SectionCard({title, subtitle, description, link}) {
  return (
    <div className={styles.card}>
      <Link to={link} className={styles.cardLink}>
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Cross Team Collaboration">
      <main>
        <div className="container" style={{marginTop: '4rem', marginBottom: '4rem'}}>
          <div className={styles.cardGrid}>
            {sections.map((props, idx) => (
              <SectionCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
