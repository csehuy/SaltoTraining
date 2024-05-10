import { useState, useRef } from "react"

function Search() {
    const [find, setFind] = useState('')
    const searchFruit = useRef([])

    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
    ];

    console.log(searchFruit);

    function handleSearch(text) {
        const searchText = text.target.value;
        setFind(searchText)

        searchFruit.current = list.filter((fruit) => fruit.toLowerCase().includes(searchText.toLowerCase()));
    }

    return (
        <>
            <input
                value={find}
                onChange={handleSearch}
                placeholder="Search..."
            />
            <ul>
                {(searchFruit.current.length > 0 ? searchFruit.current : list).map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </>
    )
}

export default Search
