const BlogList = ({blogs, title, categories}) => {
    // const blogs = props.blogs
    // const title = props.title
    // const categories = props.categories

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    {categories.map((category) => (
                    <ul>
                        <li>{category}</li>
                    </ul>
            ))}
        
                </div>
            ))}
            
        </div>
    );

}

export default BlogList;