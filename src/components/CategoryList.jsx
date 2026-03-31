import { useEffect, useState } from "react";
import ScrollButton from "./ScrollButton";

function CategoryList({heading}) {
    const [allCategories, setAllCategories] = useState();
    const fetchAllCategories = async () => {
        try {
            const result = await fetch("",
                {
                    method: "GET"
                }
            );
            if (result.ok) {
                const json = result.json();
            }
        } catch (error) {
            console.error();
        }
    };


    useEffect(
        () => {
            fetchAllCategories();
        }
        , []
    );
    return (
        <div className="category-list-container">
            <h2>{heading}</h2>
            <ScrollButton direction={'left'} />
            <ul>
                {allCategories}
            </ul>
            <ScrollButton direction={'right'} />
        </div>
    )
}
export default CategoryList;