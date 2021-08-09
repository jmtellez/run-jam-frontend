import axios from "axios";

export const getQueryParams = (url) => {
    return url
        .slice(1)
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
};

export const setAuthHeader = () => {
    try {
        const params = JSON.parse(localStorage.getItem('params'));
        if (params) {
            axios.defaults.headers.common[
                'Authorization'
            ] = `${params.token_type} ${params.access_token}`;
        }
    }
    catch (err) {
        console.log("Error setting auth", err);
    }
}
