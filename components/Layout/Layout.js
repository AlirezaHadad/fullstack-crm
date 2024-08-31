import Link from "next/link"

const Layout = ({children}) => {
    return(
        <>
            <header className="header">
                <a href="https://github.com/AlirezaHadad" target="_blank" rel="noreferrer">Project FullStack CRM</a>
                <Link href="/add-customer">Add Customer</Link>
            </header>
            <div className="main">
                {children}
            </div>  
            <footer className="footer">
                <a href="https://github.com/AlirezaHadad" target="_blank" rel="noreferrer">Alireza Hadad</a> Project FullStack || CRM &copy;
            </footer>
        </>
    )
}
export default Layout