import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hauser Metall',
  description: 'Website der Firma Hauser Metall',
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={'de'}>
      <body>{children}</body>
    </html>
  );
}
