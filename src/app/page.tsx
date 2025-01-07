import Login from "@/components/ui/login";
import { Uncial_Antiqua } from "next/font/google";
import Link from "next/link";

export const old_english2 = Uncial_Antiqua({ weight: '400', subsets: ['latin'] });

export default async function Home() {

  return (
    <main className="px-5 py-12 xl:py-16 2xl:py-24 small-caps">
      <section className="text-center">
        <p className={`${old_english2.className} my-drop-shadow-gold text-5xl md:text-6xl xl:text-7xl 2xl:text-9xl text-yellow-400`}>Kingdoms of <span className="my-drop-shadow-blue text-blue-500 block">Myridia</span></p>
        <p className="py-5 text-sm md:text-base xl:text-lg 2xl:text-3xl text-white">A text based civilization building game</p>
      </section>

      {/* Login Section */}
      <Login />

      {/* Sign Up Section */}
      <section className="text-neutral-300 text-sm xl:text-lg 2xl:text-3xl text-center">
        <p>Don't have an account?</p>
        <p className="text-red-500">Sign up for free <Link href="/signup" className="text-blue-400 underline underline-offset-4">here</Link></p>      </section>
    </main>
  );
}
