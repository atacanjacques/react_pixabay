import './AppPicture.css';

function AppPicture(props) {
  return (
    <div>
      <img src={props.data.previewURL} alt={props.data.tags} />
    </div>
  );
}

export default AppPicture;
