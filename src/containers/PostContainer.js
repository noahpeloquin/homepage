import React, { Component } from 'react';
import { Post } from '../components/Post';

export class PostContainer extends Component {
  render() {
    return (
      // If I were to improve this, I would have a loop over a factory builder for posts. The loop would include a counter variable to place in as ids to give to the post objects.
      <div>
        <div className="post-container">
          <Post className="post" id="0" />
          <Post className="post" id="1" />
          <Post className="post" id="2" />
          <Post className="post" id="3" />
          <Post className="post" id="4" />
        </div>
        <div className="post-container">
          <Post className="post" id="5" />
          <Post className="post" id="6" />
          <Post className="post" id="7" />
          <Post className="post" id="8" />
          <Post className="post" id="9" />
        </div>
      </div>
    );
  }
}
