'use client';

import { useEffect } from 'react';
import {
  modalBottom,
  modalCloseButton,
  modalContainer,
  modalContent,
  modalFooter,
  modalHeader,
  modalHeaderActions,
  modalOverlay,
  modalSide,
  modalSizes,
  modalSubtitle,
  modalTitle,
  modalVariants,
} from './styles';
import { ModalProps } from './types';

// Função utilitária para combinar classes CSS
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Componente Modal reutilizável e responsivo
 *
 * @example
 * ```tsx
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Confirmação"
 * >
 *   <p>Deseja realmente excluir este item?</p>
 * </Modal>
 *
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   size="lg"
 *   variant="centered"
 *   footer={<Button>Confirmar</Button>}
 * >
 *   Conteúdo do modal
 * </Modal>
 * ```
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  size = 'md',
  variant = 'default',
  className,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  footer,
  headerActions,
  preventClose = false,
}: ModalProps) => {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEscape = (event: { key: string }) => {
      if (event.key === 'Escape' && closeOnEscape && !preventClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEscape, preventClose]);

  // Prevenir scroll do body quando modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && closeOnOverlayClick && !preventClose) {
      onClose();
    }
  };

  const getModalClasses = () => {
    const baseClasses = [modalContainer, modalSizes[size]];

    if (variant === 'bottom') {
      baseClasses.push(modalBottom);
    } else if (variant === 'side') {
      baseClasses.push(modalSide);
    }

    return cn(...baseClasses, className);
  };

  return (
    <div
      className={cn(modalOverlay, modalVariants[variant])}
      onClick={handleOverlayClick}
    >
      <div className={getModalClasses()}>
        {/* Header */}
        {(title || headerActions || showCloseButton) && (
          <div className={modalHeader}>
            <div>
              {title && <h2 className={modalTitle}>{title}</h2>}
              {subtitle && <p className={modalSubtitle}>{subtitle}</p>}
            </div>

            <div className={modalHeaderActions}>
              {headerActions}
              {showCloseButton && !preventClose && (
                <button
                  onClick={onClose}
                  className={modalCloseButton}
                  aria-label="Fechar modal"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className={modalContent}>{children}</div>

        {/* Footer */}
        {footer && <div className={modalFooter}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
