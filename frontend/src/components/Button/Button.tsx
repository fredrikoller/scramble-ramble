import Link from 'next/link';
import './Button.css';

interface ButtonProps {
  text: string;
  link: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="button"
      onClick={props.onClick}
    >
      <Link href={props.link}>{props.text}</Link>
    </button>
  );
};
