export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hello World</span>
      {children}
    </main>
  );
}
