
import BlogList from './BlogList'
import useFetch from "./useFetch";


const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs/');
    
    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div><img src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-13.jpg" alt="" srcset="" /></div>}
          {blogs && <BlogList blogs={blogs} title="All posts" />}


        </div>
    );
}
 
export default Home;