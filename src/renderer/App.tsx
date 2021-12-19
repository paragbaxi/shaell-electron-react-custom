import { useRef } from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import useStorage from './hooks/useStorage';
import './styles/App.css';
import './styles/output.css';

const Hello = () => {
  const [value, setValue] = useStorage<string>('foo');
  const divRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <button
          type="button"
          onClick={() => {
            setValue('bar');
          }}
        >
          Click Set!
        </button>
        <button
          type="button"
          onClick={() => {
            if (divRef.current === null) return;
            if (!value) return;
            divRef.current.value = value;
          }}
        >
          Click Get!
        </button>
        <input className="text-black" ref={divRef} type="text" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
};

export default App;
