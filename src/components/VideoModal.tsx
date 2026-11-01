import React, { useEffect, useState } from 'react';

/**
 * Magnific Popup opens the showreel with `mainClass: 'mfp-fade', removalDelay: 160`.
 * `removalDelay` is how long Magnific waits after starting the closing fade
 * before it tears the wrapper out of the DOM — so the popup is removed about
 * halfway through the 300ms fade-out. Same timings here.
 */
const MFP_REMOVAL_DELAY = 160;

interface VideoModalProps {
  isOpen: boolean;
  embedUrl: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, embedUrl, onClose }) => {
  const [mounted, setMounted] = useState(isOpen);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);

      // Two frames, so the overlay is painted at opacity 0 before `.is-ready`
      // lands — otherwise there is nothing for the 300ms fade to start from.
      let innerRaf = 0;
      const outerRaf = requestAnimationFrame(() => {
        innerRaf = requestAnimationFrame(() => setReady(true));
      });
      return () => {
        cancelAnimationFrame(outerRaf);
        cancelAnimationFrame(innerRaf);
      };
    }

    setReady(false);
    const timer = window.setTimeout(() => setMounted(false), MFP_REMOVAL_DELAY);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={`video-modal-overlay${ready ? ' is-ready' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video showcase"
    >
      <div className="video-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="video-modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          ×
        </button>
        <div className="video-modal-dialog">
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title="Showreel Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
