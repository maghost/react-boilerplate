import React from 'react'
import { connect } from 'react-redux'

// STYLE
import './RoadmapList.scss'

interface Item {
  id: number,
  roadmap: string
}

interface Props {
  roadmaps: Array<Item>
}

interface State {
  roadmap: Array<Item>
}

const RoadmapList = ( props: Props ) => {
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

const mapStateToProps = (state: State) => ({
  roadmaps: state.roadmap
})

export default connect(mapStateToProps)(RoadmapList)
