export default function HouseGalleryPhoto(props) {
  return (
    <div className="col m-0 g-0 p-1">
      <img src={props.photo} style={{ width: `100%` }} />
    </div>
  );
}
