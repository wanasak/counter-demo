import React from "react";
import { connect, Provider } from "react-redux";

import * as actions from "./src/actions";
import Counter from "./src/Counter";
import store from "./src/store";

const mapStateToProps = state => ({
    count: state.count
});

const CounterContainer = connect(mapStateToProps, actions)(Counter);

const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);

export default App;
