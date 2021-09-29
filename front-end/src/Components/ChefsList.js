import ChefListItem from "./ChefListItem";

const ChefsList = ({ chefs }) => {
	return (
		<section>
			<div className="chefs-list-container">
				{chefs.map((chef) => {
					return <ChefListItem key={chef.id} chef={chef} />;
				})}
			</div>
		</section>
	);
};

export default ChefsList;
