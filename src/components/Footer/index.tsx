'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  backToTopButton,
  footerBase,
  footerBottom,
  footerBottomBranded,
  footerBottomDark,
  footerContainer,
  footerContent,
  footerCopyright,
  footerCopyrightBranded,
  footerCopyrightDark,
  footerLink,
  footerLinkBranded,
  footerLinkDark,
  footerLinks,
  footerLogo,
  footerSection,
  footerSectionTitle,
  footerSectionTitleBranded,
  footerSectionTitleDark,
  footerSizes,
  footerSocial,
  footerVariants,
} from './styles';
import { FooterProps } from './types';

// Função utilitária para combinar classes CSS
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Componente Footer reutilizável e responsivo
 *
 * @example
 * ```tsx
 * <Footer
 *   copyright="© 2024 Aqua9. Todos os direitos reservados."
 *   sections={[
 *     {
 *       title: "Produtos",
 *       links: [{ label: "Boilerplate", href: "/" }]
 *     }
 *   ]}
 * />
 * ```
 */
const Footer = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  copyright = '© 2024 Aqua9. Todos os direitos reservados.',
  sections,
  socialLinks,
  logo,
  showBackToTop = false,
}: FooterProps) => {
  const getSectionTitleClass = () => {
    switch (variant) {
      case 'dark':
        return footerSectionTitleDark;
      case 'branded':
        return footerSectionTitleBranded;
      default:
        return footerSectionTitle;
    }
  };

  const getLinkClass = () => {
    switch (variant) {
      case 'dark':
        return footerLinkDark;
      case 'branded':
        return footerLinkBranded;
      default:
        return footerLink;
    }
  };

  const getBottomClass = () => {
    switch (variant) {
      case 'dark':
        return footerBottomDark;
      case 'branded':
        return footerBottomBranded;
      default:
        return footerBottom;
    }
  };

  const getCopyrightClass = () => {
    switch (variant) {
      case 'dark':
        return footerCopyrightDark;
      case 'branded':
        return footerCopyrightBranded;
      default:
        return footerCopyright;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer
        className={cn(
          footerBase,
          footerVariants[variant],
          footerSizes[size],
          className
        )}
      >
        <div className={footerContainer}>
          {children || (
            <>
              <div className={footerContent}>
                {/* Logo e descrição */}
                <div className={footerSection}>
                  {logo && (
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width || 120}
                      height={logo.height || 32}
                      className={footerLogo}
                    />
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    Template Next.js profissional com TypeScript e SEO otimizado
                  </p>
                </div>

                {/* Seções de links */}
                {sections?.map((section, index) => (
                  <div key={index} className={footerSection}>
                    <h3 className={getSectionTitleClass()}>{section.title}</h3>
                    <div className={footerLinks}>
                      {section.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className={getLinkClass()}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Links sociais */}
                {socialLinks && (
                  <div className={footerSection}>
                    <h3 className={getSectionTitleClass()}>Redes Sociais</h3>
                    <div className={footerSocial}>
                      {socialLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className={getLinkClass()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Rodapé inferior */}
              <div className={getBottomClass()}>
                <p className={getCopyrightClass()}>{copyright}</p>
              </div>
            </>
          )}
        </div>
      </footer>

      {/* Botão back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={backToTopButton}
          aria-label="Voltar ao topo"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;
