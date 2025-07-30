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
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Image
        src='/img/logo.svg'
        alt='Aqua9 Logo'
        width={120}
        height={64}
        style={{
          marginBottom: '2rem',
        }}
        priority
      />
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#ffffff',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          color: '#e5e7eb',
          maxWidth: '600px',
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center',
          marginBottom: '3rem',
        }}
      >
        {technologies.map((tech, index) => (
          <span
            key={index}
            style={{
              background: 'rgba(59, 130, 246, 0.2)',
              color: '#60a5fa',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              border: '1px solid rgba(59, 130, 246, 0.3)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      <Image
        src='/img/hero-illustration.svg'
        alt='Hero Illustration'
        width={300}
        height={200}
        style={{
          opacity: '0.8',
        }}
      />
    </main>
  );
}
