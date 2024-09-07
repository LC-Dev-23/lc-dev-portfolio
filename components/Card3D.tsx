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
      <CardBody className="bg-transparent border dark:border-white/[0.2] border-black/[0.2] rounded-xl relative dark:shadow-none shadow-md dark:hover:shadow-2xl dark:hover:shadow-primaryRed/[0.5] hover:shadow-2xl hover:shadow-primaryBlack/[0.5] p-6">
        <CardItem
          as="h3"
          translateZ="60"
          className="text-md md:text-xl font-heading font-bold text-primaryBlack dark:text-secondaryLightGray mb-1"
        >
          {title}
        </CardItem>
        <CardItem
          as="h4"
          translateZ="80"
          className="text-sm md:text-base font-body italic text-primaryBlack/80 dark:text-primaryWhite/80 mb-4"
        >
          {description}
        </CardItem>
        <CardItem
          as="div"
          translateZ="100"
          className="text-sm md:text-base font-body text-primaryBlack dark:text-secondaryLightGray mt-2"
        >
          <ul>
            {cardData.map((listItem) => (
              <li className="marker:text-primaryRed dark:text-accentSoftGray mb-2 pl-4 list-disc list-inside" key={listItem} dangerouslySetInnerHTML={{ __html: listItem }}></li>
            ))}
          </ul>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default Card3D
