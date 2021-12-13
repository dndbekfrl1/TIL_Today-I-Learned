import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      {/* First example from the tutorial */}
      <Card>
        <Card.Heading>My title</Card.Heading>
        <Card.Button>Toggle</Card.Button>
      </Card>
      {/* Example with button and heading flipped */}
      <Card>
        <Card.Button>Toggle</Card.Button>
        <Card.Heading>My title</Card.Heading>
      </Card>
      {/* Example with image */}
      <Card>
        <Card.Heading>My title</Card.Heading>
        <Card.Image
          src="https://picsum.photos/300/100?random=0"
          alt="Our trip to the beach"
        />
        <Card.Button>Toggle</Card.Button>
      </Card>
      {/* Example with an avatar-image (type="avatar") */}
      <Card>
        <Card.Image
          src="https://picsum.photos/48?random=1"
          alt="This is me"
          type="avatar"
        />
        <Card.Heading>My title</Card.Heading>
        <Card.Button>Toggle</Card.Button>
      </Card>
    </div>
  );
}

export default App;
