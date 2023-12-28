import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})
export const metadata: Metadata = {
    title: 'Login Page'
}


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {}
        <head />
        <body>
        <h1>Sistema: Ola mundo!</h1>
        <nav>
            <ul>
                <li><Link href={"/login"}>Login</Link></li>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/calc"}>Calcular</Link></li>
            </ul>
        </nav>
        <hr/>
        {children}
        </body>
        </html>
    )
}
