import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Creates from "./pages/Creates";
import PreviewBlog from "./pages/PreviewBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/blogs" exact>
                        <Blogs />
                    </Route>
                    <Route path="/blogs/:uid">
                        <PreviewBlog />
                    </Route>
                    <Route path="/create">
                        <Creates />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
