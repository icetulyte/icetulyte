import ToDo from './to-do'

export const metadata = {
    title: 'To do',
    openGraph: {
      title: 'To do',
    },
}
export default function ToDoPage() {
    return (
        <div>
            <div>To-to something. What to do, what to do? Ideas?</div>
            <ToDo />
        </div>
    )
}