import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'

const About = () => {

    return (
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>This project was built for practice purposes .</p>

                <a className="btn btn-primary" href="https://github.com/ihssanehatim/ecommerce-reactjs">
                    <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Visit Repo</span></a>
            </div>
        </Layout>
     );
}
export default About;
