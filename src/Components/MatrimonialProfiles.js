import React from 'react';

function MatrimonialProfiles() {
  return (
    <div>
      {/* Search Filters */}
      <div className="search-filters">
        <h2>Search Filters</h2>
        <form>
          <label htmlFor="age">Age:</label>
          <select id="age" name="age">
            <option value="">Any</option>
            <option value="18-25">18 - 25</option>
            <option value="26-35">26 - 35</option>
            {/* Add more options */}
          </select>

          {/* Add more filter options */}
          <button className="filter-button">Apply Filters</button>
        </form>


      </div>

      {/* Profile Cards */}
      <div className="featured-profiles">
        <div className="feature-profile">
          <div className="profile-card">
            <img src="profile1.jpg" alt="Profile" />
            <h3>John Doe</h3>
            <p>Age: 28, Location: New York</p>
          </div>
          <div className="profile-card">
            <img src="profile2.jpg" alt="Profile" />
            <h3>Jane Smith</h3>
            <p>Age: 25, Location: Los Angeles</p>
          </div>
          <div className="profile-card">
            <img src="profile2.jpg" alt="Profile" />
            <h3>Jane Smith</h3>
            <p>Age: 25, Location: Los Angeles</p>
          </div>
          {/* Add more profile cards */}
        </div>
      </div>
    </div>
  );
}

export default MatrimonialProfiles;
