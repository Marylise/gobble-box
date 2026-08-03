import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-maroon mb-8">About Us</h1>

      <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
        <div className="relative h-40 w-40 shrink-0 rounded-full overflow-hidden bg-maroon-100">
          <Image
            src="/images/founder.jpg"
            alt="Founder of Gobble Box"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-maroon">Lana FABRO</h2>
          <p className="text-sm text-orange font-semibold mb-3">Founder & CEO, Gobble Box</p>
          <p className="text-sm text-gray-600 leading-relaxed">
          </p>
        </div>
      </div>

      <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
        <p>
          I’m a sophomore at Virginia Tech studying Corporate and Investment Finance. I love anything creative, playing soccer, and I'm famous in my family for constantly starting new hobbies. If there's one thing that describes me, it's dreaming big.
        </p>
        <p>
Starting college is hard. For the first time in your life, you're away from home for months at a time, and that can be a big adjustment. I know I wasn't the only one who got homesick every now and then. One of the things that always made those days a little easier was getting a care package from my parents, usually filled with my favorite snacks and little things that reminded me of home. Those packages meant so much more than what was inside the box. They reminded me that I was loved, supported, and being thought of.
That's why I started Gobble Box. I wanted to make it easy for parents to send that same feeling to their Hokies. My goal is to help make the transition to college a little easier, one care package at a time, and bring students a little extra joy when they need it most.

        </p>
        <p>
          In the spirit of Ut Prosim, 10% of our profits are donated each month to a Virginia Tech service organization serving our community. The selected organization is announced monthly, it's our way of giving back
        </p>
      </div>
    </div>
  );
}
