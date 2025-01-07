import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-4/5 my-10 mx-auto text-neutral-400 text-xs xl:text-sm 2xl:text-xl text-center">
            <p>Enjoy the game and want to support it?</p>
            <p className="text-green-400">Consider donating to my patreon <Link href="/" className="text-red-500 underline underline-offset-4">here</Link></p>
            <p className="mt-10 text-neutral-500 text-[8px] xl:text-lg">Designed and developed by J. R. Masias 2025</p>
        </footer>
    );
}