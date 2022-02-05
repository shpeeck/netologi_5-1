import "./style.css";

export default function Button({ link, text }) {
  return (
    <div className="card-button">
      <a href={link}>{text}</a>
    </div>
  );
}
