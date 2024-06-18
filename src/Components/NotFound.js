import { Link } from "react-router-dom"

const NotFound = () =>{
    return(
        <div className="container mb-4">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center">
                <img src="https://th.bing.com/th/id/R.539d54a4aa40d6b3486dfb2c41d87f8d?rik=nI%2fO4htishxnnQ&riu=http%3a%2f%2fwww.smjremit.com%2fimg%2fusr%2ficon-404.png&ehk=DA6j1oxgyS7wBq9GBZ5wAvwd3JzEq2wiBPT9JMyatiY%3d&risl=&pid=ImgRaw&r=0" className="img-fluid mt-5" alt="404 Not Found" />
                <h1 className="mt-4">Oops! Page not found</h1>
                <p className="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className="btn btn-primary mt-4">Go to Home Page</Link>
            </div>
        </div>
    </div>
    )
}

export default NotFound