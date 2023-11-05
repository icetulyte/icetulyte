import Link from 'next/link'
import Layout from '../../components/layout'

export const metadata = {
    title: 'Blog',
    openGraph: {
      title: 'Blog',
    },
}

export default function Index() {
    return (
        <Layout>
            <h1>My blog is here</h1>
            <h2>
                <Link href="/"> Back to home</Link>
            </h2>
        </Layout>
    )
}