import "./css/style.css";
import Card from "./components/Card";

export default function App() {
  const card1 = {
    title: "Card title",
    text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    link: "https://google.com",
    textLink: "Go google"
  };
  const card2 = {
    title: "Card title 2",
    text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    link: "https://www.yahoo.com/",
    textLink: "Go yahoo"
  };

  return (
    <div className="App">
      <Card {...card1}>
        <img src="https://picsum.photos/300/" alt="random_image" />
      </Card>
      <Card {...card2} />
    </div>
  );
}
