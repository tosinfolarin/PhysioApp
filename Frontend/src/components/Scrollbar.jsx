import React from 'react';
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
    name: 'Cervical Artery Disease (CAD)',
    pic: CAD,
  },
  {
    name: 'Myelopathy',
    pic: Myelopathy,
  },
  {
    name: 'Compartment syndrome',
    pic: compartment,
  },
  {
    name: 'Cauda Equina Syndrome (CES)',
    pic: CES,
  },
  {
    name: 'Polymyalgia Rheumatica',
    pic: pmr,
  },
  
  {
    name: 'Fractures',
    pic: Fracture,
  },
  
  {
    name: 'Cancer',
    pic: cancer,
  },
  {
    name: 'Deep Vein Thrombosis (DVT)',
    pic: DVT ,
  },
  {
    name: 'Cellulitis',
    pic: Cellulitis,
  },
  {
    name: 'Rheumatoid Arthritis',
    pic: rheumatism,
  },

];

const ScrollAreaHorizontalDemo = () => {
  return (
    <ScrollArea
      className="scroll-area w-96"
      scrollDirection="horizontal"
      scrollbarVisibility="visible"
      scrollbarSize={8} // Adjust size as needed
    >
      <div className="flex w-auto space-x-4 p-4">
        {FlagImages.map((redflag, index) => (
          <figure key={index} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={redflag.pic}
                alt={`Photo by ${redflag.name}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              {' '}
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



export default ScrollAreaHorizontalDemo;
