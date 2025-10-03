import { Box } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";

function LandingPage() {
    return (
        <Box bgcolor={"#FBFCFD"}>
            <Header />
            <Hero />
            <Services />
            <About />
        </Box>
    );
}

export default LandingPage