'use client';
import Image from "next/image";
import { Card } from "@/components/card/card";

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">

      <div className="flex justify-center items-center">
        <div className="mt-6">
          <Card 
            variant="light" 
            image="https://placehold.co/600x400" 
            title="Card Title" 
            label="This is a card description." 
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-6">
          <Card 
            variant="light" 
            image="https://placehold.co/600x400" 
            title="Card Title" 
            label="This is a card description." 
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-6">
          <Card 
            variant="light" 
            image="https://placehold.co/600x400" 
            title="Card Title" 
            label="This is a card description." 
          />
        </div>
      </div>
    </div>
  );
}
