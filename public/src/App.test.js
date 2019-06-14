/**
 * @jest-environment jsdom
 */

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotificationsModal from './components/NotificationsModal'
import ChangelogList from "./components/ChangelogList";
import Header from "./components/Header";
import NotificationsList from "./components/NotificationsList"
import NotificationsView from "./components/NotificationView"

configure({ adapter: new Adapter() })

describe("App", () => {
  const wrapper = shallow(<App />)

  test("Changelog List component is there", done => {
    expect(wrapper.containsAnyMatchingElements([<ChangelogList/>])).toBe(true)
    done()
  })

  test("Header component is there", done => {
    expect(wrapper.containsAnyMatchingElements([<Header/>])).toBe(true)
    done()
  })

  describe("client methods", () => {
    const wrapperInstance = wrapper.instance()
    const mockChangelogs = [
      { 
        id: "1",
        title: "Email Update",
        date: "04/01/2019",
        tag: "1",
        body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      { 
        id: "2",
        title: "Big Fix",
        date: "01/02/2019",
        tag: "2",
        body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: "3",
        title: "Another Update",
        date: "10/01/2018",
        tag: "1",
        body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    ];
    
    test('It should load logs into App state', done => {
      wrapperInstance.setState({changelogs: mockChangelogs})
      expect(wrapper.state().changelogs.length).toBe(3);
      done();
    })
  
  })

})




