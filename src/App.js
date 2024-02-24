import {Component} from 'react'
import './App.css'
import SearchHistory from './Components/index'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {searchInput: '', allhistoryList: initialHistoryList, isTrue: false}

  typing = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteButn = id => {
    const {allhistoryList} = this.state
    console.log(id)
    const newDeletedList = allhistoryList.filter(eachVal => eachVal.id !== id)
    this.setState({
      allhistoryList: newDeletedList,
    })
    if (newDeletedList.length === 0) {
      this.setState({
        isTrue: true,
      })
    }
  }

  render() {
    const {allhistoryList} = this.state
    const {searchInput} = this.state
    let {isTrue} = this.state
    const filteredSearch = allhistoryList.filter(eachElement => {
      const tolower = eachElement.title.toLowerCase()
      return tolower.includes(searchInput)
    })
    if (filteredSearch.length === 0) {
      isTrue = true
    }
    return (
      <div className="home">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="logo"
          />
          <div className="searchdiv-sm">
            <div className="search-icon-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              className="input-style"
              placeholder="Search history"
              onChange={this.typing}
            />
          </div>
          <div className="space-div">
            <div className="searchdiv">
              <div className="search-icon-div">
                <img
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                className="input-style"
                placeholder="Search history"
                onChange={this.typing}
              />
            </div>
          </div>
        </div>
        <div className="bottom-part">
          {!isTrue ? (
            <ul className="ul-list">
              {filteredSearch.map(eachItem => (
                <SearchHistory
                  key={eachItem.id}
                  data={eachItem}
                  deleted={this.deleteButn}
                  uniqueId={eachItem.id}
                />
              ))}
            </ul>
          ) : (
            <div className="empty">
              <p className="empty-para">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
