import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignupPage } from "../pages/SignupPage/SignupPage";
import { FeedPage } from "../pages/FeedPage/FeedPage";
import { CommentsPage } from "../pages/CommentsPage/CommentsPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/feedpage" element={<FeedPage />} />
        <Route path="/posts/:id" element={<CommentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
