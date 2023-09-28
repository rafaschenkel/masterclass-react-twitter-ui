import { ArrowsClockwise, ChatCircle, Heart } from '@phosphor-icons/react';
import './Tweet.css';

export function Tweet() {
  return (
    <a href="" className="tweet">
      <img src="https://github.com/rafaschenkel.png" alt="Rafael.png" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong className="tweet-username">Rafael Schenkel</strong>{' '}
          <span className="tweet-user">@rafaschenkel</span>
        </div>
        <p>
          Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados
          foram: <br />
          <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
          ✅ npm build: De 120s para 22s <br />
          <br />
          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
        </p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle size={20} />
            20
          </button>
          <button type="button">
            <ArrowsClockwise size={20} /> 20
          </button>
          <button type="button">
            <Heart size={20} />
            20
          </button>
        </div>
      </div>
    </a>
  );
}
