import { Sparkle } from '@phosphor-icons/react';
import './Header.css';

interface IHeader {
  title: string;
}

export function Header({ title }: IHeader) {
  return (
    <div className="timeline-header">
      <span>{title}</span>
      {title === 'Home' && <Sparkle size={20} />}
    </div>
  );
}
