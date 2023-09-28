import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';
import { Tweet } from '../../components/Tweet/Tweet';

import './Status.css';

const answers = [
  {
    name: 'Diego Fernandes',
    user: 'diegosf',
    image: 'https://github.com/diego3g.png',
    content: 'Muito bom.'
  },
  {
    name: 'Diego Fernandes',
    user: 'diegosf',
    image: 'https://github.com/diego3g.png',
    content: 'Concordo'
  },
  {
    name: 'Diego Fernandes',
    user: 'diegosf',
    image: 'https://github.com/diego3g.png',
    content: 'Parabéns'
  }
];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet
        name="Rafael Schenkel"
        user="rafaschenkel"
        image="https://github.com/rafaschenkel.png"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nesciunt."
      />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/rafaschenkel.png" alt="Rafael.png" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>

      <div className="answers">
        {answers.map(({ name, user, image, content }) => (
          <Tweet name={name} user={user} image={image} content={content} key={content} />
        ))}
      </div>
    </main>
  );
}
