import { apiurl } from "./api/apiurl";
import Link from "next/link";
import Listing from "../components/Listing";

export default function People({ allpeople }) {
	return (
		<div>
			<h1>People Listing</h1>
			<Listing data={allpeople} />
			<Link href="/">Go Back</Link>
		</div>
	);
}

export const getStaticProps = async () => {
	const people = await fetch(`${apiurl}people`);
	const allpeople = await people.json();

	return {
		props: {
			allpeople,
		},
	};
};
