import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CreateNewItem from "./CreateNewItem";
import Orders from "./OrdersPage";

export default function AdminPage() {
  const [value, setValue] = React.useState("two");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab value="one" label="Existing Items" />
            <Tab value="two" label="Create New Item" />
            <Tab value="three" label="Orders" />
            <Tab value="four" label="History" />
          </Tabs>
        </Box>
      </div>
      <div>
        {value === "one" ? <></> : value === "two" ? <CreateNewItem/> : value === "three" ? <Orders/> : value === "four" ? <CreateNewItem/>: <></>}
      </div>
    </div>
  );
}
