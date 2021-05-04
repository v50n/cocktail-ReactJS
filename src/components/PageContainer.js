import './../css/pageContainer.css';

const PageContainer = () => {
    return(
        <div className="container">
            here the container
            <div className="formSearch">
                <form action="">
                    <label htmlFor="">Search your cocktail</label>
                    <input type="text" placeholder=""/>
                </form>
            </div>

        </div>
    )
}
export default PageContainer;