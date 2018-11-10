import { connect } from 'react-redux';
import ListView from '../components/ListView';

const filterPosts = (posts, category) => {
  if (!category) return posts;
  return posts.filter(post => post.category === category);
};

const sortPosts = posts => posts.sort((a, b) => b.score - a.score);

export const mapStateToProps = (state, ownProps) => ({
  posts: sortPosts(filterPosts(state.reddit.posts, ownProps.category))
});

export default connect(mapStateToProps)(ListView);
