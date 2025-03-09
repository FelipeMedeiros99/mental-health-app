import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Provider>
          <Theme appearance="light">{children}</Theme>
        </Provider>
      </body>
    </html>
  );
}
