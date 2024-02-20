import React, { useState, useEffect } from 'react';
import { TEvent } from '../../types/Events.types';

type Props = {
    loginState: Boolean,
    events: TEvent[],
    setDisplayEvents: any
}

// 
const SearchEvents: React.FC<Props> = ({ loginState, events, setDisplayEvents }) => {
    const [searchField, setSearchField] = useState("");
    const [searchBy, setSearchBy] = useState("Name");

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
        <div>
            <input
                className='input search'
                type="text"
                placeholder="Search Events"
                value={searchField}
                onChange={e => setSearchField(e.target.value)}
            />
            <div>Search By</div>
            <select name='search-options' onChange={e => setSearchBy(e.currentTarget.value)} value={searchBy} >
                <option value="Name">Name</option>
                <option value="EventType">Event Type</option>
            </select>
        </div>
    )
}

export default SearchEvents;