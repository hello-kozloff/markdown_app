import { PropsWithChildren } from "react";
import "@/styles/stylesheet.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
