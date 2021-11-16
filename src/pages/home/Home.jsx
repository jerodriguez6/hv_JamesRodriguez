import React from 'react'
import About from '../../components/about/About'
import Banner from '../../components/banner/Banner'
import Work from '../../components/work/Work'
import Form from '../../components/form/Form'
import Footer from '../../components/footer/Footer'
import Services from '../../components/services/Services'

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Work/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Home
