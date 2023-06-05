import React, { SetStateAction, useEffect, useState } from "react";
import SceneContainer from "./SceneContainer";

interface DescriptionProps {
  clientHeight: number[];
  setClientHeight: React.Dispatch<SetStateAction<number[]>>;
}

const Description2 = ({ clientHeight, setClientHeight }: DescriptionProps) => {
  const [curentHeight, setCurEentHeigth] = useState(0);

  useEffect(() => {
    setClientHeight((pre: number[]) => {
      const newArr = [...pre];
      newArr[1] = curentHeight;
      return newArr;
    });
  }, [curentHeight]);
  return (
    <SceneContainer heightNum={1} currentHeight={(height) => setCurEentHeigth(height)}>
      <p className="max-w-[1024px] mx-auto text-[1.2rem] text-center text-[#888]">
        <strong className="text-[3rem] float-left mx-[0.2em]">더 많은 즐거움</strong>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam vero possimus nam quod similique distinctio
        dicta vel libero eius quae soluta molestiae saepe, perferendis corrupti hic unde labore! Quidem minus quo sequi
        atque, soluta non rerum repellendus voluptatibus eligendi assumenda ipsam perspiciatis aspernatur saepe
        asperiores cumque mollitia recusandae accusamus at velit magnam nulla veniam neque dicta. Cupiditate velit
        dolorem cumque corrupti! Pariatur sunt harum ipsam numquam fugiat magni? Doloremque odit quaerat voluptas
        distinctio illo magni illum eveniet, accusantium ex. Incidunt adipisci explicabo culpa labore provident magnam
        odit debitis possimus excepturi vitae asperiores obcaecati voluptatum, voluptate corrupti quam maxime aliquam
        amet. Dolores ducimus nisi dolorum, ipsa delectus labore aliquid nostrum quod nam eligendi soluta repellat, vel
        ut. Quidem, atque adipisci dolorem sed voluptatem saepe quia facilis perferendis officiis similique, nihil odit
        distinctio error ducimus. Quis, repellat corporis? Numquam accusamus iusto nihil? Officiis, sint cupiditate!
        Ratione neque iste pariatur iusto deleniti fugiat esse temporibus doloremque nihil! Odio quaerat quis recusandae
        voluptas, velit eius necessitatibus corrupti libero commodi odit animi numquam mollitia, sed modi accusantium
        iure! Commodi modi numquam id officia, dolorum quam! Molestiae odit ullam dolores quod voluptates consectetur
        quae eius similique officiis rem neque, earum error repudiandae fuga dolor in sequi!
      </p>
    </SceneContainer>
  );
};

export default Description2;
