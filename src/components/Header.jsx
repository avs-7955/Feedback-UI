import PropTypes from 'prop-types'

function Header(props) {
    return (
        <header>
            <div className="container">
                <h2>Feedback UI</h2>
                <p>{props.text}</p>
            </div>
        </header>
    )
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header