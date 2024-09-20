import { useEffect } from 'react';
import './App.css';
import Main from './Components/Main';
import { ToastProvider } from './Context/ToastContext';

function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="App">
      <ToastProvider>
        <Main />
      </ToastProvider>
    </div>
  );
}

export default App;
