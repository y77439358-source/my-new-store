import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* هذا السطر هو السر، يستدعي تنسيقات Tailwind مباشرة */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}