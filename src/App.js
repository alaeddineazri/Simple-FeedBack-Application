import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStates from "./components/FeedbackStates";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import NestedRoutes from "./components/NestedRoutes";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header text="Feedback App" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStates />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
            <Route path="/post/:id/:name" element={<Post />} />
            <Route path="/Nested/*" element={<NestedRoutes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
