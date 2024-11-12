import { useState } from "react";

const useSearchAPI = () => {
    const [results, setResults] = useState ([]);
    const [loading, setLoading] = useState (false);

    const searchProducts = async (query) => {
        setLoading(true);
        try {
            const res = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=${query}')
            const data = await res.json();
            setResults(data.results);
            console.log("hay milanesa")

        }catch (error) {
            console.error("No hay Milanesa", error)
        }finally {
            setLoading(false);
        }
    }

    return {results, loading, searchProducts};

}

export default useSearchAPI;