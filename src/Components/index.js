import {Component} from 'react'
import './index.css'

class SearchHistory extends Component {
  render() {
    const {data, deleted, uniqueId} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = data

    const deleting = id => {
      deleted(uniqueId)
    }
    return (
      <li className="list-style">
        <p className="date">{timeAccessed}</p>
        <div className="sub-list">
          <div className="domain-style">
            <img
              src={logoUrl}
              alt="domain logo"
              className="domain-logo-style"
            />
            <div className="text-div">
              <p>{title}</p>
              <p className="url">{domainUrl}</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              data-testid="delete"
              onClick={deleting}
              className="delete-icon"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default SearchHistory
