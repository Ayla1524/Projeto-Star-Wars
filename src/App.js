import CharacterDetailPages from "./pages/CharacterDetailPages";
import CharacterListPages from "./pages/CharacterListPages";
import React, { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("list");
  const [clickedCharacterUrl, setClickedCharacterUrl] = useState("");

  function goToDetailsPage(url) {
    setCurrentPage("details");
    setClickedCharacterUrl(url);
  }

  function goToListPage() {
    setCurrentPage("list");
  }

  function selectPage() {
    if (currentPage === "list") {
      return <CharacterListPages goToDetailsPage={goToDetailsPage} />;
    } else {
      return (
        <CharacterDetailPages
          goToListPage={goToListPage}
          url={clickedCharacterUrl}
        />
      );
    }
  }

  return <div>{selectPage()}</div>;
};

export default App;
