import './HandleContainer.css';

interface HandleContainerProps {
  id: number;
  userHandle: string;
}

export const  HandleContainer = (props: HandleContainerProps) => {

  return (
    <>
      <div className="name-wrapper">
        <p>{props.userHandle}</p>
      </div>
    </>
  )
}
