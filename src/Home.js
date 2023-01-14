import { useState } from "react";
import BlogList from './BlogList'


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum.....', author: 'Mario',id: 1},
        {title: 'Welcome party', body: 'Lorem ipsum.....', author: 'Yoshi',id: 2},
        {title: 'Web dev top tips', body: 'Lorem ipsum.....', author: 'Mario',id: 3},
        
    ]);
    const categories = ["Business", "Politics", "Education"]
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All posts" categories={categories}/>
        </div>
    );
}
 
export default Home;