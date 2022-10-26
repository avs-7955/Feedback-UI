import { useState } from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import feedbackData from './data/Feedback'


function App() {
    const [feedback, setFeedback] = useState(feedbackData)

    return (
        <>
            <Header />
            {/* Props list - text,bgColor,textColor */}
            <div className='container'>
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}

export default App