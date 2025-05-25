import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Real-time analytics',
    image: "https://framerusercontent.com/images/uMjRU2L5n9iEP7LjLBp4AreqG84.png",
    description: (
      <>
        Gain instant access to your usage data with our real-time analytics.
        Make informed decisions with up-to-the-minute information.
      </>
    ),
  },
  {
    title: 'Seamless integration',
    image: "https://framerusercontent.com/images/PwqGomPEKnrY3RcgBsVdrghorw.png",
    description: (
      <>
        Easily connect our platform with your existing services. No refactoring necessary.
      </>
    ),
  },
  {
    title: 'Flexible Authentication',
    image: "https://framerusercontent.com/images/veh7cTXwTZ2Bq5g571AriSJ7I.png",
    description: (
      <>
        With Proxana, you can bring your own authentication provider.
        Any authentication provider that deals with JWT is seamlessly supported in Proxana
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
