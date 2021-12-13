import { createContext, useContext, useState } from "react";
import "./Card.css";
/**
 * scope를 적용해보자.
 * scope를 한다면 Heading은 Card 컴포넌트 안에서만 사용할 수 있다.
 * -> context api를 사용하자
 * -> 커스텀 훅으로 더 발전시키자!
 *
 * compound-component의 장점
 * flexible하고 expandable함!
 * 협업하기 쉬워짐!
 *
 * flexibility:
 * Card컴포넌트에 버튼과 헤딩 컴포넌트의 위치를 자유자재로 할 수 있고
 * define props/attributes to each component freely할 수 있다.
 *
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
      <div className={toggled ? "Card Card--highlight" : "Card"}>
        {children}
      </div>
    </CardContext.Provider>
  );
}

function Heading({ children }) {
  let { toggled } = useCardContext(); //이 context는 CardContext.Provider의 value에 접근할 수 있다!
  //이렇게 사용하면 Card.Heading은 Card밖에서 사용시 context값은 undefined가 되는 장점이 있다.

  return (
    <h2
      className={
        toggled ? "Card__heading Card__heading--highlight" : "Card__heading"
      }
    >
      {children}
    </h2>
  );
}

function Button({ children }) {
  let { setToggled } = useCardContext();

  return (
    <button className="Card_button" onClick={() => setToggled((prev) => !prev)}>
      {children}
    </button>
  );
}

function Image({ src, alt, type }) {
  useCardContext();
  return (
    <img
      className={`Card_image${type ? " Card_image--" + type : ""}`}
      src={src}
      alt={alt}
    />
  );
}

Card.Heading = Heading; // Heading은 Card 오브젝트의 메소드가 됨
Card.Button = Button;
Card.Image = Image;
export default Card;
