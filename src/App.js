import React from "react";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = { images: [] };
  }

  componentDidMount() {
    setTimeout(async () => {
      const response = await unsplash.get(`/search/photos`, {
        params: { query: "pakistan" },
      });
      this.setState({ images: response.data.results });
    }, 100);
  }

  onSubmitForm = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmitForm} />
        Images Found: {this.state.images.length}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
