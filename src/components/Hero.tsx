import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-brand-100/70 via-brand-50 to-white"
    >
      <FloatingCircles />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 pb-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              Hi, I'm{" "}
              <span className="text-brand-600">Lily Aguirre</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-slate-600">
              Software Engineer <span className="mx-1 text-slate-400">|</span>{" "}
              Data Engineering{" "}
              <span className="mx-1 text-slate-400">|</span> Application
              Security
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
              Passionate about building secure, scalable applications and
              turning complex data into actionable insights. Currently pursuing
              Computer Science &amp; Software Engineering at the University of
              Washington Bothell.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="icon-btn"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="icon-btn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="icon-btn"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <ProfilePortrait />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfilePortrait() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-300/60 via-brand-200/40 to-transparent blur-2xl" />
      <div className="relative h-64 w-64 overflow-hidden rounded-full ring-4 ring-white shadow-xl sm:h-80 sm:w-80 md:h-96 md:w-96">
        <img
          src="/profile.jpg"
          alt="Lily Aguirre portrait"
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://api.dicebear.com/9.x/initials/svg?seed=Lily%20Aguirre&backgroundColor=dbeafe";
          }}
        />
      </div>
    </div>
  );
}

function FloatingCircles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <span className="absolute left-[8%] top-[28%] h-24 w-24 rounded-full bg-brand-300/40 animate-float-slow" />
      <span className="absolute right-[22%] top-[32%] h-8 w-8 rounded-full bg-brand-300/50 animate-float-slower" />
      <span className="absolute left-[42%] bottom-[24%] h-6 w-6 rounded-full bg-brand-400/40 animate-float-slow" />
      <span className="absolute right-[16%] bottom-[18%] h-16 w-16 rounded-full bg-brand-200/60 animate-float-slower" />
      <span className="absolute left-[18%] bottom-[10%] h-4 w-4 rounded-full bg-brand-400/40 animate-float-slow" />
    </div>
  );
}
