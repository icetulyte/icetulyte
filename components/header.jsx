import Link from "next/link";

export default function Header() {
    return (
        <header className="ml-8 py-8">
            <h1 className="text-3xl mb-8">Aistė Pilvinytė Wognsen - Frontend developer</h1>
            <nav className="flex flex-row">
                <Link className="pr-8" href="/">About me</Link>
                <Link className="pr-8" href="/blog">Blog</Link>
                <Link className="pr-8" href="/to-do">To-do</Link>
                <Link className="pr-8" href="/books">Books</Link>
                <Link className="pr-8" href="/auth">Auth</Link>
                <Link className="pr-8" href="/auth/login">Log in</Link>
            </nav>
        </header>
    )
}