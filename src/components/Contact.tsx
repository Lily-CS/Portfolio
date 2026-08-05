import { useState, type FormEvent } from "react";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
} from "lucide-react";

const EMAIL = "lily.aguirre@example.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Let's Connect
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Ready to collaborate on your next project or discuss opportunities?
            I'd love to hear from you and explore how we can work together.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <MessageForm />
          <GetInTouch />
        </div>
      </div>
    </section>
  );
}

function MessageForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Portfolio message from ${data.get("name") ?? "someone"}`
    );
    const body = encodeURIComponent(
      `${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${
        data.get("email") ?? ""
      })`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-900">Send a Message</h3>
      <p className="mt-2 text-sm text-slate-600">
        Have a project in mind or want to discuss collaboration opportunities?
        Drop me a message and I'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Field label="Name" name="name" type="text" placeholder="Your full name" />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
        />
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell me about your project or what you'd like to discuss..."
            className="w-full resize-none rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full justify-center"
        >
          {sent ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              Message Ready — Check Your Email
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}

function GetInTouch() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-900">Get In Touch</h3>

      <ul className="mt-6 space-y-3">
        <InfoCard
          icon={Mail}
          title="Email"
          value={EMAIL}
          href={`mailto:${EMAIL}`}
        />
        <InfoCard
          icon={MessageCircle}
          title="Response Time"
          value="Usually within 24 hours"
        />
      </ul>

      <h4 className="mt-8 text-sm font-semibold text-slate-900">
        Connect on Social
      </h4>
      <div className="mt-3 flex flex-wrap gap-3">
        <SocialButton
          icon={Linkedin}
          label="LinkedIn"
          href="https://www.linkedin.com/"
        />
        <SocialButton
          icon={Github}
          label="GitHub"
          href="https://github.com/"
        />
        <SocialButton icon={Mail} label="Email" href={`mailto:${EMAIL}`} />
      </div>

      <div className="mt-8 rounded-xl border border-brand-100 bg-brand-50/60 p-5">
        <h4 className="text-sm font-semibold text-slate-900">
          Open to Opportunities
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          I'm currently seeking internship and full-time opportunities in
          software engineering, data engineering, and cybersecurity. I'm
          particularly interested in roles that combine technical challenges
          with meaningful impact.
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-0.5 text-sm text-slate-600 truncate">{value}</div>
      </div>
    </div>
  );

  return (
    <li className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-brand-200">
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

function SocialButton({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Mail;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
