import React from "react";
import { BsFillHouseHeartFill, BsFillSearchHeartFill } from "react-icons/bs";
import {
  AiTwotoneSwitcher,
  AiFillPlusCircle,
  AiOutlineArrowRight,
  AiOutlineOrderedList
} from "react-icons/ai";
import { BiSolidMusic } from "react-icons/bi";

export default function HomeFixo() {
  return (
    <div>
        <div>
            <BsFillHouseHeartFill></BsFillHouseHeartFill>Início
            <BsFillSearchHeartFill></BsFillSearchHeartFill> Buscar
        </div>
        <div>
      <AiTwotoneSwitcher></AiTwotoneSwitcher>Sua Biblioteca
      <button>
        <AiFillPlusCircle></AiFillPlusCircle>
      </button>
      <button>
        <AiOutlineArrowRight></AiOutlineArrowRight>
      </button>
      </div>
      <div>
      <button>Playlist</button>
      <BsFillSearchHeartFill></BsFillSearchHeartFill>
      Recentes<AiOutlineOrderedList></AiOutlineOrderedList>
      </div>
      <div><BiSolidMusic></BiSolidMusic> Minha playlist n°1</div>
    </div>
  );
}
