import "./App.css";
import { jobs } from "./data.ts";
import { JobPosts } from "./JobPosts.tsx";

function App() {
  return (
    <>
      <JobPosts jobPosts={jobs} />
    </>
  );
}

export default App;
