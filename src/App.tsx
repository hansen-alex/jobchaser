import { jobs } from "./data.ts";
import { JobPosts } from "./JobPosts.tsx";

function App() {
  return (
    <>
      <JobPosts jobPostsData={jobs} />
    </>
  );
}

export default App;
