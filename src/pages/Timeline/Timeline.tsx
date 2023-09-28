import { FormEvent, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';
import { Tweet } from '../../components/Tweet/Tweet';
import './Timeline.css';

export function Timeline() {
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([
    `Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados
      foram:
  
      ✅ npm start: De 32s para 400ms (sim, demorava 30s)
      ✅ npm build: De 120s para 22s
      
      Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥`,
    `Testaaaaando`,
    `Meu primeiro tweet!`
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/rafaschenkel.png" alt="Rafael.png" />
          <textarea
            onChange={e => setNewTweet(e.target.value)}
            value={newTweet}
            id="tweet"
            placeholder="What's happening?"
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      <div className="tweets">
        {tweets.map(tweet => (
          <Tweet content={tweet} key={tweet} />
        ))}
      </div>
    </main>
  );
}
