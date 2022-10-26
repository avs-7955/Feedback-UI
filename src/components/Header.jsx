import PropTypes from 'prop-types'

function Header(props) {
    return (
        <header>
            <div className='container'>
                <h2>{props.text}</h2>
            </div>
        </header>
    )
}

// Adding proptypes ( for future reference)
Header.propTypes = {
    text: PropTypes.string,
}

Header.defaultProps = {
    text: 'Feedback UI'
}

export default Header