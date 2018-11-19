import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  renderComments() {
    return this.props.comments.map(comment =>
      <li key={comment}>{comment}</li>
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array
};

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
