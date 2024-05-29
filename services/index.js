import axios from "axios";

export const getToken = async () => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api-token/`, {
        "username": process.env.NEXT_PUBLIC_USERNAME,
        "password": process.env.NEXT_PUBLIC_PASSWORD
    });

    return data?.response?.apiToken;
}


export const getCategoriesAndTags = async (apiToken) => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/general/cms-articles/categories-and-tags/`,
        {
            headers: {
                apiToken
            }
        });

    return data?.response;
}

export const fetchArticles = async (apiToken, payload) => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/general/cms-articles/`, payload,
        {
            headers: {
                apiToken
            }
        });

    return data;
}

export const fetchArticle = async (apiToken, payload, id) => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/general/cms-articles/articles/${id}/`, payload,
        {
            headers: {
                apiToken
            }
        });

    return data;
}

export const formatCurrency = (number, currency = 'EUR') => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(number);
  }
  