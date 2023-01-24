import { useEffect, useState } from "react";
import BlogList from './BlogList'


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setBlogs(data)
                setIsPending(false  )
            })
        }, 1000)
       
        
    }, []);
    
    return ( 
        <div className="home">
        {isPending && <div><img src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-13.jpg" alt="" srcset="" /></div>}
          {blogs && <BlogList blogs={blogs} title="All posts" />}


        </div>
    );
}
 
export default Home;