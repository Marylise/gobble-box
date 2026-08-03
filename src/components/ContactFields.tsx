"use client";

export type ContactFormValues = {
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  studentName: string;
};

export const emptyContactForm: ContactFormValues = {
  parentName: "",
  parentPhone: "",
  parentEmail: "",
  studentName: "",
};

// Minimal order/subscription form: parent name, phone, email, and which
// student it's for. No account, no address, no preferences — this
// information is emailed straight to the Gobble Box team, who follow up
// directly for shipping details and payment.
export default function ContactFields({
  form,
  onChange,
}: {
  form: ContactFormValues;
  onChange: <K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) => void;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-1">Your Name</label>
        <input
          required
          className="input-field"
          value={form.parentName}
          onChange={(e) => onChange("parentName", e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-1">Your Phone</label>
        <input
          required
          type="tel"
          className="input-field"
          value={form.parentPhone}
          onChange={(e) => onChange("parentPhone", e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-1">Your Email</label>
        <input
          required
          type="email"
          className="input-field"
          value={form.parentEmail}
          onChange={(e) => onChange("parentEmail", e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-1">
          Student&apos;s Name
        </label>
        <input
          required
          className="input-field"
          value={form.studentName}
          onChange={(e) => onChange("studentName", e.target.value)}
        />
      </div>
    </div>
  );
}
