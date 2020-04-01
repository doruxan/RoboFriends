import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [robots, setRobots] = useState([])

    useEffect(() => {
        const fetchRobots = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const robotList = await response.json()
            setRobots(robotList)
        }
        fetchRobots()
    }, [robots])

    const onSearchChange = (e) => setSearchField(e.target.value)

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

    if (!robots.length) return <h1 className='tc'>Loading</h1>

    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange} />
            <Scroll>
                <CardList items={filteredRobots} />
            </Scroll>
        </div>
    )
}

export default App