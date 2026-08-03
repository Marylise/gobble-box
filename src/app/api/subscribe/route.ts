import { NextResponse } from "next/server";
import { sendOrderNotification } from "@/lib/mailer";
import { SUBSCRIPTION_OCCASIONS } from "@/lib/constants";

// Captures a subscription signup for the Premium 4-box subscription. No
// account, no database — the details are emailed directly to the Gobble Box
// team. No payment is collected here.
export async function POST(req: Request) {
  try {
    const { parentName, parentPhone, parentEmail, studentName, birthMonth, birthDay } =
      await req.json();

    if (!parentName || !parentPhone || !parentEmail || !studentName || !birthMonth || !birthDay) {
      return NextResponse.json(
        {
          error:
            "Please fill in all required fields, including the student's birth month and day (needed for the Birthday box).",
        },
        { status: 400 }
      );
    }

    const month = Number(birthMonth);
    const day = Number(birthDay);
    if (!Number.isInteger(month) || month < 1 || month > 12) {
      return NextResponse.json({ error: "Invalid birth month." }, { status: 400 });
    }
    if (!Number.isInteger(day) || day < 1 || day > 31) {
      return NextResponse.json({ error: "Invalid birth day." }, { status: 400 });
    }

    await sendOrderNotification("New Gobble Box subscription: Premium 4-Box Subscription", [
      ["Occasions", SUBSCRIPTION_OCCASIONS.join(", ")],
      ["Parent Name", parentName],
      ["Parent Phone", parentPhone],
      ["Parent Email", parentEmail],
      ["Student Name", studentName],
      ["Student Birthday", `Month ${month}, Day ${day}`],
    ]);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Subscription email error:", err);
    return NextResponse.json(
      {
        error: "Something went wrong sending your subscription. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
