import styles from "../styles/Listing.module.css";
import Link from "next/link";

export default function ListItem({ info }) {
	return (
		<Link href="/details/[name]" as={`details/${info.name}`}>
			<a className={styles.card}>
				<h1>{info.name}</h1>
			</a>
		</Link>
	);
}
