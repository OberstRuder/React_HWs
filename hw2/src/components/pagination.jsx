import React, { useState } from 'react';

  const Pagination = ({ render: Render, max }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (newPage) => {
        if (newPage <=max && newPage > 0)
      setCurrentPage(newPage);
    };
  
    const renderButtons = () => {
      const buttons = [];
      for (let i = 1; i <= max; i++) {
        buttons.push(
          <button key={i} onClick={() => handlePageChange(i)}>
            {i}
          </button>
        );
      }
      return buttons;
    };
  
    return (
      <div>
        <Render page={currentPage} />
        <div>
          <button onClick={() => handlePageChange(1)}>{"<<"}</button>
          <button onClick={() => handlePageChange(currentPage - 1)}>{"<"}</button>
          {renderButtons()}
          <button onClick={() => handlePageChange(currentPage + 1)}>{">"}</button>
          <button onClick={() => handlePageChange(max)}>{">>"}</button>
        </div>
      </div>
    );
  };

  export default Pagination;