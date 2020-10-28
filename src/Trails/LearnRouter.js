import React, { useContext, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import './css/LearnReactRouter.css'
import { ContextTest } from './ContextTest'

export default function LearnRouter() {
    const [value, setvalue] = useState('initialState')

    return (
        <div className="learnReactRouter">
            <ContextTest.Provider value={{ value, setvalue }}>
                <Router >
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                                <li>
                                    <Link to="/products/1">Products 1</Link>
                                </li>
                                <li>
                                    <Link to="/products/2">Products 2</Link>
                                </li>
                            </ul>
                        </nav>

                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>

                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/users">
                                <Users />
                            </Route>
                            <Route path="/products/:id">
                                <Products />
                            </Route>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="*">
                                <PageNotFound />
                            </Route>

                        </Switch>
                    </div>
                </Router>
            </ContextTest.Provider>


        </div>
    )
}



function Home() {
    const { value, setvalue } = useContext(ContextTest)

    return <h2>Home /{value}</h2>;
}

function About() {
    const { value, setvalue } = useContext(ContextTest)
    return <div>
        <h2>About /{value} </h2>
        <button onClick={() => setvalue("changed")}>change Value</button>
    </div>
}

function Users() {
    const { value, setvalue } = useContext(ContextTest)
    return <h2>Users /{value}</h2>;
}

function Products() {

    let { id } = useParams()
    return <h2>Products {id ? id : 'Product not found'} </h2>;
}

function PageNotFound() {
    return <h2>PageNotFound</h2>;
}