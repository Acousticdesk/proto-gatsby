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
        мы обсудим детали и я поделюсь со всеми твоими идеями!
      </p>
    </div>

    <div className="content__section">
      <h4 className="content__header">Q: Мне нравится ресурс и его идея! Чем я могу помочь?</h4>
      <p>
        A: Очень приятно! Расскажи о letconst на своей странице в соц. сети!
        Ты даже не представляешь себе насколько ты поможешь этим ресурсу! Спасибо!
      </p>
    </div>

    <div className="content__section">
      <h4 className="content__header">Q: Как я могу быть в курсе обновлений на сайте?</h4>
      <p>
        A: Всей информацией о ресурсе я делюсь в
        {' '}
        <a href="https://twitter.com/letconstportal">Твиттере</a>
        {' '}
        , на
        {' '}
        <a href="https://facebook.com/letconst">Фейсбуке</a>
        {' '}
        , а еще ты можешь подписаться на обновления в
        <a href="https://t.me/letconst">Телеграм канале</a>
        . Кроме того, каждый день я делюсь полезными ссылками на страничках ресурса,
        поэтому присоединяйся к letconst в социальных сетях и получай дозу интересного
        daily feed&apos;a уже сегодня!
      </p>
    </div>
  </Layout>
)
