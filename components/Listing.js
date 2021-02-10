import ListItem from "./ListItem";
import styles from "../styles/Listing.module.css";

export default function Listing({ data }) {
	return (
		<div className={styles.grid}>
			{data.results.map((info, index) => (
				<ListItem info={info} key={index} />
			))}
		</div>
	);
}
