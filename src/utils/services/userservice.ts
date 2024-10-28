export const getFirstAlphabetOfUsername = () => {
    const username = localStorage.getItem('username');
    return username ? username.charAt(0).toUpperCase() : null;
};
