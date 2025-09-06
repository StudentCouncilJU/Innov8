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
  // paragraphRight = "Step into our creative÷ playground - where relentless curiosity fuels original ideas and unforgettable formats. Every IP carries our signature spark: bold, unexpected, and unmistakably Tessarakt.",
  items = [
    {
      id: "1",
      title: "Blend Bazaar 2023",
      description:
        "Focusing on coding, applications, and AI-driven solutions, this domain empowers participants to craft impactful software innovations. It highlights problem-solving through algorithms, development, and real-world digital products.",
      imageUrl: "/sections/software.png",
      imageAlt: "Festival stage with vibrant lights and a crowd.",
      href: "/software",
    },
    {
      id: "2",
      title: "Mouna: Short Film",
      description:
        "A platform to showcase innovation in circuits, robotics, and embedded systems. The hardware domain encourages participants to design, build, and present practical solutions that merge creativity with cutting-edge technology.",
      imageUrl: "/sections/hardware.png",
      imageAlt: "Close-up cinematic frame from a short film.",
      href: "/hardware",
    },
    {
      id: "3",
      title: "Mud Mud Ke Na Dekh",
      description:
        "Blending technology with competitive spirit, the esports domain brings together gamers to battle it out in a high-energy environment. It celebrates strategy, skill, and teamwork across popular competitive titles.",
      imageUrl: "/sections/esports.png",
      imageAlt: "Cozy living room still with three characters.",
      href: "/esports",
    },
  ],
}: LabSectionProps) {
  return (
    <section id="domains" className="bg-black text-white">
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
