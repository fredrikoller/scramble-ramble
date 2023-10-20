import Link from 'next/link';
import './Button.css';

interface ButtonProps {
  text: string;
  link?: string;
  classes: string;
  onClick?: (input: any) => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={props.classes}
      onClick={props.onClick}
    >
      {props.link !== undefined
        ? <Link href={props.link}>{props.text}</Link>
        : props.text}

    </button>
  );
};
