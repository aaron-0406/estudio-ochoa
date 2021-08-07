import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  referencia: React.RefObject<HTMLDivElement>;
}

const NavbarSearch: React.FC<Props> = (props) => {
  const inputSearch = useRef<HTMLInputElement>(null);
  const box_search = useRef<HTMLUListElement>(null);

  const buscador_interno = () => {
    let li: any = [];
    let filter = "";
    if (inputSearch.current) {
      filter = inputSearch.current.value.toUpperCase();
    }
    if (box_search.current) {
      li = box_search.current.getElementsByTagName("li");
    }

    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      let textValue = a.textContent || a.innerText;

      if (textValue.toUpperCase().indexOf(filter) >= 0) {
        li[i].style.display = "";
        if (box_search.current) {
          box_search.current.style.display = "block";
        }

        if (inputSearch.current) {
          if (inputSearch.current.value === "") {
            if (box_search.current) {
              box_search.current.style.display = "none";
            }
          }
        }
      } else {
        li[i].style.display = "none";
      }
    }
  };

  return (
    <div ref={props.referencia} className="navbar-search">
      <div id="ctn-bars-search">
        <input
          ref={inputSearch}
          type="text"
          id="inputSearch"
          placeholder="Qué deseas buscar?"
          onChange={() => {
            buscador_interno();
          }}
        ></input>
      </div>

      <ul ref={box_search} id="box-search" className="list-unstyled">
        <li>
          <Link to="/Servicios">
            <FontAwesomeIcon className="ms-3 me-4" icon={faSearch} color="#C17743" size="lg" />
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon className="ms-3 me-4" icon={faSearch} color="#C17743" size="lg" />
            CSS
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon className="ms-3 me-4" icon={faSearch} color="#C17743" size="lg" />
            JAVASCRIPT
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon className="ms-3 me-4" icon={faSearch} color="#C17743" size="lg" />
            PHP
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon className="ms-3 me-4" icon={faSearch} color="#C17743" size="lg" />
            PYTHON
          </Link>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon className="ms-3 me-4" icon={faSearch} color="#C17743" size="lg" />
            JAVA
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon className="ms-3 me-4" icon={faSearch} color="#C17743" size="lg" />
            AARON
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon className="ms-3 me-4" icon={faSearch} color="#C17743" size="lg" />
            PERU LIBRE
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarSearch;
