"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export const cardData = [
  {
    title: 'Problem-Solving Skills',
    listItems: [
      "Ability to diagnose issues and find effective solutions.",
      "Logical thinking and analytical skills."
    ],
  },
  {
    title: 'Attention to Detail',
    listItems: [
      "Precision in coding and design.",
      "Ability to spot and correct errors."
    ],
  },
  {
    title: 'Adaptability',
    listItems: [
      "Quickly learning new technologies and frameworks.",
      "Adjusting to changing project requirements."
    ],
  },
  {
    title: 'Self-Motivation',
    listItems: [
      "Driven to continuously improve and learn",
      "Taking initiative in projects and tasks."
    ],
  },
  {
    title: 'Collaboration',
    listItems: [
      "Open to feedback and able to give constructive feedback.",
      "Working well within a team"
    ],
  },
  {
    title: 'Customer Focus',
    listItems: [
      "Understanding client needs and requirements.",
      "Delivering solutions that meet user expectations."
    ],
  },
  {
    title: 'Organizational Skills',
    listItems: [
      "Keeping projects and files well-organized.",
      "Documenting code and processes clearly."
    ],
  },
  {
    title: 'Ethical Standards',
    listItems: [
      "Commitment to honest and transparent practices.",
      "Respecting privacy and confidentiality."
    ],
  },
  {
    title: 'Technical Curiosity',
    listItems: [
      "Enthusiasm for exploring new technologies and trends.",
      "Engaging in ongoing learning and professional development."
    ],
  },
  {
    title: 'Patience',
    listItems: [
      "Persistence in troubleshooting and debugging.",
      "Calm under pressure and in challenging situations."
    ],
  }
];

export function MovingCards() {
  return (
    <InfiniteMovingCards
      items={cardData}
      direction="right"
      speed="slow"
    />
  );
}
