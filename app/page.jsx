import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image
        src="/images/me.jpg"
        height={144}
        width={144}
        alt="This is me!"
      />
    </main>
  )
}
