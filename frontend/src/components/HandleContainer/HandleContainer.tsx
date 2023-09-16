import './HandleContainer.css';

interface HandleContainerProps {
  id: number;
  userHandle: string;
}

export const  HandleContainer = (props: HandleContainerProps) => {

  return (
    <>
      <div>
        <p><span className='pic'>{props.id}</span> {props.userHandle}</p>
      </div>
    </>
  )
}
