//@ts-nocheck
import '../styles/index.scss';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={nunito.className}>
            <body className="app">
                {children}
                {modal}
            </body>
        </html>
    );
}
