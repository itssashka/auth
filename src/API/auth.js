export const regUser = (userData) => {
    return new Promise((resolve, reject) => {
        fetch("url", {
            body: userData,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const loginUser = (userData) => {
    return new Promise((resolve, reject) => {
        fetch("url", {
            body: userData,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const logOut = (userData) => {
    return new Promise((resolve, reject) => {
        fetch("url", {
            body: userData,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

window.fetch = (url, options) => {
    return new Promise((resolve, reject) => {
        const resp = {
            status: 200,
            json: () => Promise.resolve({ data: {} }),
        };

        resolve(resp);
    });
};
