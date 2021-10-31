import React from "react";

type GreetingsProps={
    name:string;
    mark: string;
    optional?:string;
    onClick:(name:string)=>void;
};

//React.FC 의 이점
//1) props에 기본적으로 children이 들어있다.
//2) defulatProps, propTypes, contextTypes를 설정시 자동완성
//단점
//props타입이 명백하지 않음 
function Greetings ({name,mark,optional,onClick}:GreetingsProps){
    const handleClick = ()=>onClick(name);
    return(
        <div>Hello, {name} {mark}
        
            {optional && <p>{optional}</p>}
            <div>
                <button onClick = {handleClick}>Click me </button>
            </div>
        </div>
    )
}

Greetings.defaultProps = {
    mark:'!'
}

export default Greetings;