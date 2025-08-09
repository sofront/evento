"use client";

import Typography from "@/components/typography/Typography";
import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventoCardProps = {
  eventoEvent: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventoCard({ eventoEvent }: EventoCardProps) {
  const motionLinkRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: motionLinkRef,
    offset: ["start end", "center center"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={motionLinkRef}
      className="h-[380px] flex-1 basis-80 max-w-[500px]"
      href={`/event/${eventoEvent.slug}`}
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{
        scale: 0.8,
        opacity: 0.3,
      }}
    >
      <article className="relative flex w-full h-full flex-col bg-white/[3%] rounded-xl overflow-hidden hover:scale-105 active:scale-[1.02] transition">
        <Image
          src={eventoEvent.imageUrl}
          alt={eventoEvent.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />

        <div className="flex flex-col justify-center flex-1 items-center">
          <Typography component="h2" variant="subtitle1">
            {eventoEvent.name}
          </Typography>
          <Typography component="p" variant="body1">
            By {eventoEvent.organizerName}
          </Typography>
          <Typography component="p" variant="caption1" className="mt-4">
            {eventoEvent.location}
          </Typography>
        </div>

        <section className="absolute flex flex-col items-center justify-center left-[12px] top-[12px] h-[45px] w-[45px] rounded-md bg-black/30">
          <Typography variant="subtitle2" className="font-bold -mb-[5px]">
            {new Date(eventoEvent.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </Typography>
          <Typography variant="caption1" className="text-accent">
            {new Date(eventoEvent.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </Typography>
        </section>
      </article>
    </MotionLink>
  );
}
