const BlogList = ({blogs, title, categories, handleDelete}) => {
   
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                    {categories.map((category) => (
                    <ul className="categories">
                        <li><a href="=">{category}</a></li>
                    </ul>
            ))}
        
                </div>
            ))}
            
        </div>
    );

}

export default BlogList;