import EmotionRegistry from './emotion';
import { Inter } from 'next/font/google';
import GlobalStyles from './styles/GlobalStyles';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <EmotionRegistry>
          <GlobalStyles />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  );
}