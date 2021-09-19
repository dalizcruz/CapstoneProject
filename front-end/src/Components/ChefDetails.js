import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ChefCalendar from "./ChefCalendar";
import imageChef from "../Images/bkgnd-lukas-blazek-unsplash.jpg";
import StarRating from "./StarRating";

const ChefDetails = ({ chefs }) => {
	const [chef, setChef] = useState({});
	let { id } = useParams();

	useEffect(() => {
		const fetchSingleChef = async () => {
			try {
				const res = chefs.filter((chef) => chef.id === Number(id));
				setChef(res[0]);
			} catch (err) {
				return err;
			}
		};
		fetchSingleChef();
	}, [id, chefs]);

	return (
		<section className="single-chef">
			<div className="single-chef-images">
				{/* have multiple images for this chef -- map an array? */}
				<img src={imageChef} class="img-fluid rounded-start" alt={chef.name} />
			</div>
			<article className="single-chef-info">
				<h2>{chef.name}</h2>
				<h6>Cuisine(s): {chef.cuisine}</h6>
				<StarRating />
			</article>
			<div className="single-chef-info">
				<article className="info">
					<h3>bio:</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
						explicabo asperiores sequi soluta quae sit tempore delectus corrupti
						recusandae, animi ea ab! Sint, voluptas id? Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Blanditiis sequi odio suscipit ea
						similique nobis.
					</p>
				</article>
				<article className="info">
					<h3>Chef's Availability Calendar</h3>
					<h6>Availability: {chef.availability}</h6>
					<ChefCalendar className="chef-cal" />
				</article>
			</div>

			<div>
				<Link to={`/users/chefs`}>
					<button className="btn-primary" type="button">
						Back
					</button>
				</Link>

				<Link to={`/bookings/new`}>
					<button className="btn-primary">Book</button>
				</Link>
			</div>
		</section>
	);
};

export default ChefDetails;
