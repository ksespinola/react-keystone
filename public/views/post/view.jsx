import React from 'react';
import Container from 'react-container';
import _ from 'lodash';
import {ButtonLink} from 'react-router-bootstrap';

const Post = React.createClass({
  
  render(){
    
    const {
      data,
      } = this.props;
    
    if(!data) return null;
    
    const {
      _id,
      title,
      text,
      } = data.toJS();
    
    return (
      <Container direction='column' component='article'>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: text}}/>
        <ButtonLink to="post.edit" params={{_id}}>Edit Post</ButtonLink>
      </Container>
    )
  }
});

export default Post;

