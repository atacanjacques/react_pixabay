import './AppPicture.css';

function AppPicture(props) {
  return (
    <div className="border-solid border-2 border-gray-500 h-96">
      <img className="object-cover h-full w-full" src={props.data.largeImageURL} alt={props.data.tags} />
    </div>
  );
}

export default AppPicture;
