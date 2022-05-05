const Card = ({ meal }) => {
    return (
            <div className="card_infos">
                <h2>{meal.strMeal}</h2>
                <p> Origine : {meal.strArea}</p>
                <img src={meal.strMealThumb} alt={"photo " + meal.strMeal}/>
                <p>{meal.strInstructions}</p>
            </div>
    );
};

export default Card;