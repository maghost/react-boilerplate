import React from 'react'
import { connect } from 'react-redux'

// STYLE
import './RoadmapList.scss'

const RoadmapList = ( props ) => {
  return (
    <div className="RoadmapList">
      <ul className="RoadmapList__list">
        { props.roadmaps.map((item) => (
          <li className="RoadmapList__listItem" key={item.id}>
            <input type="checkbox" /> {item.roadmap}
          </li>          
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  roadmaps: state.roadmap
})

export default connect(mapStateToProps)(RoadmapList)