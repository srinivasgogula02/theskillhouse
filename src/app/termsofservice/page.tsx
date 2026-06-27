import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const LOGO_URL =
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL8YD3tB5hgi3dXYkoYjoLarNA0_4dpfDh59PzCz4NuFnUo86Cesytq-PWi8g1W70FhdDjWN8dLcak0bYt3Xgy1GhTqO89sOSRp2EEuVIfMP2dBixqfI6cswP6ZA0V3mENHRC_gHEjxN-ImMuzrQXtK4tDp6nAvGB0XebXBDlrNCXDprfQTgV2TC7W92w/s320/download%20(1)%20(1).png";

export const metadata: Metadata = {
  title: "Terms of Service | SkillHouse",
  description:
    "The terms and conditions governing your use of SkillHouse training programs, courses, and services.",
};

const LAST_UPDATED = "June 19, 2026";

export default function TermsOfServicePage() {
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
            Terms of Service
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
            Welcome to SkillHouse. These Terms of Service (&quot;Terms&quot;)
            govern your access to and use of the SkillHouse website, training
            programs, workshops, courses, and related services (collectively, the
            &quot;Services&quot;). By accessing our website, enrolling in a
            program, or otherwise using our Services, you agree to be bound by
            these Terms. If you do not agree, please do not use our Services.
          </p>

          <Section number="1" title="Acceptance of Terms">
            <p>
              By creating an account, enrolling in a course, or using any part of
              our Services, you confirm that you are at least 18 years of age (or
              have the consent of a parent or legal guardian) and that you have
              the legal capacity to enter into a binding agreement. If you are
              using the Services on behalf of an organization (B2B), you represent
              that you have the authority to bind that organization to these
              Terms.
            </p>
          </Section>

          <Section number="2" title="Description of Services">
            <p>
              SkillHouse provides upskilling and professional development programs
              for accountants and finance professionals, including but not limited
              to AI-powered finance training, practical workshops, soft-skills
              development, and placement assistance. Services are offered to both
              individuals (B2C) and organizations (B2B). We reserve the right to
              modify, suspend, or discontinue any part of the Services at any time,
              with or without notice.
            </p>
          </Section>

          <Section number="3" title="Enrollment and Accounts">
            <ul>
              <li>
                You agree to provide accurate, current, and complete information
                during enrollment and to keep it updated.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activity that occurs under your
                account.
              </li>
              <li>
                Course access is granted to the enrolled individual only and may
                not be shared, transferred, resold, or sublicensed without our
                written consent.
              </li>
            </ul>
          </Section>

          <Section number="4" title="Fees and Payment">
            <ul>
              <li>
                Program fees are stated at the time of enrollment and are payable
                in full (or per the agreed installment schedule) before access is
                granted, unless otherwise specified.
              </li>
              <li>
                All fees are quoted in Indian Rupees (INR) and are inclusive or
                exclusive of applicable taxes as indicated at checkout.
              </li>
              <li>
                We reserve the right to revise pricing at any time. Price changes
                will not affect enrollments already confirmed and paid for.
              </li>
              <li>
                Refunds, where applicable, are governed by our{" "}
                <Link
                  href="/refundpolicy"
                  className="text-[#0a825e] font-medium hover:underline"
                >
                  Refund Policy
                </Link>
                .
              </li>
            </ul>
          </Section>

          <Section number="5" title="Intellectual Property">
            <p>
              All content provided through the Services — including course
              materials, videos, presentations, templates, text, graphics, logos,
              and software — is the property of SkillHouse or its licensors and is
              protected by intellectual property laws. You are granted a limited,
              non-exclusive, non-transferable license to access and use the
              materials solely for your personal, non-commercial learning.
            </p>
            <p>
              You may not reproduce, distribute, publicly display, record,
              modify, or create derivative works from any course content without
              our prior written permission.
            </p>
          </Section>

          <Section number="6" title="Code of Conduct">
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Services for any unlawful, fraudulent, or harmful purpose.
              </li>
              <li>
                Share, distribute, or publish course materials or recordings
                without authorization.
              </li>
              <li>
                Harass, abuse, or harm other students, instructors, or staff.
              </li>
              <li>
                Attempt to gain unauthorized access to our systems or disrupt the
                Services.
              </li>
              <li>
                Impersonate any person or misrepresent your affiliation with any
                person or organization.
              </li>
            </ul>
            <p>
              We reserve the right to suspend or terminate access for any user who
              violates this Code of Conduct, without refund where appropriate.
            </p>
          </Section>

          <Section number="7" title="Placement Assistance">
            <p>
              SkillHouse offers placement assistance as a value-added service to
              eligible students. Placement assistance includes guidance, resume
              support, interview preparation, and connections to our partner
              network. However,{" "}
              <strong>
                SkillHouse does not guarantee employment, a specific salary, or a
                particular job outcome
              </strong>
              . Placement support is dependent on individual performance, market
              conditions, and availability of opportunities.
            </p>
          </Section>

          <Section number="8" title="Third-Party Tools and Links">
            <p>
              Our Services may reference or integrate third-party tools (such as
              AI platforms) and may contain links to third-party websites. We do
              not control and are not responsible for the content, policies, or
              practices of any third party. Your use of third-party tools is
              subject to their respective terms and conditions.
            </p>
          </Section>

          <Section number="9" title="Disclaimer of Warranties">
            <p>
              The Services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. To the fullest extent permitted by law,
              SkillHouse disclaims all warranties, express or implied, including
              warranties of merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the Services will be
              uninterrupted, error-free, or that any specific results will be
              achieved.
            </p>
          </Section>

          <Section number="10" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, SkillHouse and
              its officers, employees, and affiliates shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              or any loss of profits or revenues, arising out of or in connection
              with your use of the Services. Our total liability for any claim
              relating to the Services shall not exceed the amount you paid to us
              for the specific program giving rise to the claim.
            </p>
          </Section>

          <Section number="11" title="Indemnification">
            <p>
              You agree to indemnify and hold harmless SkillHouse and its
              affiliates from any claims, damages, liabilities, costs, or expenses
              (including reasonable legal fees) arising from your violation of
              these Terms or your misuse of the Services.
            </p>
          </Section>

          <Section number="12" title="Termination">
            <p>
              We may suspend or terminate your access to the Services at any time
              if you breach these Terms. Upon termination, your right to use the
              Services will immediately cease. Provisions that by their nature
              should survive termination (including intellectual property,
              disclaimers, and limitation of liability) shall survive.
            </p>
          </Section>

          <Section number="13" title="Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising out of or relating to these
              Terms or the Services shall be subject to the exclusive jurisdiction
              of the courts located in Mumbai, Maharashtra, India.
            </p>
          </Section>

          <Section number="14" title="Changes to These Terms">
            <p>
              We may update these Terms from time to time. The updated version
              will be indicated by the &quot;Last updated&quot; date at the top of
              this page. Your continued use of the Services after changes take
              effect constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section number="15" title="Contact Us">
            <p>
              If you have any questions about these Terms, please reach out to us:
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
              <li>Phone: +91 74163 21188</li>
              <li>Address: Mumbai, India</li>
            </ul>
          </Section>
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
