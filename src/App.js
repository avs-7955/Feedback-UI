import Header from "./components/Header"


function App() {
    return (
        <>
            <Header />
            {/* Props list - text,bgColor,textColor */}
            <div className='container'>
                <h1>Hello from the app component.</h1>
            </div>
        </>
    )
}

export default App