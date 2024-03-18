import "./App.css";
import { jobs } from "./data.ts";
import { JobPosts } from "./JobPosts.tsx";

function App() {
  // console.log(jobs);

  return (
    <>
      <JobPosts jobPosts={jobs} />
    </>
  );
}

export default App;
