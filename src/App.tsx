import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Separator } from './components/Separator/Separator';
import { Tweet } from './components/Tweet/Tweet';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/rafaschenkel.png" alt="Rafael.png" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
            <button type="submit">Tweet</button>
          </form>

          <Separator />

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
