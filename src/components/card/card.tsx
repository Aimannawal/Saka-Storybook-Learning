import Link from "next/link";
import Image from "next/image";
import {FC} from "react";
import {CardProps} from "./card.type";
import {Button} from "@/stories/Button";
import '../../app/globals.css';

export const Card: FC<CardProps> = ({
    image = "https://placehold.co/400",
    title,
    label,
}) => {
    return (
        <div className="space-y-4">
            <div className="rounded-[1.042vw] bg-light_dark overflow-hidden">
            <img src={image} alt="" className="w-[14.323vw] h-[19.01vw] object-cover object-top rounded-[1.042vw] transition-transform duration-300 ease-in-out transform hover:scale-105"/>
            </div>
        </div>
      
    );
};