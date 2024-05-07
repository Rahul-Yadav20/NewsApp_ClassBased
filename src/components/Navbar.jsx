import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    


    render() {
       
       

        return (
            <>
                <nav className={`fixed top-0 w-full h-16 text-white bg-gradient-to-r from-slate-600 to-50% via-red-400 via-100%  flex items-center space-x-4 ps-4 dark justify-between ${this.props.mode ? 'bg-gradient-to-r from-black-600 to-50% via-slate-400 via-100%':''}`}>

                    <ul className="flex  space-x-4 text-xl font-normal ">
                        <Link to="/"><li className='text-2xl font-semibold -mt-1'>NewsMonkey</li></Link>
                        <Link to="/technology"><li className='hover:font-semibold cursor-pointer'>Tech</li></Link>

                        <Link to="/entertainment"><li className='hover:font-semibold 
                        cursor-pointer'>Entertain</li></Link>

                        <Link to="/health"><li className='hover:font-semibold cursor-pointer'>Health</li></Link>

                        <Link to="/sports"><li className='hover:font-semibold cursor-pointer'>Sports</li></Link>
                    </ul>


                    <label className="inline-flex items-center cursor-pointer pr-4">
                        <input type="checkbox" value="" className="sr-only peer" onClick={this.props.toggle}/>
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-xl font-semibold text-white">{this.props.mode ? 'Light':'Dark'}</span>
                    </label>

                </nav>
            </>
        )
    }
}
