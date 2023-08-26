import React, { FC } from 'react'
import Header from '../Header'
import ScrollBar from 'react-perfect-scrollbar'
import clsx from 'clsx'
import Footer from '../Footer'


interface IProps {
    children: React.ReactNode
}
const Layout: FC<IProps> = ({ children }) => {
    return (
        <>
            {/* SEO HERE */}
            <Header />
            <main className={clsx("h-full flex-auto")}>
                <ScrollBar>
                    {children}
                </ScrollBar>
            </main>
            <Footer />
        </>
    )
}

export default Layout