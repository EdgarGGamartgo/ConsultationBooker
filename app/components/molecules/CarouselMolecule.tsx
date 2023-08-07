'use client'

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export async function CarouselMolecule() {
    return (
        <Carousel style={{ height: '40vh' }}>
          <Image
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            width={20}
            height={300}
          />
          <Image
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            width={20}
            height={20}
          />
          <Image
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            width={20}
            height={20}
          />
          <Image
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            width={20}
            height={20}
          />
          <Image
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            width={20}
            height={20}
          />
        </Carousel>
      )
  }
  