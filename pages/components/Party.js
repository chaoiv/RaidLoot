import { CheckCircleIcon, ChevronRightIcon, } from '@heroicons/react/20/solid'
import SelectJob from './SelectJob'
import Database from '../database'
import React from 'react'

export default class Party extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedGamer: this.props.selectedGamer};
    this.onGamerChange = this.props.onGamerChange;
  }

  changeGamer(gamer) {
    this.onGamerChange(gamer);
  }

  onJobChange(gamer, jobId) {
    if (Database.getGamer(gamer).job !== jobId) {
      Database.setGamerJob(gamer, jobId);
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {Database.getGamers().map((partyMember, index) => (
            <li key={index}>
              <a href="#" onClick={() => this.changeGamer(index)} className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="flex-shrink-0"></div>
                    <div className="min-w-0 flex-1 px-4">
                      <div>
                        <p className="truncate text-sm font-medium text-indigo-600">{Database.getJob(partyMember.job).name}</p>
                        <SelectJob roleId={partyMember.role} onJobChange={(jobId) => this.onJobChange(index, jobId)} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
