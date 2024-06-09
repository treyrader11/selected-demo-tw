export default function NativeClose({ onClick }) {
  return (
    <div onClick={onClick} id="close">
      <div></div>
      <strong className="circle" data-splitting="chars">
        GO•BACK•
      </strong>
    </div>
  );
}
