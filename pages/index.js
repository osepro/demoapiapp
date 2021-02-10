import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Listing.module.css";

export default function Home() {
	return (
		<ul className={styles.homedisplay}>
			<li className={styles.card}>
				<Link href="/people">People</Link>
			</li>
			<li className={styles.card}>
				<Link href="/planets">Planets</Link>
			</li>
			<li className={styles.card}>
				<Link href="/species">Specie</Link>
			</li>
		</ul>
	);
}
