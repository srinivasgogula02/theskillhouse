import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const LOGO_URL =
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL8YD3tB5hgi3dXYkoYjoLarNA0_4dpfDh59PzCz4NuFnUo86Cesytq-PWi8g1W70FhdDjWN8dLcak0bYt3Xgy1GhTqO89sOSRp2EEuVIfMP2dBixqfI6cswP6ZA0V3mENHRC_gHEjxN-ImMuzrQXtK4tDp6nAvGB0XebXBDlrNCXDprfQTgV2TC7W92w/s320/download%20(1)%20(1).png";

export const metadata: Metadata = {
  title: "Refund Policy | SkillHouse",
  description:
    "Learn about SkillHouse's refund and cancellation policy for training programs, workshops, and courses.",
};

const LAST_UPDATED = "June 19, 2026";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src={LOGO_URL} alt="SkillHouse" className="h-9 w-auto" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#063b2b] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#063b2b] via-[#0a825e] to-[#063b2b] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Refund Policy
          </h1>
          <p className="mt-4 text-white/70 text-sm sm:text-base">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed">
            At SkillHouse, we are committed to delivering high-quality upskilling
            programs for finance professionals. We understand that circumstances
            can change, and this Refund Policy explains when and how you may be
            eligible for a refund for our courses, workshops, and programs. By
            enrolling in any SkillHouse program, you agree to the terms outlined
            below.
          </p>

          <Section number="1" title="Cooling-Off Period (7-Day Refund)">
            <p>
              For most paid self-paced and workshop programs, you may request a
              full refund within <strong>7 calendar days</strong> of your
              enrollment date, provided that:
            </p>
            <ul>
              <li>
                You have accessed no more than <strong>20%</strong> of the course
                content, and
              </li>
              <li>
                The program (in the case of live workshops) has not yet started.
              </li>
            </ul>
            <p>
              If both conditions are met, you will receive a 100% refund of the
              fees paid, less any non-refundable transaction or payment-gateway
              charges.
            </p>
          </Section>

          <Section number="2" title="Refunds After the Cooling-Off Period">
            <p>
              Once the 7-day cooling-off period has passed, or once you have
              accessed more than 20% of the course content, refunds are generally
              <strong> not available</strong>, except in the special
              circumstances described in Section 4.
            </p>
            <p>
              For live or cohort-based programs, the following schedule applies if
              you withdraw before completion:
            </p>
            <ul>
              <li>
                <strong>More than 7 days before the batch start date:</strong>{" "}
                Full refund (less transaction charges).
              </li>
              <li>
                <strong>3–7 days before the batch start date:</strong> 50% refund.
              </li>
              <li>
                <strong>
                  Less than 3 days before, or after the batch has started:
                </strong>{" "}
                No refund.
              </li>
            </ul>
          </Section>

          <Section number="3" title="Non-Refundable Items">
            <p>The following are non-refundable under all circumstances:</p>
            <ul>
              <li>
                Registration, application, or administrative fees explicitly marked
                as non-refundable.
              </li>
              <li>Payment-gateway and transaction processing charges.</li>
              <li>
                Discounted, promotional, or scholarship-based enrollments, unless
                stated otherwise at the time of purchase.
              </li>
              <li>
                Certification fees once a certificate has been issued.
              </li>
              <li>
                Free programs, trials, or complimentary resources.
              </li>
            </ul>
          </Section>

          <Section number="4" title="Special Circumstances">
            <p>
              We may consider full or partial refunds outside the standard policy
              in the following situations, at our sole discretion and with
              supporting documentation:
            </p>
            <ul>
              <li>
                <strong>Program cancellation by SkillHouse:</strong> If we cancel
                a program before it begins, you will receive a 100% refund or the
                option to transfer to another batch.
              </li>
              <li>
                <strong>Medical or emergency situations:</strong> Documented
                medical emergencies may qualify for a partial refund or batch
                transfer.
              </li>
              <li>
                <strong>Duplicate payment:</strong> If you are charged more than
                once for the same enrollment, the duplicate amount will be fully
                refunded.
              </li>
            </ul>
          </Section>

          <Section number="5" title="Batch Transfers and Deferrals">
            <p>
              Instead of a refund, you may request a one-time transfer to a future
              batch of the same or equivalent program, subject to availability.
              Transfer requests must be made at least 3 days before the batch start
              date. A nominal transfer fee may apply.
            </p>
          </Section>

          <Section number="6" title="How to Request a Refund">
            <p>To request a refund, please:</p>
            <ul>
              <li>
                Email us at{" "}
                <a
                  href="mailto:hello@skillhouse.in"
                  className="text-[#0a825e] font-medium hover:underline"
                >
                  hello@skillhouse.in
                </a>{" "}
                with the subject line &quot;Refund Request&quot;.
              </li>
              <li>
                Include your full name, registered email, program name, enrollment
                date, and reason for the request.
              </li>
              <li>
                Attach any supporting documents if requesting a refund under
                special circumstances.
              </li>
            </ul>
          </Section>

          <Section number="7" title="Processing Time">
            <p>
              Approved refunds will be processed to the original payment method
              within <strong>7–14 business days</strong> of approval. The time it
              takes for the amount to reflect in your account may vary depending on
              your bank or payment provider. You will receive a confirmation email
              once your refund has been initiated.
            </p>
          </Section>

          <Section number="8" title="Placement Assistance">
            <p>
              Please note that placement assistance is a complimentary,
              value-added service and does not carry a separate fee. No refunds
              are issued on the basis of placement outcomes, as employment is not
              guaranteed and depends on individual performance and market
              conditions.
            </p>
          </Section>

          <Section number="9" title="Changes to This Policy">
            <p>
              SkillHouse reserves the right to modify this Refund Policy at any
              time. Any changes will be posted on this page with an updated
              &quot;Last updated&quot; date. The policy in effect at the time of
              your enrollment will apply to that enrollment.
            </p>
          </Section>

          <Section number="10" title="Contact Us">
            <p>
              For any questions regarding refunds or this policy, please contact:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a
                  href="mailto:hello@skillhouse.in"
                  className="text-[#0a825e] font-medium hover:underline"
                >
                  hello@skillhouse.in
                </a>
              </li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Mumbai, India</li>
            </ul>
          </Section>

          <p className="mt-10 text-gray-600 leading-relaxed">
            This Refund Policy should be read together with our{" "}
            <Link
              href="/termsofservice"
              className="text-[#0a825e] font-medium hover:underline"
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#031f17] text-white/60 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2025 SkillHouse. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/refundpolicy" className="hover:text-white transition">
              Refund Policy
            </Link>
            <Link href="/termsofservice" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl sm:text-2xl font-bold text-[#063b2b] mb-3">
        {number}. {title}
      </h2>
      <div className="text-gray-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:marker:text-[#0a825e]">
        {children}
      </div>
    </section>
  );
}
