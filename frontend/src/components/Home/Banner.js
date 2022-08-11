import React from 'react'
import agent from '../../agent'
import logo from '../../imgs/logo.png'

const Banner = props => {
  const [search, setSearch] = React.useState('')
  function handleChange (v) {
    agent.Items.filterByTitle(v).then(res => {
      setSearch(res.items)
    })
  }

  React.useEffect(() => {
    props.onSearch(search)
  }, [search])

  const optimizedFn = React.useCallback(debounce(handleChange), [])
  return (
    <div className='banner text-white'>
      <div className='container p-4 text-center w-'>
        <img src={logo} alt='banner' />
        <div>
          <span id='get-part'>A place to get</span>
          <div className='search-container'>
            <input
              type='text'
              id='search-box'
              placeholder='What is it that you truly desire?'
              onChange={e => optimizedFn(e.target.value)}
            />
            <i class='bi bi-search'></i>
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  )
}

const debounce = func => {
  let timer
  return function (...args) {
    const context = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      func.apply(context, args)
    }, 500)
  }
}

export default Banner
