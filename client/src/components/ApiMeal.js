import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const ApiMeal = () => {
    const [data, setData] = useState([]);
    const [searchBar, setSearchBar] = useState("");

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchBar)
            .then((res) => setData(res.data.meals));
    }, [searchBar]);

    return (
        <div className="body_container">
            <div className="searchbar_container">
                <input type="text" placeholder="Que recherchez-vous ?" onChange={(e) => setSearchBar(e.target.value)} />
            </div>
            <div className="recipes_container">
                {data && data.slice(0,24).map((meal) => (
                    <Card key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
};

export default ApiMeal;
