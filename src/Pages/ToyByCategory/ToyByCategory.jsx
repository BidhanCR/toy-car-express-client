import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SuperCarToy from "./SuperCarToy";
import MiniFireTruck from "./MiniFireTruck";
import MiniPoliceCar from "./MiniPoliceCar";

const ToyByCategory = () => {
  return (
    <div className="my-16">
    <h3 className="text-3xl text-center mb-8 font-bold">Shop By Category</h3>
      <div className="flex justify-center">
      <Tabs onSelect={(index) => console.log(index)}>
        <TabList className="flex justify-center text-success">
          <Tab>Super Cars</Tab>
          <Tab>Mini Fire Truck</Tab>
          <Tab>Mini police car</Tab>
        </TabList>

        <TabPanel>
          <SuperCarToy></SuperCarToy>
        </TabPanel>
        <TabPanel>
          <MiniFireTruck></MiniFireTruck>
        </TabPanel>
        <TabPanel>
          <MiniPoliceCar></MiniPoliceCar>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default ToyByCategory;
