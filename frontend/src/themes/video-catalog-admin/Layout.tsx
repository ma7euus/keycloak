import {Box, Card, CardHeader, CardContent, Grid, makeStyles} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import LocaleSelect from "./components/LocaleSelect/LocaleSelect";
import Copyright from "./components/Copyright/Copyright";
import {Color, Alert} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        height: '100%',
    },
    cardWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        width: 600,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },
    title: {
        color: '#999999',
        textAlign: 'center',
    },
    locale: {
        fontSize: '12px',
        marginTop: theme.spacing(1),
    },
    footer: {
        position: 'fixed',
        bottom: 0,
    }
}));

export interface LayoutProps {
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
    message?: {type: Color, content: string},
    isAppInitiatedAction: boolean
}

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const {i18nEnabled, title, locale, message, children, isAppInitiatedAction} = props;

    const classes = useStyles();

    return <div>
        <Navbar/>
        <Box className={classes.content}>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item className={classes.cardWrapper}>
                    <Card className={classes.card}>
                        <CardHeader className={classes.title} title={title}/>
                        <CardContent>
                            {message &&
                            (message.type !== 'warning' || !isAppInitiatedAction)
                                && (
                                <Alert
                                severity={message.type}
                                variant='filled'
                                elevation={6}>
                                {message.content}
                                </Alert>
                            )}
                            {children}
                        </CardContent>
                    </Card>
                </Grid>
                {i18nEnabled && locale &&
                <Grid item className={classes.locale}>
                    <LocaleSelect locales={locale.locales} defaultValue={locale.currentLocale} disableUnderline={true}/>
                </Grid>
                }
            </Grid>
        </Box>
        <Grid container alignItems="center" justify="center" direction="column" className={classes.footer}>
            <Copyright></Copyright>
        </Grid>
    </div>;
}