import React from 'react'
import { connect } from 'react-redux'

import { ApplicationState } from '../../store'

import { Roadmap } from '../../store/ducks/roadmaps/types'

// STYLE
import './RoadmapList.scss'

interface StateProps {
  roadmaps: Roadmap[]
}

type Props = StateProps

const RoadmapList = (props: Props) => (
  <div className="RoadmapList">
    <ul className="RoadmapList__list">
      { props.roadmaps.map(roadmap => (
        <li className="RoadmapList__listItem" key={roadmap.id}>
          <input type="checkbox" /> {roadmap.name}
        </li>
      )) }
    </ul>
  </div>
)

const mapStateToProps = (state: ApplicationState) => ({
  roadmaps: state.roadmaps.data
})

export default connect(mapStateToProps)(RoadmapList)
