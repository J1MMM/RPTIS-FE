import { Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationTabs = ({ links }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (_, val) => navigate(links[val].to);

  // Exact match first
  let currentTab = links.findIndex(link => location.pathname === link.to);

  // If no exact match, fallback to "closest parent"
  if (currentTab === -1) {
    currentTab = links.findIndex(link => location.pathname.startsWith(link.to));
  }

  return (
    <Tabs
      value={currentTab === -1 ? 0 : currentTab}
      onChange={handleChange}
      sx={{ borderBottom: "1px solid #e2e2e2" }}
    >
      {links.map((obj, index) => (
        <Tab
          key={obj.to}
          label={obj.label}
          sx={{ textTransform: "none", ml: index === 0 ? 3 : 0 }}
        />
      ))}
    </Tabs>
  );
};

export default NavigationTabs;
