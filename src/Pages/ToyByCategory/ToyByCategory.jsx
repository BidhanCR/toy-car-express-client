import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SuperCarToy from "./SuperCarToy";
import MiniFireTruck from "./MiniFireTruck";
import MiniPoliceCar from "./MiniPoliceCar";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ToyByCategory = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="my-16 container mx-auto">
    <h3 data-aos="flip-left" className="text-3xl text-center mb-8 font-bold">Shop By Category</h3>
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
