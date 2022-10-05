import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    //el valor del evento onChange está en event.target.value
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  let focus = false;

  const onInputFocus = () => {
    document.getElementById("buscador").style.width = "500px";
    document.getElementById("buscador").placeholder = "Buscar Gifs";
    focus = true;
    document.getElementById("searchIcon").style.animationName =
      "searchIconMove";
  };

  const onInputBlur = () => {
    document.getElementById("buscador").style.width = "50px";
    document.getElementById("buscador").value = "";
    document.getElementById("buscador").placeholder = "";
    focus = false;
    document.getElementById("searchIcon").style.animationName =
      "searchIconMoveBack";
  };

  const onInputMouseOver = () => {
    document.getElementById("buscador").style.width = "500px";
    document.getElementById("buscador").placeholder = "Buscar Gifs";
    document.getElementById("searchIcon").style.animationName =
      "searchIconMove";
  };

  const onInputMouseOut = () => {
    if (!focus) {
      document.getElementById("buscador").style.width = "50px";
      document.getElementById("buscador").value = "";
      document.getElementById("buscador").placeholder = "";
      document.getElementById("searchIcon").style.animationName =
        "searchIconMoveBack";
    }
  };

  return (
    <form onSubmit={onSubmit} id="searchForm">
      <div id="searchGroup">
        <input
          id="buscador"
          type="search"
          value={inputValue}
          onChange={onInputChange}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onMouseOver={onInputMouseOver}
          onMouseOut={onInputMouseOut}
        />
        <span
          className="material-symbols-outlined"
          onMouseOver={onInputMouseOver}
          onMouseOut={onInputMouseOut}
          id="searchIcon"
        >
          search
        </span>
      </div>
    </form>
  );
};
