
export const goToLoginPage = (navigate) => {
    navigate("/");
};

export const goToSignupPage = (navigate) => {
    navigate("/signup");
};

export const goToFeedPage = (navigate) => {
    navigate("/feedpage");
};

export const goToCommentsPage = (navigate, postId) => {
    navigate(`/posts/${postId}`);
};

export const goToNotFoundPage = (navigate) => {
    navigate("*");
};