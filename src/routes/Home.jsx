import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [post, setPost] = useState([]);
    
    const getPost = async () => {
        try {

            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            const data = response.data;
            setPost(data);


        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className='mx-64'>
            <h1 className='uppercase mb-16 font-bold text-2xl text-center'>Últimos Posts</h1>
            {post.length === 0 ? (<p>Carregando...</p>) : (
                post.map((post) => (
                    <div className="flex flex-col mb-8 py-8 border-b border-gray-300" key={post.id}>
                        <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className='bg-white text-gray-600 text-center py-2 cursor-pointer mt-4 rounded-3xl w-32 transition duration-200 ease-in-out transform hover:bg-[#0e1217] hover:text-white hover:border-white hover:border' to={`/posts/${post.id}`}>Ler mais</Link>
                    </div>
                ))
            )}
        </div>
    );
}

export default Home;
