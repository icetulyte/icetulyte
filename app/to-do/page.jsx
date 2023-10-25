export const metadata = {
    title: 'To do',
    openGraph: {
      title: 'To do',
    },
}
export default function ToDo() {
    return (
        <div>
            <div>To-to something. What to do, what to do? Ideas?</div>
            <ul className="list-disc pl-8 py-4">
                <li>Fetch the data from GoodReads and think of something interesting to show</li>
                <li>Make a little interactive to do with firebase</li>
                <li>Add a cv entries? LinkedIn already does the good job...</li>
                <li>Take a look at Tailwind and what can it do for me?</li>
            </ul>
        </div>
    )
}