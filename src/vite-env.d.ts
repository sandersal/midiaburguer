/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'dotlottie-wc': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src: string;
        autoplay?: boolean;
        loop?: boolean;
        style?: React.CSSProperties;
      },
      HTMLElement
    >;
  }
}

