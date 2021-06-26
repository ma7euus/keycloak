import {Box, Card, CardHeader, CardContent, Grid, makeStyles} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import LocaleSelect from "./components/LocaleSelect/LocaleSelect";

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        height: '100%',
        paddingTop: '70px'
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
    }
}));

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
                            {children}
                        </CardContent>
                    </Card>
                </Grid>
                {i18nEnabled && locale &&
                <Grid item>
                    <LocaleSelect locales={locale.locales} defaultValue={locale.currentLocale} disableUnderline={true}/>
                </Grid>
                }
            </Grid>
        </Box>
    </div>;
}