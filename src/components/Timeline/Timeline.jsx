import React from 'react'
function Timeline({ children }) {
    return (
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-neutral-200 transform md:-translate-x-1/2"></div>
        <div className="space-y-12">{children}</div>
      </div>
    )
  }

export default Timeline