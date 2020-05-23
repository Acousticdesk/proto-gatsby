import React from 'react'
import Layout from '../components/layout/index'

export default () => (
  <Layout>
    <div className="content__section">
      <h2 className="content__header">Welcome to letconst!</h2>

      <p>
        <span role="img" aria-label="sun">
          ☀️
        </span>
        Everyday content!
        <span role="img" aria-label="artist">
          👨🏻‍🎨
        </span>
        Gain coding inspiration and become a superhero developer
        who is able to offer the best solutions for the product
        <span role="img" aria-label="superhero">🦸</span>
        !
      </p>
    </div>

    <div className="content__section">
      <h5 className="content__header">About Me</h5>

      <p>
        My name is Andrii and I like playing music, traveling, spending time with my friends,
        sport and many other things!

        I like discussing the problems I face as a web developer and find different approaches
        of solving them!
      </p>
    </div>

    <div className="content__section">
      <p>
        Let’s get inspired and become superhero developers together!
      </p>
    </div>
  </Layout>
)
