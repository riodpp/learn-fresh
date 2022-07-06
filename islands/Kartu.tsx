/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
//import { React } from "React";


interface CardProps {
  jumlah: number;
}


export default function Kartu(props: CardProps) {
  const [num, setNum] = useState(props.jumlah);
  // setNum(props.jumlah)
  // let cards = []
  // for(let i=0; i<3; i++){
  //   <div class={tw`max-w-sm rounded overflow-hidden shadow-lg`}>
  //     <img class={tw`w-full`} src="/logo.svg" alt="Sunset in the mountains"/>
  //     <div class={tw`px-6 py-4`}>
  //       <div class={tw`font-bold text-xl mb-2`}>The Coldest Sunset</div>
  //       <p class={tw`text-gray-700 text-base`}>
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
  //       </p>
  //     </div>
  //     <div class={tw`px-6 pt-4 pb-2`}>
  //       <span class={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
  //       <span class={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#video</span>
  //       <span class={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#food</span>
  //     </div>
  //   </div>
  // }
  return(
    <div>
      <div class={tw`max-w-sm rounded overflow-hidden shadow-lg`}>
      <img class={tw`w-full`} src="/logo.svg" alt="Sunset in the mountains"/>
      <div class={tw`px-6 py-4`}>
        <div class={tw`font-bold text-xl mb-2`}>The Coldest Sunset {num}</div>
        <p class={tw`text-gray-700 text-base`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class={tw`px-6 pt-4 pb-2`}>
        <span class={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
        <span class={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#video</span>
        <span class={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#food</span>
      </div>
    </div>
    </div>
  );
}