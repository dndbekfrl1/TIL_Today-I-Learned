import { createContext, useContext, useState } from "react";

/**
 * scope를 적용해보자.
 * scope를 한다면 Heading은 Card 컴포넌트 안에서만 사용할 수 있다.
 * -> context api를 사용하자
 */

function useCardContext() {
  let context = useContext(CardContext);
  if (!context) {
    throw new Error(
      "Child Components of Card cannot be rendered outside the Card Component!"
    );
  }
  return context;
}

let CardContext = createContext();

function Card({ children }) {
  let [toggled, setToggled] = useState(false);
  return (
    <CardContext.Provider value={{ toggled, setToggled }}>
      <div className="Card">
        <Card.Heading>My title</Card.Heading>
        {/* Heading은 이제 Card에 belongs to된다! 이것이 compound component입니다.
         */}
        <Card.Button>Toggle</Card.Button>
      </div>
    </CardContext.Provider>
  );
}

function Heading({ children }) {
  let context = useCardContext(); //이 context는 CardContext.Provider의 value에 접근할 수 있다!
  //이렇게 사용하면 Card.Heading은 Card밖에서 사용시 context값은 undefined가 되는 장점이 있다.

  if (!context) {
    return <p className="Card_heading">Card 컴포넌트 안에 있지 않아요</p>;
  }
  return <h2 className="Card__heading">{children}</h2>;
}

function Button({ children }) {
  let context = useCardContext();

  return <button className="Card_button">{children}</button>;
}

Card.Heading = Heading; // Heading은 Card 오브젝트의 메소드가 됨
Card.Button = Button;
export default Card;
