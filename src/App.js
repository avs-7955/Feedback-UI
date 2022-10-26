import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"


function App() {
    return (
        <>
            <Header />
            {/* Props list - text,bgColor,textColor */}
            <div className='container'>
                <FeedbackItem />
            </div>
        </>
    )
}

export default App