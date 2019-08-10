import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.image} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                        </a>
                <div className="metadata">
                    <span className="date">
                        Today at {new Date().toLocaleTimeString()}
                        </span>
                </div>
                <div className="text">
                     {props.text}
                    </div>
                <div className="actions">
                    <a href="/" className="reply">Reply</a>
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;
