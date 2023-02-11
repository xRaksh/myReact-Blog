import Card from './Card'
import Bdata from '../../Blogdata'
import '../Pagstyle/home.css'

const Home = () => {
    return (
        <>
            <main>
                <div className=" section container">
                    <div className="head">
                        <h1>MoonLight</h1>
                        <h2>Health & Lifestyle</h2>
                    </div>
                    <div className="grid grid-fiv-col">
                        {Bdata.map((val, index) => {
                            return (

                                <Card
                                    img={val.img}
                                    title={val.title}
                                />


                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home;