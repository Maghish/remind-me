import Navbar from "../components/Navbar"

function Home(props) {
    return (
        <>
            <Navbar username={props.username} />
        </>
    )
}

export default Home