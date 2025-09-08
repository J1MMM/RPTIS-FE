import { Tab, Tabs, } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationTabs = ({ links }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e, val) => {
    navigate(links[val]?.to)
  }

  const currentTab = links.findIndex(link =>
    location.pathname.startsWith(link.to)
  );

  console.log(currentTab);


  return (
    <Tabs value={currentTab === -1 ? 0 : currentTab} onChange={handleChange} sx={{ borderBottom: "1px solid #e2e2e2" }} >
      {
        links?.map((obj, index) => (
          <Tab key={obj?.to} sx={{ textTransform: "none", ml: index == 0 ? 3 : 0, }} label={obj?.label} />
        ))
      }
    </Tabs>

  );
};

export default NavigationTabs;
