import { Component } from "react";
import DescriptionCard from "../DescriptionCard";
import "./index.css";

const detailsList = [
  {
    id: 1,
    displayText: "The brightest star in the night",
    imageUrl:
      "https://media.istockphoto.com/id/480798670/photo/spiral-galaxy-illustration-of-milky-way.jpg?s=612x612&w=0&k=20&c=MLE2w9wM03YDWsk20Sd1-Pz4xdHDMc-8_v4Ar1JhiaQ=",
    detailsText: "Quick and easy stargazing",
  },
  {
    id: 2,
    displayText: "A type of pasta named after a",
    imageUrl:
      "https://img.freepik.com/premium-photo/penne-pasta-with-tomato-bolognese-sauce-black-background-italian-traditional-dish-top-view-close-up_166116-4369.jpg",
    detailsText: "A refreshing celestial sight",
  },
  {
    id: 3,
    displayText: "A spicy pasta dish",
    imageUrl:
      "https://media.istockphoto.com/id/587775952/photo/instant-noodles.jpg?s=612x612&w=0&k=20&c=rtqV-y9SIx0wsDMPH0O4fgbzxPzggDyz1hh8ywbl9zA=",
    detailsText: "A fiery start with a kick",
  },
  {
    id: 4,
    displayText: "A baked pasta recipe",
    imageUrl:
      "https://assets.bonappetit.com/photos/57acf46553e63daf11a4dbdc/16:9/w_2991,h_1682,c_limit/BAKED-ZITI1.jpg",
    detailsText: "A cosmic delight of cheese and",
  },
  {
    id: 5,
    displayText: "A pumpkin shaped celestial",
    imageUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-11/strawberries-2-te-221104-dcb446.jpg",
    detailsText: "Sage, butter, and pumpkin in",
  },
  {
    id: 6,
    displayText: "A garlicky and oily planet",
    imageUrl:
      "https://attic24.typepad.com/.a/6a00e551101c548834026bdecbfe07200c-500wi",
    detailsText: "A classic planet from Naples",
  },
  {
    id: 7,
    displayText: "A planet with mushrooms",
    imageUrl:
      "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2018/09/miso-mushroom-pasta_3x2_jenny-huang_32871.jpg",
    detailsText: "A creamy and tasty planet with",
  },
  {
    id: 8,
    displayText: "A planet with carbon",
    imageUrl:
      "https://i.pinimg.com/1200x/88/36/bb/8836bbe614d2c9f74ada149faa932b57.jpg",
    detailsText: "A luscious and indulgent planet",
  },
];
class Page extends Component {
  state = { list: detailsList, selectedNameOption: "", selectedTypeOption: "" };

  handleOptionChange = (event) => {
    const newOption = event.target.value;
    this.setState({ selectedNameOption: newOption });
  };

  handleTypeChange = (event) => {
    const newOption = event.target.value;
    this.setState({ selectedTypeOption: newOption });
  };

  render() {
    const { list, selectedNameOption, selectedTypeOption } = this.state;
    return (
      <div className="container">
        <h1 className="heading">Sirius</h1>
        <hr className="line" />
        <div className="small-nav">
          <p className="text">Filter results</p>
          <p className="text">{list.length} items</p>
        </div>
        <div className="input-containers">
          <select
            value={selectedNameOption}
            className="selectBox"
            onChange={this.handleOptionChange}
          >
            <option value="" disabled>
              Search by name
            </option>
            <option key="1" value="1">
              1
            </option>
            <option key="2" value="2">
              2
            </option>
          </select>
          <select
            value={selectedTypeOption}
            className="selectBox"
            onChange={this.handleTypeChange}
          >
            <option value="" disabled>
              Search by type
            </option>
            <option key="1" value="1">
              1
            </option>
            <option key="2" value="2">
              2
            </option>
          </select>
        </div>
        <div className="cards-container">
          {list.map((each) => (
            <DescriptionCard key={each.id} each={each} />
          ))}
        </div>
      </div>
    );
  }
}

export default Page;
