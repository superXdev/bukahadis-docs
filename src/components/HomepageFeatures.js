import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '100% Gratis',
    png: require('../../static/img/FREE.png').default,
    description: (
      <>
        Tidak ada biaya apapun, kamu bebas menggunakan API ini tanpa batas.
      </>
    )
  },
  {
    title: 'Tersedia Kapanpun',
    png: require('../../static/img/24hrs.png').default,
    description: (
      <>
        Tidak perlu khawatir jika server sewaktu-waktu offline, 
        jikapun terjadi kemungkinan developernya sudah tidak sanggup membayar biayanya :D
      </>
    )
  },
  {
    title: 'Format JSON',
    png: require('../../static/img/JSON.png').default,
    description: (
      <>
        Semua response dikembalikan dalam format JSON untuk mempermudah penggunaan
      </>
    )
  }

];

function Feature({png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={png} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
