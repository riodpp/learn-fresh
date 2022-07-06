/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import MyIsland from "../islands/MyIsland.tsx";
import Kartu from "../islands/Kartu.tsx";

export default function Home() {
  // let u = 0;
  // console.log(u);
  // for (let i=0; i<3; i++) {
  //   console.log(i);
  // }
  var cards=[]
  for(var i=0;i<3;i++){
    cards.push(<Kartu jumlah={i}/>);
  }
  
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <MyIsland/>
      {cards}
    </div>
  );
}
