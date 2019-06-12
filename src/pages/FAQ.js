import React from 'react'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="content__section">
      <h4 className="content__header">Q: Я хочу дополнить историю своими ценными знаниями! Что делать?</h4>
      <p>
        A: Восхитительно! Пожалуйста, напиши мне на почту
        {' '}
        <a href="mailto:letconstportal@gmail.com">letconstportal@gmail.com</a>
        {' '}
        мы обсудим все детали и я поделюсь со всеми нашей наработкой, ведь
        весело провести время и научиться чему-то новому - одни из многих целей ресурса!
      </p>
    </div>

    <div className="content__section">
      <h4 className="content__header">Q: Мне очень нравится ресурс и его идея! Чем я могу помочь?</h4>
      <p>
        A: Очень приятно! Расскажите пожалуйста о нашем ресурсе своим друзьям, знакомым и коллегам.
        Упомяните о letconst на своей страничке в социальных сетях и добавьте ссылку на сайт!
        Чем больше нас - тем большему мы можем научиться друг у друга!
      </p>
    </div>

    <div className="content__section">
      <h4 className="content__header">Q: Как я могу быть в курсе обновлений на сайте?</h4>
      <p>
        A: Всей информацией о ресурсе я делюсь в
        {' '}
        <a href="https://twitter.com/letconstportal">Твиттере</a>
        {' '}
        и на
        {' '}
        <a href="https://facebook.com/letconst">Фейсбуке</a>
        {' '}
        . Кроме того, каждый день я делюсь полезными ссылками на страничках ресурса,
        поэтому присоединяйся к letconst в социальных сетях и получай дозу интересного
        daily feed&apos;a уже сегодня!
      </p>
    </div>
  </Layout>
)
