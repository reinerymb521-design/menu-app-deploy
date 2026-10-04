type LoadingScreenProps = {
  text: string;
};

export default function LoadingScreen({ text }: LoadingScreenProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <p className="text-muted-foreground text-lg">{text}</p>
    </div>
  );
}
