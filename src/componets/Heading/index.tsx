import styles from './styles.module.css';

type HeadingProps = {
    children: React.ReactNode;
};


export function Heading(props: HeadingProps) {
    return (
        <h1 className={`${styles.heading} ${styles.marrom}`}>{props.children}</h1>
    )
}