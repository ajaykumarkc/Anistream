import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Global";
import './Popular.scss'
import Sidebar from "./Sidebar";

const PopularPG = ({ rendered }) => {
  const { popularAnimePG, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "popularPG") {
      return popularAnimePG?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} />
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    }
  };

  return (
    <div className='PopularStyled'>
      <div className="popular-anime">{conditionalRender()}</div>
      <Sidebar />
    </div>
  );
};



export default PopularPG;