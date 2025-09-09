import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavigationTabs from "../../../../components/navigation/NavigationTabs";

export const LANDTAX_TAB_LINKS = [
    {
        to: "",
        label: "RPTAR",
    },
    {
        to: "tax-assessment",
        label: "Tax Assessment",
    },
    {
        to: "payment-records",
        label: "Payment Records",
    },
];

const LandTaxLayout = () => {
    return (
        <Box
            // border={"1px solid red"}
            padding={3}
            height={"100%"}
            boxSizing={"border-box"}
        >
            <Paper
                sx={{
                    // border: "1px solid",
                    borderRadius: "12px",
                    overflow: "hidden",
                }}
            >
                <NavigationTabs links={LANDTAX_TAB_LINKS} />
                <Outlet />
            </Paper>
        </Box>

    );
};

export default LandTaxLayout;
