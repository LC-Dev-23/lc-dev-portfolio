"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface CardProps {
  title: string;
  description: string;
  cardData: Array<string>;
}

const Card3D = ({ title, description, cardData }: CardProps) => {
  return (
    <CardContainer className="w-full">
      <CardBody className="bg-transparent border dark:border-white/[0.2] border-black/[0.2] rounded-xl relative dark:hover:shadow-2xl dark:hover:shadow-primaryRed/[0.5] hover:shadow-2xl hover:shadow-primaryBlack/[0.5] p-6">
        <CardItem
          as="h3"
          translateZ="60"
          className="text-xl font-bold text-primaryBlack dark:text-secondaryLightGray mb-1 font-display"
        >
          {title}
        </CardItem>
        <CardItem
          as="h4"
          translateZ="80"
          className="text-base text-primaryBlack dark:text-accentSoftGray mb-4 font-special italic"
        >
          {description}
        </CardItem>
        <CardItem
          as="div"
          translateZ="100"
          className="text-primaryBlack text-base mt-2 dark:text-secondaryLightGray font-sans"
        >
          <ul>
            {cardData.map((listItem) => (
              <li className="marker:text-primaryRed dark:text-accentSoftGray mb-2 pl-4 list-disc list-inside" key={title} dangerouslySetInnerHTML={{ __html: listItem }}></li>
            ))}
          </ul>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default Card3D
