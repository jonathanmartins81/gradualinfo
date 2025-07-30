import Image from 'next/image';

interface MainProps {
  title?: string;
  description?: string;
  technologies?: string[];
}

export function Main({
  title = 'Boilerplate Aqua9',
  description = 'Template Next.js profissional com TypeScript e SEO otimizado',
  technologies = ['Next.js', 'React', 'TypeScript'],
}: MainProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gradient-primary">
      <Image
        src="/img/logo.svg"
        alt="Aqua9 Logo"
        width={120}
        height={64}
        className="mb-8"
        priority
      />

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in">
        {title}
      </h1>

      <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl leading-relaxed animate-fade-in">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="badge-primary border border-primary-300/30 text-sm px-4 py-2"
          >
            {tech}
          </span>
        ))}
      </div>

      <Image
        src="/img/illustration.svg"
        alt="Hero Illustration"
        width={300}
        height={200}
        className="opacity-80 animate-bounce-in"
      />
    </main>
  );
}
