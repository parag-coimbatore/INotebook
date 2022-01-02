import Notes from './Notes';

function Home() {
 
    return (
        <div>
            <div className="container">
                <h1 className="text-center my-3">Add a note</h1>
                {/* form from bootstrap */}
                <form my-3> 
                    <div className="form-group" className="text-center">
                        <h5 htmlFor="exampleInputEmail1" >Email address</h5>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group" className="text-center my-3">
                        <h5 htmlFor="exampleInputPassword1">Password</h5>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                    </div>
                    

                </form>
            </div>

            <Notes/>

        </div>
    )
}

export default Home
