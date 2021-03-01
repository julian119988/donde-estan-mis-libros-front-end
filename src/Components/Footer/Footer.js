import React from 'react'


const Footer = () => {
 
    return (
        <div className="bg-dark text-white text-center px-3 pt-3 mt-5 fixed-bottom">
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <h5>Copyright © 2020 - { new Date().getFullYear() }</h5>
                </div>
                <div className="col-md-4">
                    <h3>GRUPO 4:</h3>
                </div>
                <div className="col-md-4">
                    <div className="row align-items-center">
                       
                        <div className="col justify-content-center text-left">
                            <a href="https://github.com/julian119988" target="blank"><h6><img src="/github.png" alt="github" className="mr-3"/>Julian</h6></a>
                            <a href="https://github.com/antomartini" target="blank"><h6><img src="/github.png" alt="github" className="mr-3"/>Antonella</h6></a>
                            <a href="https://github.com/katerinesosaf" target="blank"><h6><img src="/github.png" alt="github" className="mr-3"/>Katerine</h6></a>
                        </div>
                        <div className="col justify-content-center text-left">
                            <a href="https://github.com/delucagerman" target="blank"><h6><img src="/github.png" alt="github" className="mr-3"/>German</h6></a>
                            <a href="https://github.com/delucagerman" target="blank"><h6><img src="/github.png" alt="github" className="mr-3"/>Gaby</h6></a>
                        </div>
                    </div>
                
                
                    
                   
                </div>
                
            </div>
        </div>
    )
}

export default Footer
