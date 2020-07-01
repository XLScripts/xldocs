import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Product Documents.</>,
    imageUrl: 'img/video.svg',
    description: (
      <>
        If you've recently purchased an XL Scripts Product, you will find all information about that Product on this website.
      </>
    ),
  },
  {
    title: <>Workflow.</>,
    imageUrl: 'img/design.svg',
    description: (
      <>
        This website includes documentation for the latest versions of XL Framework. Installation, Extending and Deployment
      </>
    ),
  },
  {
    title: <>Theme Development.</>,
    imageUrl: 'img/image.svg',
    description: (
      <>
        If you want to develop themes for XL Scripts Products, this website provides all the necessary instructions.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`XL Scripts Documentation`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            <img src="img/logo.png" />
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--light button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              View Docs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
