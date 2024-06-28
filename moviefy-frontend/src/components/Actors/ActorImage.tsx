interface Props {
  src: string;
  title: string;
}

export default function ActorImage({ src, title }: Props) {
  const getPosterPath = () => {
    if (src.endsWith("null")) return "/assets/poster_not_found.png";
    return src;
  };

  return (
    <img
      src={getPosterPath()}
      alt={`Imagen de ${title}`}
      className="aspect-[2/3] w-full"
      decoding="async"
    />
  );
}
