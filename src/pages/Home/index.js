import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import './style.scss';
class Home extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}
export default Home;
