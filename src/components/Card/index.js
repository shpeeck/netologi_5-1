import Button from "../Button";
import "./style.css";

export default function Card({ title, text, children, link, textLink }) {
  return (
    <div className="card-wrapper">
      {children}
      <h3>{title}</h3>
      <p>{text}</p>
      <div>
        <Button link={link} text={textLink} />
      </div>
    </div>
  );
}
