import Directory from "../../components/directory/directory.component.jsx";
import { categories } from "../../data.js";
import "../../categories.styles.scss";

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
