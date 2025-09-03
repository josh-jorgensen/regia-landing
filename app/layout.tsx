export const metadata = {
  title: "REGIA-UN",
  description: "Retrieval-Enhanced Generation for International Affairs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
