import React,{useState} from 'react'


const SearchLocationInput = () => {
    const [query,setQuery] = useState("")

    return(
        <div className="search-location-input">
            <label>Type in your suburb or postcode</label>
            <input type="text" className='form-control' onChange={(event) => setQuery(event.target.value)} 
            placeholder='Search Places ...'
            value={query}
            />
        </div>
    )
}
export default SearchLocationInput;