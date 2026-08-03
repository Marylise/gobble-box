import { NextResponse } from "next/server";
import { sendOrderNotification } from "@/lib/mailer";
import { PRODUCTS } from "@/lib/constants";

// Captures a one-time box order. No account, no database — the order details
// are emailed directly to the Gobble Box team. No payment is collected here;
// follow up with the customer directly for payment and shipping details.
export async function POST(req: Request) {
  try {
    const { parentName, parentPhone, parentEmail, studentName, boxTier } = await req.json();

    if (!parentName || !parentPhone || !parentEmail || !studentName || !boxTier) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const product = PRODUCTS.find((p) => p.tier === boxTier && p.type === "one-time");
    if (!product) {
      return NextResponse.json({ error: "Invalid box selected." }, { status: 400 });
    }

    await sendOrderNotification(`New Gobble Box order: ${product.name}`, [
      ["Box", `${product.name} ($${product.price.toFixed(2)})`],
      ["Parent Name", parentName],
      ["Parent Phone", parentPhone],
      ["Parent Email", parentEmail],
      ["Student Name", studentName],
    ]);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Order email error:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your order. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
