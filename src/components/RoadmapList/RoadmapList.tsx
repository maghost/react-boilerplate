import React from 'react'
import { connect } from 'react-redux'

import { ApplicationState } from '../../store'

import { Roadmap } from '../../store/ducks/roadmaps/types'

// STYLE
import './RoadmapList.scss'

interface Props {
  readonly roadmaps: Roadmap[]
}

interface State {
  readonly selectedRoadmaps: Roadmap[]
}

class RoadmapList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      selectedRoadmaps: []
    }
  }

  private toggleRoadmap = (roadmap: Roadmap) => {
    let index = this.state.selectedRoadmaps.findIndex(rm => rm == roadmap)

    this.setState({
      selectedRoadmaps: index === -1 ? [ ...this.state.selectedRoadmaps, roadmap ]
        : this.state.selectedRoadmaps.filter((_, i) => i !== index)
    })
  }

  render() {
    return (
      <div className="RoadmapList">
        <ul className="RoadmapList__list">
          { this.props.roadmaps.map(roadmap => (
            <li className="RoadmapList__listItem" key={roadmap.id}>
              <label><input type="checkbox" onClick={() => this.toggleRoadmap(roadmap)} /> {roadmap.name}</label>
            </li>
          )) }
        </ul>
        <ul className="RoadmapList__list">
          { this.state.selectedRoadmaps.map((roadmap, id) => (
            <li className="RoadmapList__listItem" key={id}>{roadmap.name}</li>
          )) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  roadmaps: state.roadmaps.data
})

export default connect(mapStateToProps)(RoadmapList)
