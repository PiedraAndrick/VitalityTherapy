type EmbeddedMapProps = {
  /** URL del mapa embebido (Google Maps, OpenStreetMap, etc.) */
  src: string;
  className?: string;
};

export function EmbeddedMap({ src, className }: EmbeddedMapProps) {
  return (
    <div
      className={`h-48 md:h-56 rounded-xl overflow-hidden ${className ?? ""}`}
    >
      <iframe
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
