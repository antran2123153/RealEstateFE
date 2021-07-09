import Gallery from "../components/Gallery";
import Projects from "../components/Projects";
import { sortByPri } from "../untils/functions";

export default function Home(props) {
  const hot = props.projects.sort(sortByPri).slice(0, 5);
  return (
    <>
      <Gallery projects={hot} />
      <Projects projects={props.projects} local={props.local} />
    </>
  );
}
