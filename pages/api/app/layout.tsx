import "./output.css";
import Nav from "./nav";

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
        {children}
      </body>
    </html>
  );
}
