import Navbar from "./Navbar";
import { inter } from "./layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="retro">
      <body className={inter.className}>
        <Navbar />
        <Suspence>{children}</Suspence>
      </body>
    </html>
  );
}
