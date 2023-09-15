import './HandleContainer.css';

interface HandleContainerProps {
  userHandle: string;
}

export const HandleContainer = (props: HandleContainerProps) => {
  
  return (
    <>
      <div className="">
        <p>{props.userHandle}</p>
      </div>
    </>
  )
}
