import RotatingWords from "../Test/wordAnimation"
import { LabCard } from "./lab-card"

type Item = {
  id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  href?: string
}

type LabSectionProps = {
  headingLeft?: string
  paragraphRight?: string
  items?: Item[]
}

export default function LabSection({
  headingLeft = "DOMAIN",
  paragraphRight = "Step into our creative playground - where relentless curiosity fuels original ideas and unforgettable formats. Every IP carries our signature spark: bold, unexpected, and unmistakably Tessarakt.",
  items = [
    {
      id: "1",
      title: "Blend Bazaar 2023",
      description:
        "A creator-powered fusion festival celebrating food, fashion, fiction, and music. Curated by Tessarakt Experiential and The Blend Community.",
      imageUrl: "/sections/software.png",
      imageAlt: "Festival stage with vibrant lights and a crowd.",
      href: "#",
    },
    {
      id: "2",
      title: "Mouna: Short Film",
      description:
        "A silent short that speaks volumes through emotion, stillness, and cinematic grace. Written, Directed, and Edited by Bharath MC.",
      imageUrl: "/sections/hardware.png",
      imageAlt: "Close-up cinematic frame from a short film.",
      href: "#",
    },
    {
      id: "3",
      title: "Mud Mud Ke Na Dekh",
      description:
        "A classic love triangle with a sharp, queer twist: an ex-husband, his best friend, and her new love. Produced by Tessarakt Productions.",
      imageUrl: "/sections/esports.png",
      imageAlt: "Cozy living room still with three characters.",
      href: "#",
    },
  ],
}: LabSectionProps) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full   py-16 md:py-24">
        {/* Top: massive LAB + paragraph */}
        <div className="grid grid-cols-1 w-full  pl-4 md:pl-6 lg:pl-10 md:grid-cols-12 items-start gap-8 md:gap-10">
          <div className="md:col-span-6">
            <h2 className="font-extrabold uppercase font-anton leading-none tracking-wide text-[14vw] md:text-[10vw] lg:text-[8vw]">
              {headingLeft}
            </h2>
          </div>
          <div className="md:col-span-2" />
          <div className="md:col-span-4 bg-[#23D3ED] p-4 flex gap-3 items-center justify-between">
           <div className="w-3 h-3 rounded-full bg-black "/>
           <RotatingWords />
           <div className="w-3 h-3 rounded-full bg-black "/>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 md:mt-16 px-4 md:px-6 lg:px-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <li key={item.id} className="list-none">
                <LabCard
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  href={item.href}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
