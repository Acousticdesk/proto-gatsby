import React from 'react'
import { path, defaultTo, pipe } from 'ramda'
import { Link } from 'gatsby'
import { Card, Avatar } from 'antd'

import {
  usePosts, getPostPath, getPostTitle,
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
  category => path([category], postIcons),
  defaultTo(improvement),
)

const LibraryGrid = () => {
  const posts = usePosts()

  return (
    <div className="library-grid">
      <div>
        <ul className="library-grid__posts">
          {posts
            .map(post => (
              <Link
                key={post.node.id}
                to={getPostPath('uncategorised', post.node)}
              >
                <Card className="library-grid__card">
                  <Meta
                    avatar={
                      <Avatar src={getPostAvatar('uncategorised')} />
                    }
                    title={getPostTitle(post.node)}
                  />
                </Card>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default LibraryGrid
