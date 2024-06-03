import axios from "axios"

export const getThoughts = async () =>{
    try {
        const dataThoughts = await axios.get('https://64533834c18adbbdfe97bab5.mockapi.io/api/v1/secretLetter')
        const dataRes = dataThoughts.data
        return dataRes;
    } catch (error) {
        console.log(error)
    }
}
export const getThoughtsById = async (id) => {
    try {
        const dataThoughts = await axios.get(`https://64533834c18adbbdfe97bab5.mockapi.io/api/v1/secretLetter/${id}`);
        const dataRes = dataThoughts.data;
        return dataRes;
    } catch (error) {
        console.error(`Error fetching thought with id ${id}:`, error);
        throw error; // Re-throw the error
    }
};
export const postThoughts = async (data) => {
    try {
        const dataThoughts = await axios.post(`https://64533834c18adbbdfe97bab5.mockapi.io/api/v1/secretLetter`,data);
        const dataRes = dataThoughts.data;
        return dataRes;
    } catch (error) {
        console.error(`Error fetching thought with id ${id}:`, error);
        throw error; // Re-throw the error
    }
};