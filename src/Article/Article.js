import React from 'react'
import TitleArticle from './TitleArticle'
import ContentArticle from './ContentArticle'

const Article = ({userLogin}) =>  {
  return <div style={{margin: '5px'}}>
    <TitleArticle title='Lorem Ipsum dolor sit amet, consectetur adipiscing elit' />
    <ContentArticle dataLogin={userLogin} >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed posuere mauris felis, at auctor nulla gravida vitae. Curabitur in
          tincidunt lectus. Suspendisse at velit iaculis, rutrum mi ultrices,
          imperdiet velit.
      </p>
   
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed posuere mauris felis, at auctor nulla gravida vitae. Curabitur in
          tincidunt lectus. Suspendisse at velit iaculis, rutrum mi ultrices,
          imperdiet velit.
      </p>
    </ContentArticle>
  </div>
}

export default Article;