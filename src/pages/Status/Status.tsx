import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';
import { Tweet } from '../../components/Tweet/Tweet';

import './Status.css';
import { PaperPlaneTilt } from '@phosphor-icons/react';

export function Status() {
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState(['Muito bom.', 'Concordo', 'Parabéns']);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nesciunt." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/rafaschenkel.png" alt="Rafael.png" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={e => setNewAnswer(e.target.value)}
          />
        </label>
        <button type="submit">
          <PaperPlaneTilt size={20} weight="fill" />
          <span>Answer</span>
        </button>
      </form>

      <div className="answers">
        {answers.map(answer => (
          <Tweet content={answer} key={answer} />
        ))}
      </div>
    </main>
  );
}
