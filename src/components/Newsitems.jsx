import React, { Component } from 'react'

export default class Newsitems extends Component {

    render() {
        // let { title } = this.props;
        let { title, description, imgUrl, infoUrl } = this.props;
        let tempDesc = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, nulla ut? Qui suscipit dolorum culpa omnis eum doloribus officia dolor.'
        return (
            <div>

                <div className={`card border border-black ${this.props.mode?'':'bg-blue-200'} relative -z-10`}>
                    <span className='absolute right-0 p-2 bg-yellow-400 rounded-md rounded-l-xl text-xs text-white font-bold tracking-wider'>{this.props.source}</span>
                    <a href="#" className='w-full '>
                        <img className={`h-[215px] w-full object-cover rounded-t-lg ${this.props.mode?'':'bg-white'}`} src={imgUrl===null?'https://upload.wikimedia.org/wikipedia/commons/a/ac/NewTux.png':imgUrl} alt="" />
                    </a>
                    <div className={`p-5 `}>
                        <a href="#">
                            <h5 className="title">{title.slice(0, 45)}...</h5>
                        </a>
                        <p className="description">{description===null?tempDesc:description.slice(0, 139)}...</p>

                        {/* <p>Created by {this.props.author}</p> */}

                        <a target='_blank' href={infoUrl} className="readBtn">
                            Read more
                            
                        </a>
                    </div>

                </div>

                {/* {title} */}
            </div>
        )
    }
}

