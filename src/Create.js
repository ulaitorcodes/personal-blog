import { useState } from "react";

const Create = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('el');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog)
    }


    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog body</label>
                <textarea name="" required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>

                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Elijah">Elijah</option>
                </select>
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>



            </form>
        </div>
    )
}

export default Create;