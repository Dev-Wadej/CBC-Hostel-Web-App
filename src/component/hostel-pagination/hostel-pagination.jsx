import React from 'react'

const HostelPagination = ({totalPages, gotoPage, currentPage}) => {

  const pages = [];

  for(let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }


  return (
    <ul className='pages-container'>
      {pages.map(page => {
        return (
          <li key={page} className={`page-number ${page === currentPage ? 'active' : ''}`} onClick={() => gotoPage(page)}><a></a></li>
        )
      })}
    </ul>
  )
}

export default HostelPagination