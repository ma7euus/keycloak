import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "../../../../reportWebVitals";
import {
    CssBaseline,
    MuiThemeProvider
} from "@material-ui/core";
import {Layout, LayoutProps} from "../../Layout";
import theme from "../../theme";
import LoginForm, {LoginFormProps} from "../../components/LoginForm/LoginForm";

declare const layoutProps: LayoutProps;
declare const pageProps: LoginFormProps;

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Layout {...layoutProps}>
                <LoginForm {...pageProps}></LoginForm>
            </Layout>
            <CssBaseline/>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
