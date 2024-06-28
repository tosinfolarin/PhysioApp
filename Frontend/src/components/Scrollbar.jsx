import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import HeadNeck from '../images/HeadNeck.jpg'
import Myelopathy from '../images/Myelopathy.jpg'
import CES from '../images/CES.jpg'
import Fracture from '../images/Fracture.jpg'
import Cellulitis from '../images/Cellulitis.jpg'


const works = [
  {
    artist: 'Cervical Artery Disease (CAD)',
    art: HeadNeck,
  },
  {
    artist: 'Myelopathy',
    art: Myelopathy,
  },
  {
    artist: 'Compartment syndrome',
    art: Fracture,
  },
  {
    artist: 'Cauda Equina Syndrome (CES)',
    art: CES,
  },
  {
    artist: 'Polymyalgia Rheumatica',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  
  {
    artist: 'Fractures',
    art: Fracture,
  },
  
  {
    artist: 'Cancer',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Deep Vein Thrombosis (DVT)',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Cellulitis',
    art: Cellulitis,
  },
  {
    artist: 'Rheumatoid Arthritis',
    art: 'Frontend/src/images/HeadNeck.jpg',
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
        {works.map((artwork, index) => (
          <figure key={index} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Red Flag Area: {' '}
              <span className="font-semibold text-foreground">
                {artwork.artist}
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
