import React from "react";
import { RightOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col flex-1 w-full max-w-4xl p-4 mx-auto space-y-4 overflow-hidden bg-gray-800">
        <div className="flex">
          <ul className="flex flex-col space-y-2">
            <p className="mt-10 mb-4 font-semibold text-yellow-600">Company</p>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Company Philosophy
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Research and Development
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              History
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Technology
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Career
            </li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <p className="mt-10 mb-4 font-semibold text-yellow-600">Products</p>
            <p className="mt-10 mb-4 font-semibold ">CUBE Series</p>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Switches
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Sockets
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Fan Regulators and Dimers
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Communique and Support
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Acoustic and Optical Signaling
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Plug Tops
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Hospitality Modules
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Single Phase Motor Starters
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Cover Plates
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              MCBs
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Wiring Boxes
            </li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <p className="mb-4 font-semibold mt-28 ">Square Series</p>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Switches
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Sockets
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Fan Regulators and Dimers
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Communique and Support
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Acoustic and Optical Signaling
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Hospitality Modules
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Single Phase Motor Starters
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Cover Plates
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              MCBs
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Wiring Boxes
            </li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <p className="mt-10 mb-4 font-semibold text-yellow-600">Features</p>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Thermoset Material Advantage
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Bi-material Frames
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Designer Plates
            </li>
            <li className="text-sm text-gray-500">
              <RightOutlined />
              Sustainability
            </li>

            <p className="mt-10 mb-4 font-semibold text-yellow-600">Contact</p>
            <p className="mt-10 mb-4 font-semibold text-yellow-600">
              Catalogues
            </p>
          </ul>
        </div>
      </div>
      <footer className="flex flex-col flex-1 w-full max-w-4xl p-4 mx-auto space-y-4 overflow-hidden bg-gray-700">
        <p className="text-sm text-gray-500">
          <span>Copyright © 2023</span>{" "}
          <a
            href="https://www.norisys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-main"
          >
            Norisys.
          </a>{" "}
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
