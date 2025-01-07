import { Button } from "@/components/ui/button";

export default function SignUp() {
    return (
        <form action="/api/signup" method="post">
            <p className="pt-10 xl:pt-14 2xl:pt-24 text-center text-green-500 text-3xl xl:text-4xl 2xl:text-7xl">Sign Up</p>
            <section className="py-8 xl:py-14 text-purple-400 text-lg md:text-xl xl:text-2xl 2xl:text-4xl w-4/5 md:max-w-96 2xl:max-w-[486px] m-auto">
                <div className="pt-0">
                    <label className="text-left px-2" htmlFor="email">Email</label>
                    <input className="px-2 xl:px-4 py-1 xl:py-2 2xl:py-4 my-1 rounded-sm w-full text-sm xl:text-xl 2xl:text-2xl text-black" type="email" name="email" autoComplete="email" id="email" />
                </div>
                <div className="pt-4">
                    <label className="text-left px-2" htmlFor="password">Password</label>
                    <input className="px-2 xl:px-4 py-1 xl:py-2 2xl:py-4 my-1 rounded-sm w-full text-sm xl:text-xl 2xl:text-2xl text-black" type="password" autoComplete="current-password webauthn" name="password" id="password" />
                </div>
                <div className="w-2/5 m-auto mt-5 flex items-center justify-center">
                    <Button variant="default" type="submit" className="md:py-5 xl:py-7 xl:text-xl 2xl:text-2xl border-2 border-blue-400 w-24 xl:w-32 text-blue-500 hover:border-blue-800 hover:bg-blue-500 hover:text-white">Sign Up</Button>
                </div>
            </section>
        </form>
    );
}