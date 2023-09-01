import React from 'react';
import { connect } from 'react-redux';
import { fetchQuote, updateQuote } from '../actions/quoteActions';


class QuoteMachine extends React.Component {
    componentDidMount() {
        this.props.fetchQuote()
    }

    render() {
        const { quoteText, author } = this.props
        if (!quoteText) {
            return <div>Loading...</div>;
            }

      return (
        <div id="quote-box">
      <h1>Random Quote Machine</h1>
        <div className="quote-container">
        <blockquote className="quote" id="text">
            {quoteText} 
        </blockquote>
        <cite id="author">
            - {author}
        </cite>

        <div className="button-container">
        <a id="tweet-quote" href="https://twitter.com/intent/tweet">
  <i className="bi bi-twitter"></i>
</a>
<a href="#">
  <i className="bi bi-facebook"></i>
</a>


            <span><button id="new-quote" onClick={this.props.fetchQuote}>New quote</button></span>
        </div>
    </div>
    <p id="copyright">by Ivana</p>
    </div>
      );
    }
  }

const mapStateToProps = (state) => {
    //console.log(state)
    return {quoteText: state.quoteText,
    author: state.author}
}

const mapDispatchToProps = {
    fetchQuote
}

  export default connect(mapStateToProps, mapDispatchToProps)(QuoteMachine)