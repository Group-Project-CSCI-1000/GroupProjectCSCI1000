import Head from 'next/head';
import Link from 'next/link';

export default function SultanaliPage() {
  return (
    <div className='container'>
      <Head>
        <title>Sultanali Duissebayev</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='underline'>
          <h1 className='title'>Hey, I'm Sultanali</h1>
        </div>
        <img
          className='pic'
          src='/image.png'
          alt='Sultanali Duissebayev'
        />

        <p className='description'>
          Hi! I'm a Computer Science student at CU Boulder. I'm passionate about 
          software engineering, algorithms, cybersecurity, and AI agents. When 
          I'm not coding or solving LeetCode problems, you can find me weightlifting, 
          playing tennis, or exploring mountain trails around Boulder.
        </p>

        <Link href='/' legacyBehavior>
          <a className='button'>
            <p>Back to Home Page</p>
          </a>
        </Link>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 60rem;
          margin: auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .underline {
          /* border-bottom: solid black; */
          margin-bottom: 1.5rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
        }

        .pic {
          height: 450px;
          width: 450px;
          object-fit: cover;
          border-radius: 12px;
        }

        .button {
          /* margin: .5rem; */
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          margin-top: 1.5rem;
        }

        .button:hover,
        .button:focus,
        .button:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .button p {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}