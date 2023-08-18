import {
  BsFillBellFill,
  BsFillShareFill,
  BsCalendar2EventFill,
} from "react-icons/bs";
import { PiGameControllerFill } from "react-icons/pi";
import { MdPermContactCalendar } from "react-icons/md";
import "./index.css";
import DetailRows from "../DetailRows";
import Recommendations from "../Recommendation";

const starsAndPlanetsList = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    name: "Sirius",
    type: "Star",
  },
  {
    id: 2,
    imageUrl:
      "https://4kwallpapers.com/images/wallpapers/mountain-range-foggy-sunset-orange-sky-landscape-scenery-4480x2520-3614.jpg",
    name: "Venus",
    type: "Planet",
  },
  {
    id: 3,
    imageUrl: "https://pbs.twimg.com/media/D7YRzh9UYAA-fCO.jpg",
    name: "Mars",
    type: "Planet",
  },
  {
    id: 4,
    imageUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/86/368/desktop-wallpaper-random-posted-by-john-thompson-random-aesthetic.jpg",
    name: "Jupiter",
    type: "Planet",
  },
  {
    id: 5,
    imageUrl:
      "https://astrotalk.com/astrology-blog/wp-content/uploads/2023/07/360_F_576940763_NiiuW6PnSxWYnh8wx3xebvDJTQaM9oB5.jpg",
    name: "Saturn",
    type: "Planet",
  },
];

const interestsList = [
  {
    id: 1,
    imageUrl:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    name: "Stellar Mix",
  },
  {
    id: 2,
    imageUrl:
      "https://www.soundguys.com/wp-content/uploads/2022/05/sony-wh-1000xm5-pads.jpg",
    name: "Planetary Mix",
  },
  {
    id: 3,
    imageUrl:
      "https://png.pngtree.com/thumb_back/fw800/background/20230715/pngtree-3d-render-of-vintage-telephone-with-dark-aesthetic-image_3852224.png",
    name: "Celestial Mix",
  },
  {
    id: 4,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/5oY5GZK7PyZumvhydSivoe.jpg",
    name: "Astronomical Mix",
  },
  {
    id: 5,
    imageUrl: "https://i.redd.it/y2ulynhix9w51.jpg",
    name: "Starry Night Mix",
  },
  {
    id: 6,
    imageUrl:
      "https://img.freepik.com/premium-photo/beautiful-young-woman-playing-violin-black-background_382934-3234.jpg",
    name: "Cosmic Symphony",
  },
  {
    id: 7,
    imageUrl:
      "https://w0.peakpx.com/wallpaper/25/549/HD-wallpaper-closed-eyes-girl-is-standing-in-green-leaves-plants-background-nature.jpg",
    name: "Galactic Punk Mix",
  },
  {
    id: 8,
    imageUrl:
      "https://media.istockphoto.com/id/1246158333/photo/beautiful-peonies-frame-in-dark-colors-black-floral-background-festive-flowers-concept-soft.webp?b=1&s=170667a&w=0&k=20&c=18oX6ZivuqCUlg_72bcEzGzK4e0i5bvQ4vmRZwyRK9k=",
    name: "Romantic Stargazing",
  },
];

const SearchPage = () => {
  return (
    <div className="searchPageBackground">
      <div className="leftBar">
        <PiGameControllerFill size={30} className="icon selected" />
        <BsFillShareFill size={15} className=" icon" />
        <MdPermContactCalendar size={15} className="icon" />
        <BsCalendar2EventFill size={15} className="icon" />
      </div>
      <div className="rightBar">
        <div className="topSearchBarism">
          <input type="text" className="inputField" />
          <div className="iconsTopTab">
            <div className="bell">
              <BsFillBellFill />
            </div>
            <img
              src="https://t3.ftcdn.net/jpg/00/38/76/52/360_F_38765268_xqr4c6qlOqxWInAHsAWaMpek2ZIh5DKt.jpg"
              className="avatarism"
              alt="jai"
            />
          </div>
        </div>
        <div className="topSearchBarism">
          <p className="paragraphism">Search for Stars and Planets</p>
          <button type="button" className="clear-button">
            Clear
          </button>
        </div>
        {starsAndPlanetsList.map((each) => (
          <DetailRows each={each} key={each.id} />
        ))}
        <p className="texter">Based on Your Interests</p>
        <div className="goat">
          {interestsList.map((each) => (
            <Recommendations each={each} key={each.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
