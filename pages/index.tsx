import Head from 'next/head';

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
    <div>
      <Head>
        <title>BattleShips Game</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <canvas id='gradient-canvas' data-transition-in ref={ref}></canvas>
      <main className='flex md:flex-row flex-col justify-center items-center pt-8 md:pt-32'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold underline center mb-12'>BattleShips Game</h1>
          <BattleShips />
        </div>
        <div className=' pt-20 pl-8'>
          <h4 className='text-xl font-bold mb-2'>Description</h4>
          <p className='mt-1 mb-3'>This is a simple game of BattleShips.</p>
          <h4 className='text-xl font-bold mb-2'>Install</h4>
          <p className='mt-1 mb-3'>
            The code is available on{' '}
            <a
              href='https://github.com/arfa/arfacod-battleships'
              target='_blank'
              className='underline'
            >
              GitHub
            </a>
            .
          </p>
          <pre className='bg-gray-100 p-2 rounded-md'>
            <code className='text-sm text-gray-600'>
              git clone https://github.com/arfa/arfacod-battleships.git
              <br />
              cd arfacod-battleships
              <br />
              npm install
            </code>
          </pre>
          <h4 className='text-xl font-bold my-2'>Dev server</h4>
          <p className='mt-1 mb-3'>
            You can run the game on the dev server by running the following command in your
            terminal:
          </p>
          <pre className='bg-gray-100 p-2 rounded-md'>
            <code className='text-sm text-gray-600'>npm run start</code>
          </pre>
          <p className='mt-1 mb-3'>
            Then open{' '}
            <a href='http://localhost:3000' className='underline'>
              http://localhost:3000
            </a>{' '}
            in your browser.
          </p>

          <h4 className='text-xl font-bold my-2'>Terminal</h4>
          <p className='mt-1 mb-3'>
            You can run the game in the terminal by running the following commands in your terminal:
          </p>
          <pre className='bg-gray-100 p-2 rounded-md'>
            <code className='text-sm text-gray-600'>npm run start:cli</code>
          </pre>
        </div>
      </main>
    </div>
  );
}
