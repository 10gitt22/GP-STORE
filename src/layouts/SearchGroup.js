import React from 'react';
import './SearchGroup.scss'

export default function SearchGroup() {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="search-group">
            <input type="text" className="inp-field" placeholder="Search"/>
            <button id="btn_search">
            <svg className="icon-search" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M508.875 493.792L353.089 338.005C385.447 302.078 405.334 254.709 405.334 202.666C405.333 90.917 314.417 0 202.667 0C90.917 0 0 90.917 0 202.667C0 314.417 90.917 405.334 202.667 405.334C254.71 405.334 302.078 385.447 338.006 353.089L493.792 508.875C495.875 510.958 498.605 512 501.334 512C504.063 512 506.792 510.958 508.876 508.875C513.042 504.708 513.042 497.958 508.875 493.792ZM202.667 384C102.688 384 21.334 302.656 21.334 202.667C21.334 102.678 102.688 21.333 202.667 21.333C302.646 21.333 384 102.677 384 202.667C384 302.657 302.646 384 202.667 384Z"/>
            </svg>
            </button>
        </form>
    )
}
