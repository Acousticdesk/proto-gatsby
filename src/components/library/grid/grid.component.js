import React from 'react'
import { path, defaultTo, pipe } from 'ramda'
import { Link } from 'gatsby'
import { Card, Avatar } from 'antd'

import {
  getEdgeCategory, usePosts, useCategories, getPostPath, getPostTitle,
} from '../../post/utils'

import svelte from '../../assets/svelte.png'
import react from '../../assets/react.png'
import improvement from '../../assets/improvement.png'

import './styles.css'

const { Meta } = Card

const postIcons = {
  svelte,
  improvement,
  react,
}

const getPostAvatar = pipe(
  category => path([category.slug], postIcons),
  defaultTo(improvement),
)

const LibraryGrid = () => {
  const categories = useCategories()
  const posts = usePosts()

  return (
    <div className="library-grid">
      {categories
        .filter(category => category.name !== 'other')
        .map(category => (
          <div>
            <h5 className="library-grid__heading">{category.name}</h5>
            <ul className="library-grid__posts">
              {posts
                .filter(post => path(['slug'], getEdgeCategory(post)) === category.slug)
                .map(post => (
                  <Link to={getPostPath(getEdgeCategory(post), post.node)}>
                    <Card
                      className="library-grid__card"
                      key={post.node.id}
                    >
                      <Meta
                        avatar={
                          <Avatar src={getPostAvatar(getEdgeCategory(post))} />
                        }
                        title={getPostTitle(post.node)}
                      />
                    </Card>
                  </Link>
                ))
                .slice(0, 5)}
            </ul>
            <Link to={`/category/${category.slug}`}>
              Больше историй с
              {' '}
              {category.name}
            </Link>
          </div>
        ))}
    </div>
  )
}

export default LibraryGrid
