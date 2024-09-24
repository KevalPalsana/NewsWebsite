import React ,{useState,useEffect}from 'react'
import Cart from './Cart'

const News = ()=> {
    const api_key = "c1d7638b7e5e4cfe950087ab200494a0"
    const [search, setSearch] = useState("india")
    const [newsdata, setNewsdata] = useState(null)

    const getdata= async()=>{
        const response= await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}`)
        const jsondata=await response.json();
        console.log(jsondata.articles);
        setNewsdata(jsondata.articles);
    }
    const handleinput = (e)=>{
        console.log(e.target.value);
        setSearch(e.target.value )
    }
    useEffect(() => {
      getdata();
    }, [])
    
    const userinput=(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <a href="">All News</a>
                </ul>
                <div className="searchbar">
                    <input type="text" placeholder='Search News' value={search} onChange={handleinput}/>
                    <button onClick={getdata}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Upadate with Trendy News</p>
            </div>
            <div className="categorybtn">
                <button onClick={userinput} value='Sports'>Sports</button>
                <button onClick={userinput} value='Politics'>Politics</button>
                <button onClick={userinput} value='Entertainment'>Entertainment</button>
                <button onClick={userinput} value='Health'>Health</button>
                <button onClick={userinput} value='Fitness'>Fitness</button>
            </div>
            <div>
                {newsdata?<Cart data={newsdata}/>:null}
            </div>
        </div>
    )
}

export default News
