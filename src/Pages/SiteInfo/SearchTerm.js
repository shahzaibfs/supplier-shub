import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'

function SearchTerm() {
  return (
    <>
      <PageHeader heading={"Search Term"} subtitle="loremIpsum somthigng great" />
      <p className='body-1' style={{ maxWidth: "65ch" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </>
  )
}

export default SearchTerm