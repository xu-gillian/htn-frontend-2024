import React, { useState, useEffect } from 'react';
import { TEvent } from '../../types/Events.types';
import "../../assets/css/SearchEvents.css";

type Props = {
    loginState: Boolean,
    events: TEvent[],
    setDisplayEvents: any
}

// search and filter function for the name and event type
// searchField -> user input
// searchBy -> the paramete the user would like to search with
const SearchEvents: React.FC<Props> = ({ loginState, events, setDisplayEvents }) => {
    const [searchField, setSearchField] = useState("");
    const [searchBy, setSearchBy] = useState("Name");

    // update events being displayed each time user changes input in search bar
    useEffect(() => {
        var searchResult = events.filter((event: TEvent) => {
            if (searchBy === 'Name') {
                return (
                    event['name'].toLowerCase().includes(searchField.toLowerCase())
                )
            } else {
                return (
                    event['event_type'].toLowerCase().includes(searchField.toLowerCase().replace(' ', '_'))
                )
            }
        });
        if (!loginState) {
            searchResult = searchResult.filter((ev: TEvent) => ev.permission === "public");
        }
        setDisplayEvents(searchResult);
    }, [searchField, searchBy, events, loginState, setDisplayEvents]);

    return (
        <div className='search-wrapper'>
            <input
                className='input search'
                type="text"
                placeholder="Search Events"
                value={searchField}
                onChange={e => setSearchField(e.target.value)}
            />
            <div className='selectby-text'>Search By</div>
            <select className="input search" name='search-options' onChange={e => setSearchBy(e.currentTarget.value)} value={searchBy} >
                <option value="Name">Name</option>
                <option value="EventType">Event Type</option>
            </select>
        </div>
    )
}

export default SearchEvents;