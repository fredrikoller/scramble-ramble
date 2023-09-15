import './Button.css';

interface ButtonProps {
  text: string;
  classes: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={props.classes}
      onClick={props.onClick}

    >
      {props.text}
    </button>
  );
};
