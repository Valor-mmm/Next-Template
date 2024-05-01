import { NextUIProvider } from '@nextui-org/system';
import { PropsWithChildren } from 'react';

type ProvidersProps = {
  locale: string;
};

export const Providers = ({
  children,
  locale,
}: PropsWithChildren<ProvidersProps>) => {
  return <NextUIProvider locale={locale}>{children}</NextUIProvider>;
};
