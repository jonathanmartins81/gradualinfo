import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada - Aqua9 Boilerplate v2',
  description: 'A página que você está procurando não foi encontrada.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Página não encontrada - Aqua9 Boilerplate v2',
    description: 'A página que você está procurando não foi encontrada.',
    type: 'website',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Página não encontrada - Aqua9 Boilerplate v2',
    description: 'A página que você está procurando não foi encontrada.',
    images: ['/og-image.svg'],
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            404 - Página não encontrada
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A página que você está procurando não existe.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}
