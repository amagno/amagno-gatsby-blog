import React from 'react'



const Post = ({ title, date, content, end }) => (
  <div className={`${!end ? 'bb' : ''} pv3 b--black-10 ph3 ph0-l`}>
    <div className="flex flex-column flex-row-ns">
      <div className="w-100 pr3-ns order-2 order-1-ns">
        <div className="flex flex-row items-center justify-between">
          <h1 className="f3 athelas lh-title orange">
            {title}
          </h1>
          <time className="f6 db gray">{date}</time>
        </div>

        <p className="f5 f4-l lh-copy athelas">
          {content}
        </p>
      </div>
      {/* <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
        <img src="http://mrmrs.github.io/photos/warehouse.jpg" className="db" alt="Photo of a warehouse with stacked shelves." />
      </div> */}
    </div>
    {/* <p className="f6 lh-copy gray mv0">By <span className="ttu">Imelda Clancy</span></p> */}
  </div>
)

export default Post