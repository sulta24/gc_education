"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Image from "next/image";
import Link from "next/link";

export function HeroSection2() {
  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>Платформа менторства</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl">
              Найди своего ментора на платформе, где опыт и поддержка встречаются с твоими целями
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Здесь ты можешь выбрать эксперта из ведущих creative и tech компаний, чтобы получить персональные советы по карьере, развитию навыков, переходу в новую профессию или запуску проекта.
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Более 900 менторов готовы поделиться опытом
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Средняя оценка менторов — 9,7 из 10
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Минимум 5 лет практического опыта у каждого ментора
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/mentors">
              <Button>Найти ментора</Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="ghost">
                Как это работает
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/Hero.png"
              alt="Hero visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
