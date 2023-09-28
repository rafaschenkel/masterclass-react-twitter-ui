import { Sparkle } from '@phosphor-icons/react';
import { Tweet } from './components/Tweet';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            <span>Home</span>
            <Sparkle size={20} />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/rafaschenkel.png" alt="Rafael.png" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />

          <div className="tweets">
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
