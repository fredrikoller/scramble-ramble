interface ButtonProps {
  text: string;
  classes: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={props.classes}
      // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}

    >
      {props.text}
    </button>
  );
};
