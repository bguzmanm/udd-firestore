import React from "react";
import { collection, getDocs } from "firebase/firestore";

import { FilmsList } from './films_list';
import { FilmItem } from './film_item';
import { db } from "../firebase"

function Home() {

  const [films, setFilms] = React.useState([]);

  React.useEffect(() => {

    try {
      const readData = async (coleccion) => {
        const datos = await getDocs(collection(db, coleccion));
        const arrDocumentos = datos.docs.map(doc => (doc.data()));
        setFilms(arrDocumentos);
      }
      readData("films");
    } catch (error) {
      console.error(error);
    }

  }, []);

  return (
    <FilmsList>
      {
        films.map(f => (
          <FilmItem
            id={f.key}
            name={f.name}
            category={f.category} />
        ))
      }
    </FilmsList>
  )

}

export { Home };