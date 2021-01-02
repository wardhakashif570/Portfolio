import React from 'react'
import CopyRight from './CopyRight'

const Footer = () => {
    return (
        <div className="fluid-container py-2 text-center" style={{ backgroundColor: 'black', color: 'white' }}>
            {/* <div className="row ">
                <div className="col-md-3 col-sm-6">
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but
                    still need the element to resemble a link, use a button and change it with appropriate styles.
                </div>
                <div className="col-md-3 col-sm-6">
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but
                    still need the element to resemble a link, use a button and change it with appropriate styles.
                </div>
                <div className="col-md-3 col-sm-6">
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but
                    still need the element to resemble a link, use a button and change it with appropriate styles.
                </div>
                <div className="col-md-3 col-sm-6">
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but
                    still need the element to resemble a link, use a button and change it with appropriate styles.
                </div>
            </div> */}
            <CopyRight></CopyRight>
        </div>
    )
}

export default Footer
