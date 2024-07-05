import React from 'react';
import { Link } from "react-router-dom";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import CAD from '../images/CAD.jpg'
import Myelopathy from '../images/Myelopathy.jpg'
import CES from '../images/CES.jpg'
import pmr from '../images/pmr.jpg'
import compartment from '../images/compartment.jpg'
import Fracture from '../images/Fracture.jpg'
import cancer from '../images/cancer.jpg'
import DVT from '../images/DVT.jpg'
import Cellulitis from '../images/Cellulitis.jpg'
import rheumatism from '../images/rheum.jpg'

const FlagImages = [
  {
    name: 'Cervical Artery Dysfunction (CAD)',
    pic: CAD,
    link: '/cad'
  },
  {
    name: 'Myelopathy',
    pic: Myelopathy,
    link: '/myelopathy'
  },
  {
    name: 'Compartment syndrome',
    pic: compartment,
    link: '/compartment-syndrome'
  },
  {
    name: 'Cauda Equina Syndrome (CES)',
    pic: CES,
    link: '/ces'
  },
  {
    name: 'Polymyalgia Rheumatica',
    pic: pmr,
    link: '/pmr'
  },
  {
    name: 'Fractures',
    pic: Fracture,
    link: '/fractures'
  },
  {
    name: 'Cancer',
    pic: cancer,
    link: '/cancer'
  },
  {
    name: 'Deep Vein Thrombosis (DVT)',
    pic: DVT,
    link: '/dvt'
  },
  {
    name: 'Cellulitis',
    pic: Cellulitis,
    link: '/cellulitis'
  },
  {
    name: 'Rheumatoid Arthritis',
    pic: rheumatism,
    link: '/rheumatoid-arthritis'
  },
];

const ScrollAreaHorizontal = () => {
  return (
    <ScrollArea className="scroll-area w-96" scrollDirection="horizontal">
      <div className="flex w-auto space-x-4 p-4">
        {FlagImages.map((redflag, index) => (
          <figure key={index} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Link to={redflag.link}>
                <img
                  src={redflag.pic}
                  alt={`Photo by ${redflag.name}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </Link>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {redflag.name}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ScrollAreaHorizontal;
