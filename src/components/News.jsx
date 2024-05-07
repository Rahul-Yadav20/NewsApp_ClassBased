import React, { Component } from 'react'
import Newsitems from './Newsitems';
import axios from 'axios';
import Spinner from './Spinner';
// import ''

export default class News extends Component {

    // articles = [];





    constructor() {
        super();

        // const [country, category, key] = this.props;


        this.state = {
            article: [],
            page: 1,
            totalResults: 0,
            loading: false
        }


    }

    componentDidMount = async () => {
        this.props.setProgress(10);
        this.setState({loading: true});
        const response = await axios.get(` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ky}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        this.props.setProgress(100);
        // this.setState()

        this.setState({ article: response.data.articles,page: this.state.page,  totalResults: response.data.totalResults, loading: false });
        
        // console.log(this.state.totalResults);

    }

    handlePrevious = async () => {
        this.props.setProgress(10);
        this.setState({loading: true});
        const response = await axios.get(` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ky}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`);
        this.setState({loading: true});
        this.props.setProgress(100);

        // console.log(response.data.articles);
        this.setState({ article: response.data.articles, page: this.state.page - 1, loading: false });
        
        // console.log(this.state.page);
    }

    handleNext = async () => {
        this.props.setProgress(10);
        this.setState({loading: true});
        const response = await axios.get(` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ky}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
        this.props.setProgress(100);
        // this.setState({loading: true});
        // console.log(response.data.articles);
        this.setState({ article: response.data.articles, page: this.state.page + 1, loading: false });
        
        // console.log(this.state.page);

    }



    render() {
        // let {country, category, key} = this.props;




        return (
            <div className={`${this.props.mode?'dark dark:bg-gray-400':''}`}>
                <h1 className={`text-3xl font-medium text-black text-center mt-20 ${!this.props.mode?'text-black':'text-white'}`}>Top Headlines</h1>
                
                {this.state.loading && <Spinner />}
                <div className='w-[90%] mt-5 mx-auto grid gap-4 xl:grid-cols-3 lg:grid-cols-2 lg:gap-4 md:gap-4 sm:gap-4 md:grid-cols-2 sm:grid-cols-2'>

                    { !this.state.loading && 
                        this.state.article.map((ele) => {
                            return (
                                <div className='flex justify-evenly' key={ele.url}>

                                    <Newsitems mode={this.props.mode} title={ele.title} source={ele.source.name} description={ele.description} imgUrl={ele.urlToImage} infoUrl={ele.url} />


                                </div>
                            )
                        })
                    }

                </div>
                <div className=' w-[85%] lg:w-[90%] mx-auto flex justify-between mb-5'>
                    <button type='button' onClick={this.handlePrevious} className={`btn ${!this.props.mode?'':'bg-white text-black'}`} disabled={!(this.state.page + 2 < (Math.ceil(this.state.totalResults / this.props.pageSize))) ? false : true}>&#8592; Previous</button>


                    <button type='button' onClick={this.handleNext} className={`btn ${!this.props.mode?'':'bg-white text-black'}`} disabled={!(this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize))) ? false : true}>Next &#8594; </button>
                </div>
            </div>

        )
    }
}
