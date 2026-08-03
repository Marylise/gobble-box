import { NextResponse } from "next/server";
import { sendOrderNotification } from "@/lib/mailer";

// Captures a Contact Us message. No account, no database — the message is
// emailed directly to the Gobble Box team.
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    await sendOrderNotification(`Gobble Box contact form: ${name}`, [
      ["Name", name],
      ["Email", email],
      ["Message", message],
    ]);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
