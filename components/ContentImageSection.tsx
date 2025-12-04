import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export interface ContentImageSectionProps {
  title: string
  description: string | ReactNode
  imageSrc: string | StaticImageData
  alt?: string
  reverse?: boolean
  className?: string
}

export default function ContentImageSection({
  title,
  description,
  imageSrc,
  alt = '',
  reverse = false,
  className = '',
}: ContentImageSectionProps) {
  return (
    <section
      className={`content-image-section ${reverse ? 'reverse' : ''} ${className}`.trim()}
    >
      <div className="text-content">
        <h2>{title}</h2>

        {typeof description === 'string' ? (
          <p className="lead">{description}</p>
        ) : (
          description
        )}
      </div>

      <div className="image-content">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <style jsx>{`
        .content-image-section {
          width: 100%;
          max-width: 1280px; /* un poco más ancho */
          margin: 3rem auto;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: stretch;

          background-color: #ffffff; /* mismo fondo que la página */
          border-radius: 1.25rem;
          border: 1px solid #e5e7eb;
          box-shadow: 0 22px 45px rgba(15, 23, 42, 0.08);
          position: relative;
          overflow: hidden;
        }

        /* franja decorativa superior en verde */
        .content-image-section::before {
          content: '';
          position: absolute;
          inset: 0;
          height: 6px;
          background: linear-gradient(90deg, #205225, #3b7a42);
        }

        @media (min-width: 768px) {
          .content-image-section {
            flex-direction: row;
            align-items: center;
            padding: 3rem 3rem;
            gap: 3rem;
          }
          .content-image-section.reverse {
            flex-direction: row-reverse;
          }
        }

        .text-content {
          width: 100%;
          max-width: 620px;
          padding-top: 0.6rem; /* para compensar la franja decorativa */
        }

        .content-image-section h2 {
          margin-bottom: 0.75rem;
          font-size: 1.6rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #205225; /* verde de la marca */
        }

        @media (min-width: 768px) {
          .content-image-section h2 {
            font-size: 2rem;
          }
        }

        .text-content .lead {
          font-size: 1rem;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .text-content p {
          line-height: 1.75;
          color: #4b5563;
        }

        .text-content p + p {
          margin-top: 0.6rem;
        }

        /* enlaces dentro del contenido */
        .text-content :global(a) {
          color: #205225;
          text-decoration: none;
          font-weight: 500;
        }
        .text-content :global(a:hover) {
          text-decoration: underline;
        }

        /* listas dentro del contenido */
        .text-content :global(ul),
        .text-content :global(ol) {
          margin: 0.75rem 0 0;
          padding-left: 1.25rem;
          color: #4b5563;
          font-size: 0.95rem;
        }

        .text-content :global(li) + :global(li) {
          margin-top: 0.3rem;
        }

        /* énfasis */
        .text-content :global(strong) {
          color: #111827;
          font-weight: 600;
        }
        .text-content :global(em) {
          font-style: italic;
          color: #205225;
        }

        /* clases opcionales para jugar dentro de description */
        .text-content :global(.eyebrow) {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.75rem;
          padding: 0.18rem 0.7rem;
          border-radius: 999px;
          background: rgba(32, 82, 37, 0.06);
          border: 1px solid rgba(32, 82, 37, 0.18);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #205225;
        }

        .text-content :global(.kpi-row) {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.2rem;
        }

        .text-content :global(.kpi) {
          padding: 0.8rem 1rem;
          border-radius: 0.9rem;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          min-width: 130px;
        }

        .text-content :global(.kpi-label) {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #6b7280;
        }

        .text-content :global(.kpi-value) {
          font-size: 1.1rem;
          font-weight: 700;
          color: #205225;
          margin-top: 0.12rem;
        }

        .image-content {
          position: relative;
          width: 100%;
          height: 16rem;
          border-radius: 1.1rem;
          overflow: hidden;
          background: #f3f4f6;
        }

        @media (min-width: 640px) {
          .image-content {
            height: 18rem;
          }
        }

        @media (min-width: 768px) {
          .text-content {
            width: 50%;
          }
          .image-content {
            width: 50%;
            height: 22rem;
          }
        }
      `}</style>
    </section>
  )
}
