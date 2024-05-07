import React, { Component } from 'react'
import loader from '../image/loader.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center'>
        <img src={loader} alt="spinner" />
      </div>
    )
  }
}
