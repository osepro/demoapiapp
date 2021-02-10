import { apiurl } from "../../api/apiurl";
import Link from "next/link";

const details = ({ people }) => {
	return (
		<div>
			{people.results.map((details, index) => (
				<div key={index}>
					<h1>{details.name}</h1>
					<table border="1" padding="2">
						<tbody>
							<tr>
								<td>Birthday</td>
								<td>{details.birth_year}</td>
							</tr>
							<tr>
								<td>Created</td>
								<td>{details.created}</td>
							</tr>
							<tr>
								<td>Edited</td>
								<td>{details.edited}</td>
							</tr>
							<tr>
								<td>Eye Color</td>
								<td>{details.eye_color}</td>
							</tr>
							<tr>
								<td>Films</td>
								<td>{details.films}</td>
							</tr>
							<tr>
								<td>Gender</td>
								<td>{details.gender}</td>
							</tr>
							<tr>
								<td>Hair Color</td>
								<td>{details.hair_color}</td>
							</tr>
							<tr>
								<td>Height</td>
								<td>{details.height}</td>
							</tr>
							<tr>
								<td>Home World</td>
								<td>{details.homeworld}</td>
							</tr>
							<tr>
								<td>Mass</td>
								<td>{details.mass}</td>
							</tr>
							<tr>
								<td>Skin Color</td>
								<td>{details.skin_color}</td>
							</tr>
							<tr>
								<td>Species</td>
								<td>{details.species}</td>
							</tr>
							<tr>
								<td>Starships</td>
								<td>{details.starships}</td>
							</tr>
							<tr>
								<td>Url</td>
								<td>{details.url}</td>
							</tr>
							<tr>
								<td>Vehicles</td>
								<td>{details.vehicles}</td>
							</tr>
						</tbody>
					</table>
					<Link href="/people">Go Back</Link>
				</div>
			))}
		</div>
	);
};

export const getStaticProps = async (context) => {
	const res = await fetch(`${apiurl}people/?search=${context.params.name}`);
	const people = await res.json();

	return {
		props: {
			people,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`${apiurl}people/`);
	const people = await res.json();

	const names = people.results.map((person) => person.name);

	const paths = names.map((name) => ({ params: { name } }));

	return {
		paths,
		fallback: false,
	};
};

export default details;
