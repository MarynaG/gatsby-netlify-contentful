import React, { Component} from 'react';
import PropTypes from 'prop-types';


class Article extends Component {
    render() {
        const {
            title
        } = this.props.data.contentfulArticle
        return (
            <div>
                <h1>{title}</h1>
                
            </div>
        )
    }
}

Article.propType = {
    data: PropTypes.object.isRequired
}


export default Article

export const pageQuery = graphql`
    query articleQuery($slug: String!) {
        contentfulArticle(slug: {eq: $slug}) {
            title
            slug
        }
    }`