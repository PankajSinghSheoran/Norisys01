import React from "react";
import { Image } from "antd";
import Cards from "../../components/cards";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div className="h-full bg-gray-200">
      <div className="flex flex-col flex-1 w-full max-w-4xl p-4 mx-auto space-y-4 overflow-hidden bg-white">
        <div>
          <Header />
        </div>
      </div>
      <div className="flex flex-col w-full max-w-4xl p-4 mx-auto mt-32 overflow-hidden bg-white ">
        <div className="flex justify-around w-full">
          <Cards
            image="https://www.norisys.com/assets/img/allin/homeHi/1.jpg"
            title="Cube Series"
            alt="alt"
            width="500px"
            description="CUBE Series is a modular product range which is designed to satisfy the requirements of electrical installations in modern buildings. The range includes switches, sockets, fan regulators & dimmers, hospitality products, communication sockets, acoustic and optical signaling products, cover plates, etc. Modules such as switches, sockets etc. are made to a standard size (module)..."
          />
          <Cards
            image="https://www.norisys.com/assets/img/allin/square/13.jpg"
            title="Square Series"
            alt="alt"
            width="500px"
            description="SQUARE Series products is a design which has evolved over a period of time. Functional qualities and the mounting system are proven and the technology tested. Classic looks of this range makes it a timeless design. Unique feature of this Series is the mounting system. All modules are mounted on frames using screws. This makes the assembly very sturdy. The modules which..."
          />
        </div>
        <p className="mt-10 mb-4 font-semibold">
          CUBE Series
          <span className="font-normal text-gray-500">
            {" "}
            Multidimentional Combinations
          </span>
        </p>
        <div className="flex justify-around flex-1 w-full max-w-4xl p-4 mx-auto overflow-hidden border-2">
          <Image
            width={800}
            src="https://www.norisys.com/assets/img/indexpage/combination/2.jpg"
          />
        </div>
        <p className="mt-10 mb-4 font-semibold">CUBE Series features</p>
        <div className="flex justify-around w-full">
          <Cards
            image="https://www.norisys.com/assets/img/indexpage/23.jpg"
            title="Special Designer Plate"
            alt="alt"
            width="250px"
            description="
            Norisys special material plates set the standards for stylish design combined with top quality materials: Solid Aluminum, Solid Glass, Solid Wood, Solid Marble finish. The classy design creates an exclusive flair owing to the..."
          />
          <Cards
            image="https://www.norisys.com/assets/img/icons/7.jpg"
            title="Focus on sustainability"
            alt="alt"
            width="250px"
            description="
            It is a constant endeavour at Norisys to design products which are made from environmentally friendly. Reusable plastics are used in making the products as well as in the packaging..."
          />
          <Cards
            image="https://www.norisys.com/assets/img/icons/8.jpg"
            title="Bi-material frames"
            alt="alt"
            width="250px"
            description="The bi-material frames are made of a combination of steel and engineering grade plastic. In this design, the steel structure is embedded into plastic. The steel inside gives the bi-material frame a rigid structure while the plastic..."
          />
          <Cards
            image="https://www.norisys.com/assets/img/indexpage/24.jpg"
            title="Thermoset material"
            alt="alt"
            width="250px"
            description="
            Use of engineering grade thermoset materials in CUBE Series products makes the range extremely strong and sturdy with flame proof qualities. The engineering grade thermoset material used in the products has excellent ..."
          />
        </div>
        <p className="mt-10 mb-4 font-semibold">CUBE Series features</p>
        <div className="flex justify-around flex-1 w-full max-w-4xl p-4 mx-auto overflow-hidden border-2">
          <Image
            width={800}
            src="https://images.pexels.com/photos/13850232/pexels-photo-13850232.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          />
        </div>
        <p className="mt-10 mb-4 font-semibold">Solutions</p>
        <div className="flex justify-around w-full">
          <Cards
            image="https://www.norisys.com/assets/img/icons/13.jpg"
            title="Acoustic Signalling"
            alt="alt"
            width="250px"
            description="
            Products like Speakers for Audio Music, Night Light with Dimming Option, Step Marker Lamps, Prismatic Overdoor Bulkhead Indicator etc. when mounted with modular switches provide the necessary convenience in modern "
          />
          <Cards
            image="https://www.norisys.com/assets/img/icons/14.jpg"
            title="Communication Sockets"
            alt="alt"
            width="250px"
            description="
            Good quality data sockets are a prerequisite at all workplaces because of increasing speeds in data transmission. Norisys communication sockets are available for all types of telephone and data connections. Shutters for dust"
          />
          <Cards
            image="https://www.norisys.com/assets/img/icons/16.jpg"
            title="Hospitality Products"
            alt="alt"
            width="250px"
            description="
            Architecture of modern hotels and hospitals makes the highest demand for design and function of electrical installations. Norisys offers high-end products suited for the hospitality industry. Products like Shaver Sockets, Key Card "
          />
          <Cards
            image="https://www.norisys.com/assets/img/icons/15.jpg"
            title="Superior electrical safety"
            alt="alt"
            width="250px"
            description="
            CUBE Series switches have contacts which provide very high current carrying capacity. The contact design, snap action mechanism, appropriate contact pressure, wiping action between the contacts and use of high "
          />
        </div>
        <p className="mt-10 mb-4 font-semibold">Protection Devices</p>
        <div className="flex justify-around w-full">
          <Cards
            image="https://www.norisys.com/assets/img/allin/homeHi/1.jpg"
            title="Modular MCB"
            alt="alt"
            width="500px"
            description="Tiny MCB is a unique product which was first introduced by Norisys, and which has now become a common household product. It is a modular MCB which can be mounted like a switch. These MCBs are front mounted along with switches, sockets, etc. of CUBE Series or SQUARE Series products. Tiny MCB can also be mounted on sunmica sheets of any existing or new
            more......"
          />
          <Cards
            image="https://www.norisys.com/assets/img/allin/square/13.jpg"
            title="Single Phase Motor Starter"
            alt="alt"
            width="500px"
            description="Single Phase Motor Starter is a device for switching and protection of appliances such as room air-conditioners, refrigerators, washing machines, computers, water coolers, pumps, etc. up to 25 Amperes. In case of any overload, the Single Phase Motor Starter trips, thereby protecting the appliance from any burn-out. These starters are normally mounted with
            more..."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
