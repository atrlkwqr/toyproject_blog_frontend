export const defaults = {
    isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};

export const resolvers = {
    Mutation: {
        logUserIn: (_, { token, id }, { cache }) => {
            localStorage.setItem("token", token);
            localStorage.setItem("id", id);
            cache.writeData({
                data: {
                    isLoggedIn: true,
                },
            });
            return null;
        },
        logUserOut: (_, __, { cache }) => {
            localStorage.removeItem("token");
            cache.writeData({
                data: {
                    isLoggedIn: false,
                },
            });
            window.location.href = "/";
            return null;
        },
    },
};
