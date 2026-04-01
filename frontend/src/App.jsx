
import reactLogo from './assets/react.svg';

import './App.css';
import ListSongs from './components/ListSongs/ListSongs';
import { useEffect } from 'react';

function App() {

  

  useEffect(() => {
    fetch('http://localhost:3000/songs')
    .then(res => res.json())
    .then(data =>
      console.log(data)
    )
  }, [])
  

  return (
    <>
      <section id="center">
        <ListSongs />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>www.devappspace.com</h2>
          <p>Dai un'occhiata alla mia HomePage</p>
          <ul>
            <li>
              <a href="https://www.devappspace.com/" target="_blank">
                <img className="logo" src={reactLogo} alt="" />
                My HomePage
              </a>
            </li>
            <li>
              <a href="https://www.devappspace.com/about" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                About Me
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with Me</h2>
          <p>Seguimi per vedere i miei progetti</p>
          <ul>
            <li>
              <a href="https://github.com/lamiera70/lamiera70" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lamiera/" target="_blank">
                <img className="button-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
                Linkedin
              </a>
            </li>
            <li>
              <a href="mailto:ale1970sys@gmail.com" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                @mail
              </a>
            </li>
            
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
