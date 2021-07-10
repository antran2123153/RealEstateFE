import Gallery from "../components/Gallery";
import Projects from "../components/Projects";

export default function Home(props) {
  let hot = props.projects.filter((project) => project.priority === 2);
  const mostHot = props.projects.find((project) => project.priority === 10);
  hot = [mostHot].concat(hot);
  return (
    <>
      <Gallery projects={hot} />
      <Projects projects={props.projects} local={props.local} />
    </>
  );
}
