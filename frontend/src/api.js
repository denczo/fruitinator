export const fetchPage = async (page) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product data');
    }
    return response.json();
}