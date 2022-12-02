import "./output.css";
import Nav from "./nav";
import Providers from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="flex flex-col justify-center items-center text-center h-screen min-w-[480px]">
      <head />
      <body className="min-w-[480px] shadow shadow-slate-100 pb-4">
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
