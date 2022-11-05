# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Cambios post clase

Ya chiquilles de mi corazón, hice algunos pequeños cambios:

### Componente home.js

Este [componente](./src/components/home.js) realiza la llamada a un método asíncrono que trae los datos desde firestore.

```jsx
const [films, setFilms] = React.useState([]);

React.useEffect(() => {
	try {
		const readData = async (coleccion) => {
			const datos = await getDocs(collection(db, coleccion));
			const arrDocumentos = datos.docs.map((doc) => doc.data());
			setFilms(arrDocumentos);
		};
		readData('films');
	} catch (error) {
		console.error(error);
	}
}, []);
```

Toma nota la función `readData` (que recibe como argumento la colección que queremos consultar, así es más genérica). Esta es llamada pasándole por argumento el nombre de la colección. Así, esta función podría ser movida a otro componente o bien gestionada por React Context, para que sea utilizada desde otros lugares (algo como lo que hicimos con localStorage)

Toma nota también del uso de `useState` y de `useEffect`, que nos permite evitar pasar datos de un componente a otro y evita el renderizado loquillo y frenético.

Luego, el return de este componente es así:

```jsx
return (
	<FilmsList>
		{films.map((f) => (
			<FilmItem id={f.key} name={f.name} category={f.category} />
		))}
	</FilmsList>
);
```

Y este componente es llamado por [App.js](./src/App.js):

```jsx
function App() {
	return (
		<div className='container mb-2'>
			<header>
				<h1>Mis peliculas</h1>
			</header>
			<Home />
		</div>
	);
}
```

Así, queda mucho más limpio.

Además, agregué bootstrap vía CDN en [index.html](./public/index.html) para que se vea mejor.

# Desafíos

Para que esto sea más entretenido, te presento los siguientes desafíos (no son con nota, solo hazlo para que mejores tu uso sobre estas tecnologías y obvio, por joder..).

Clona este proyecto, y haz lo siguiente:

1. Cambia en [firebase.js](./src/firebase.js) los datos de conexión a tu propia instanacia de firestore.
2. Si te fijas, en la consola del browser aparece un warning: `VM3357 react_devtools_backend.js:4026 Warning: Each child in a list should have a unique "key" prop.` Descubre como eliminarlo.
3. Agrega un/os componente/s que te permita agregar nuevas películas a tu BD.
4. Agrega un/os componente/s que te permita editar una película.
5. Agrega un/os componente/s que permita eliminar una película.
