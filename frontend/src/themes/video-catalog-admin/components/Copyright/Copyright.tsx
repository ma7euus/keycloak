import { Link, Typography } from "@material-ui/core";

const Copyright: React.FunctionComponent = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="right">
            {"© "}
            <Link color="inherit" href="https://material-ui.com/">
                CodeFlix
            </Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
};

export default Copyright;