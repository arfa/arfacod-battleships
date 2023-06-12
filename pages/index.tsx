import Head from 'next/head';
import Image from 'next/image';

import styles from '@/pages/index.module.css';
import { BattleShips } from 'containers/BattleShips';
import { useEffect, useRef } from 'react';
import { Gradient } from '@/lib/whatamesh/gradient';

const gradient = new Gradient();

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current && window) {
      // @ts-ignore
      gradient.initGradient('#gradient-canvas');
    }
  }, [ref]);

  return (
    <div className={styles.container}>
      <Head>
        <title>BattleShips Game</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <canvas id='gradient-canvas' data-transition-in ref={ref}></canvas>
      <main>
        <h1 className='text-3xl font-bold underline mb-2'>BattleShips Game</h1>
        <p className='mt-1 mb-3'>This is a simple game of BattleShips.</p>
        <BattleShips />
      </main>
    </div>
  );
}
