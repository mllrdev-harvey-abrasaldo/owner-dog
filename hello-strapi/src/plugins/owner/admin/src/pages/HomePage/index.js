/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import OwnerTable from '../../components/OwnerTable/index.js'
import ownerRequests from '../../api/owner.js';

const HomePage = () => {

  const [ownerData, setOwnerData] = useState([]);
  const fetchData = async () => {
    const owner = await ownerRequests.getAllOwners();
    setOwnerData(owner);
    console.log(owner);
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  return (
    <div>
      List of Owners
      <OwnerTable ownerData={ownerData}></OwnerTable>
    </div>
  );
};

export default HomePage;
