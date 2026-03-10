import './globals.css';

export const metadata = {
  title: '蜜月行程 App',
  description: '思淵與夫人的蜜月行程',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}