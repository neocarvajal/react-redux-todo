import React from 'react'
import PropTypes from 'prop-types'
import FilterContainer from '../containers/FilterContainer'

const FilterOptions = () => {

  return (
    <div className='filters'>
        <FilterContainer filter='SHOW_ALL'>
            TODAS
        </FilterContainer>
        <FilterContainer filter='SHOW_ACTIVE'>
            ACTIVAS
        </FilterContainer>
        <FilterContainer filter='SHOW_COMPLETED'>
            COMPLETADAS
        </FilterContainer>
    </div>
  );
}

FilterOptions.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default FilterOptions
