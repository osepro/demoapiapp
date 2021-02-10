import { apiurl } from "../api/apiurl";
import { useRouter } from "next/router";

const details = ({ people }) => {
	const router = useRouter();
	const { id } = router.query;
	console.log(people);
	return <div>{"text"}</div>;
};

/*export const getServerSideProps = async (context) => {
	const res = await fetch(`${apiurl}people`);
	const people = await res.json();
	console.log("hello");
	return {
		props: {
			people,
		},
	};
};*/

/*export const getStaticPaths = async (context) => {
	const res = await fetch(`${context.url}`);
	const people = await res.json();
	console.log(Object.keys(people));
	const ids = Object.keys(people).map((_, index) => index + 1);
	const path = ids.map((id) => ({ param: { id: id.toString() } }));

	return {
		path,
		fallback: false,
	};
};*/

export default details;
