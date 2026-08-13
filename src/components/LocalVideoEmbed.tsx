import { useState } from 'react';
import { Play } from 'lucide-react';

interface LocalVideoEmbedProps {
  src: string;
  poster: string;
  title: string;
}

const LocalVideoEmbed = ({ src, poster, title }: LocalVideoEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <video
        src={src}
        controls
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="group absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
      aria-label={`Reproducir vídeo: ${title}`}
    >
      {/* Poster */}
      <img
        src={poster}
        alt={title}
        className="h-full w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-300 group-hover:scale-110">
          <Play className="ml-1 h-7 w-7 text-gray-900" fill="currentColor" />
        </div>
      </div>
    </button>
  );
};

export default LocalVideoEmbed;
