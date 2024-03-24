'use client'

import { NextUIProvider } from "@nextui-org/system";
import { StoreProviders } from './storeProvider';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { appWithTranslation } from 'next-i18next'
export interface ProvidersProps {
	children?: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({children, themeProps}: ProvidersProps) {
  const router = useRouter();
  return (
    <StoreProviders>
      <NextUIProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </StoreProviders>
  )
}