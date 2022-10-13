import React from 'react'

function Dashboard({student}) {
  return (
    <section className='section'>
      <h4>Hello,{student?.name}</h4>
    </section>
  )
}

export default Dashboard