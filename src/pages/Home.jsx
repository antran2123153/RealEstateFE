import Gallery from "../components/Gallery";
import Projects from "../components/Projects";

export default function Home(props) {
  const hot = props.projects.filter((project) => project.state === "hot");
  return (
    <>
      <Gallery projects={hot} />
      <Projects projects={props.projects} local={props.local} />
    </>
  );
}
