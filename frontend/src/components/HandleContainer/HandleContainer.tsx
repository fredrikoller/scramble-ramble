
//Create a react typescript component that will display the user's handle.
interface HandleContainerProps {
  userHandle: string;
}
export const HandleContainer = (props: HandleContainerProps) => {
  let isActive = true;
  return (
    <>
      <div className={`block px-3 py-2 rounded-md text-black`}>
        <p>{props.userHandle}</p>
      </div>
    </>
  )
}
