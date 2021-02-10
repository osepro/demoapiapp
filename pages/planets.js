import { apiurl } from "./api/apiurl";
import Link from "next/link";
import Listing from "../components/Listing";

export default function Planets({ allplanets }) {
	return (
		<div>
			<h1>Planets Listing</h1>
			<Listing data={allplanets} />
			<Link href="/">Go Back</Link>
		</div>
	);
}

export const getStaticProps = async () => {
	const planets = await fetch(`${apiurl}planets`);
	const allplanets = await planets.json();

	return {
		props: {
			allplanets,
		},
	};
};
