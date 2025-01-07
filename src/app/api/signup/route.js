import { NextResponse } from "next/server";
import { getEmails } from "../database/route";

export async function POST(req) {
  const Formdata = await req.formData();
  const email = Formdata.get("email");
  const password = Formdata.get("password");

  // check if email exists in the database
  const allEmails = await getEmails();
  const emailExists = allEmails.includes(email);

  // if email does not exist
  if (!emailExists) {
    const preuser = [email, password];
    return NextResponse.redirect(
      new URL(`/create-kingdom?preuser=${encodeURIComponent(preuser)}`, req.url)
    );
  }

  return NextResponse.redirect(new URL("/", req.url));
}
