import React from 'react';
import {getHeaders} from './utils';

class Bookmark extends React.Component {  

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
    }

    toggle(ev) {
        if (this.props.bookmarkId) {
            console.log('unbookmarked');
            this.unbookmark();
        } else {
            console.log('bookmarked');
            this.bookmark();
        }
    }

    bookmark() {
        // console.log('code to like the post');
        // issue fetch request and then afterwards requery for the post:
        fetch(`/api/bookmarks`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({
                post_id: parseInt(this.props.postId,10)
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.requeryPost();
        });
    }

    unbookmark() {
        // console.log('code to unlike the post');
        // issue fetch request and then afterwards requery for the post:
        fetch(`/api/bookmarks/${this.props.bookmarkId}`, {
            method: "DELETE",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.requeryPost();
        });
    }



    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch"
                className="bookmark" 
                aria-label="Bookmark Button" 
                aria-checked={bookmarkId ? true : false}
                onClick={this.toggle}>
                <i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>                        
            </button>
        ) 
    }
}

export default Bookmark;