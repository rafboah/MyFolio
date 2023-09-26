import React from "react";

const InfoCard = ({ item, iconClass, titleClass, infoClass, linkClass }) => {

    return (
        <div>
            <div className={iconClass}>
                {
                    item.icon = undefined
                        ?
                        <></>
                        :
                        <i className={item.icon}></i>
                }
            </div>
            <div className={titleClass}>
                <h2>{item.title}</h2>
            </div>
            <div className={infoClass}>
                {
                    item.info = undefined
                        ?
                        <></>
                        :
                        <p>{item.info}</p>
                }
            </div>
            <div className={linkClass}>
                {
                    item.link = undefined
                        ?
                        <></>
                        :
                        item.link
                }
            </div>
        </div>
    );
}

export default InfoCard;