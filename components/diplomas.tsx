import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { diplomas } from '@/data/diplomas';

export function CarouselDemo() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="relative">
        {diplomas.map((diplomas) => (
          <CarouselItem key={diplomas.id} className="basis-full md:basis-1/3 lg:basis-1/3">
            <div className="p-1">
              <Card className="m-0 p-0">
                <CardContent className="flex aspect-square items-center justify-center m-0 p-0">
                  <Image src={diplomas.img} alt="Descripción de la imagen" width={600} height={100}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute bottom-0 left-0" />
      <CarouselNext className="absolute bottom-0 right-0"/>
    </Carousel>
  )
}
