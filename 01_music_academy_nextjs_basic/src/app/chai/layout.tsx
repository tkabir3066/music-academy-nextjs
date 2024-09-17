export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>It is chai layout</h1>
      {children}
    </>
  );
}
