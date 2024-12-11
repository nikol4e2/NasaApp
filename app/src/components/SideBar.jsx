import React from 'react'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='bgOverlay'></div>
        <div className="sidebarContents">
            <h2>The Brutal Martian Landscape</h2>
            <div>
                <p>Descritption</p>
            </div>
            <button>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}
