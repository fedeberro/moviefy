interface Props {
  className?: string;
}

export default function Wave({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fill="#DC2626"
        fillOpacity="1"
        d="M0,64L48,53.3C96,43,192,21,288,42.7C384,64,480,128,576,165.3C672,203,768,213,864,181.3C960,149,1056,75,1152,48C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
}
