import './Content.css';

const Content = (ContentName,ContentDescription,imgName) => {

    return (
        <div className={"contentbox-"+imgName} >
            <div className="contentboxtext">
                <h1>{ContentName}</h1>
                <p>{ContentDescription}

                </p>
            </div>
        </div>
    )
}
export { Content };