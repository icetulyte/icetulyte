import { clsx } from 'clsx'

import styles from './to-do.module.css'

export default function ToDo() {
    return (
        <div className={styles.container}>
            <ul className="pl-8 py-4">
                <li className={clsx({
                    [styles.success]: true,
                })}>Fetch the data from some API and think of something interesting to show</li>
                <li className={clsx({[styles.error]: true})}>Make a little interactive to do with firebase</li>
                <li>Add a cv entries? LinkedIn already does the good job...</li>
                <li>Take a look at Tailwind and what can it do for me?</li>
                <li>CSS modules is a interesting thing to take a look at as well</li>
            </ul>
        </div>
    );
}