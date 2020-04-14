import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setSearchField, getRobots} from '../redux/actions/homeActions'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

const App = () => {
    const [searchField, robots, robotsProgress, robotsError] = useSelector(state => [
        state.home.searchField,
        state.home.robots,
        state.home.getRobotsProgress,
        state.home.getRobotsError
    ])
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRobots())
    }, [])

    const onSearchChange = (e) => dispatch(setSearchField(e.target.value))

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log('render')

    if (robotsProgress) return <h1 className='tc'>Loading</h1>

    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange} />
            <button onClick={() => dispatch(getRobots())}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList items={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    )
}

export default App