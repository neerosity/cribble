import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import './globals.css';

export const metadata = {
  title: 'Cribble',
  description: 'Showcase and discover projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
