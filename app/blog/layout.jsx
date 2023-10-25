import Header from '../../components/header'
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div>
            <main>
                { children }
            </main>
        </div>
    )
}