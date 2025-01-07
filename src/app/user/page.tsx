import { Button } from "@/components/ui/button";
import { old_english2 } from "../page";

export default async function UserAccount() {

    return (
        <main>
            <p className={`${old_english2.className} pt-10 xl:pt-14 2xl:pt-24 text-center text-green-500 text-3xl xl:text-4xl 2xl:text-7xl`}>Update Account</p>
            <section className="py-8 xl:py-14 text-purple-400 text-lg md:text-xl xl:text-2xl 2xl:text-4xl w-4/5 md:max-w-96 2xl:max-w-[486px] m-auto">
                <div className="pt-0 pb-4">
                    <p className="text-left px-2 text-neutral-400 small-caps ">{ }</p>
                </div>
                <div className="pt-4">
                    <label className="text-left px-2" htmlFor="password">Current Password</label>
                    <input className="px-2 xl:px-4 py-1 xl:py-2 2xl:py-4 my-1 rounded-sm w-full text-sm xl:text-xl 2xl:text-2xl text-black" type="password" autoComplete="current-password webauthn" id="password" />
                </div>
                <div className="pt-4">
                    <label className="text-left px-2" htmlFor="new-password">New Password</label>
                    <input className="px-2 xl:px-4 py-1 xl:py-2 2xl:py-4 my-1 rounded-sm w-full text-sm xl:text-xl 2xl:text-2xl text-black" type="password" autoComplete="current-password webauthn" id="new-password" />
                </div>
                <div className="pt-4">
                    <label className="text-left px-2" htmlFor="confirm-password">Confirm Password</label>
                    <input className="px-2 xl:px-4 py-1 xl:py-2 2xl:py-4 my-1 rounded-sm w-full text-sm xl:text-xl 2xl:text-2xl text-black" type="password" autoComplete="current-password webauthn" id="confirm-password" />
                </div>
                <div className="md:flex md:justify-evenly md: items-center">
                    <div className="w-2/5 m-auto mt-5 flex items-center justify-center">
                        <Button variant="default" className="md:py-5 xl:py-7 xl:text-xl 2xl:text-2xl border-2 border-blue-400 w-24 xl:w-32 text-blue-500 hover:border-blue-800 hover:bg-blue-500 hover:text-white">Update</Button>
                    </div>
                    <div className="w-2/5 m-auto mt-5 flex items-center justify-center">
                        <Button variant="default" className="md:py-5 xl:py-7 xl:text-xl 2xl:text-2xl border-2 border-red-400 w-24 xl:w-32 text-red-500 hover:border-red-800 hover:bg-red-500 hover:text-white">Delete</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}