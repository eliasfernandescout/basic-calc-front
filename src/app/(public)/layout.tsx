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
        <head/>
        <body>
        <h1>Login Basic Calc</h1>
        <hr/>
        {children}
        </body>
        </html>
    )
}
