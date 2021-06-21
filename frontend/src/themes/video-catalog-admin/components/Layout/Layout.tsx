import {Box, Grid} from "@material-ui/core";

export interface LayoutProps {
//loginTitle: string,
    i18nEnabled: boolean,
    locale?: {
        currentLocale: string,
        locales: [
            {
                label: string,
                url: string
            },
        ]
    },
    title: string,
    message: string,
    isAppInitiatedAction: boolean
}

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    return <div>
        <Box paddingTop={"70px"}>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>{props.title}</Grid>
                {props.i18nEnabled && props.locale && <Grid item>idiomas</Grid>}
            </Grid>
        </Box>
    </div>;
}