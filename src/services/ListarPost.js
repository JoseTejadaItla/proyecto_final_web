import React, {useState, useEffect} from 'react'
import  db  from "../database/firebase";
import fotocard from '../img/market_img.png'
import {collection,getDocs,doc} from "firebase/firestore";

const ListarPost = ()=>{

	const [post, setPost] = useState([]);
	const postCollection = collection(db, "post");


	useEffect(() => {
		const getPost = async () => {
			const data = await getDocs(postCollection);
			setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getPost();
	}, []);

	return(
		<div className="container">
		<div className="alert alert-dark" role="alert">
<h2>Post</h2>
</div>
		<div className="row" > {post.map((post) => {
			return (
            <div className="col-sm-4" key={post.id}> 
			<div className="card" >
			<img className="" src={fotocard} />
			<div className="card-body">
			<h4 className="card-title">{post.Titulo}</h4>
			<p className="card-text">{post.Contenido}</p>
			<h5 className="card-text" >Autor:</h5>{post.Autor}
			</div>
			</div>
			</div>
				);
		})}
		 </div>
		 </div>

		);


	}

	export default ListarPost;

