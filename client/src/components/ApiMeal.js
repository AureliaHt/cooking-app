import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const ApiMeal = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
            .then((res) => setData(res.data.meals));
    }, []);

    return (
        <div className="recipes_container">
                    {data.map((meal) => (
                        <Card key={meal.idMeal} meal={meal}/>
                    ))}
        </div>
    );
};

export default ApiMeal;