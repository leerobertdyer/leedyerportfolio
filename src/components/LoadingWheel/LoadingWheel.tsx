type PropsDefinition = {
  size?: number;
}

export default function LoadingWheel({ size = 1 }: PropsDefinition) {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div
        className="absolute animate-spin rounded-full border-t-2 border-b-2 border-tinyBlue-base"
        style={{
          height: `${size * 3.5}rem`,
          width: `${size * 3.5}rem`
        }}
      ></div>
      <div
        className="absolute animate-antispin rounded-full border-t-2 border-b-2 border-tinyOrange-base"
        style={{
          height: `${size * 2.5}rem`,
          width: `${size * 2.5}rem`
        }}
      ></div>
      <div
        className="absolute animate-antispin rounded-full border-t-2 border-b-2 border-tinyBlue-base"
        style={{
          height: `${size * 2}rem`,
          width: `${size * 2}rem`
        }}
      ></div>
      <div
        className="absolute animate-spin rounded-full border-t-2 border-b-2 border-tinyOrange-base"
        style={{
          height: `${size * 1.5}rem`,
          width: `${size * 1.5}rem`
        }}
      ></div>
      <div
        className="absolute animate-spin rounded-full border-t-2 border-b-2 border-tinyPink-base"
        style={{
          height: `${size}rem`,
          width: `${size}rem`
        }}
      ></div>
    </div>
  );
}
