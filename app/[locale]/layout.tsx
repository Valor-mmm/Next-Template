import type { Metadata } from 'next';
import '../globals.css';
import { getTranslations } from 'next-intl/server';
import { Providers } from '@/app/[locale]/providers';
import Navbar from '@/components/navbar/navbar';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
