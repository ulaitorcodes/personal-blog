const Home = () => {

    const handClick = (e) =>{
        console.log('Hello, Ninja', e)
    }
    const handleClickAgain = (name)=>{
        console.log('Hello ', name)
    }

    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handClick}>Click</button>
            <button onClick={() => handleClickAgain('Maria')}>Clickn Again</button>


        </div>
     );
}
 
export default Home;