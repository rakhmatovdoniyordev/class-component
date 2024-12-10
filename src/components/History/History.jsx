import React, { Component } from "react";
import img1 from "../../assets/history1.png"
import img2 from "../../assets/history2.png"
import img3 from "../../assets/history4.png"

export default class History extends Component {
  render() {
    return (
      <section className="bg-[#14110E] pt-[120px]">
        <div className="container">
          <div className="text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
              <div className="col-span-2 grid grid-cols-4 grid-rows-2 gap-[32px]">
                <img
                  src={img1}
                  alt=""
                  className="w-[400px] h-[302px]  object-cover col-span-2"
                />
                <img
                  src={img3}
                  alt=""
                  className="w-[400px] h-[635px] object-cover col-span-2 row-span-2"
                />
                <img
                  src={img2}
                  alt=""
                  className="w-[400px] h-[302px] object-cover col-span-2"
                />
              </div>
              <div className="flex flex-col justify-center bg-[#1C1814] px-8">
                <h2 className="text-lg text-[#C99E71] mb-2">Our History</h2>
                <h1 className="text-4xl font-bold mb-4">
                  Create a <br /> new story with us
                </h1>
                <p className="text-sm text-[#FFFFFFCC]">
                  Mauris Pharetra Et Imperdiet Placerat. Vestibulum Erismod Nisl
                  Suscipit Ligula Volutpat, A Feugiat Urm Maximus. Cras Massa
                  Nibhtincidunt. Donec Et Nisi Maximus. Est Ex Mattis Nunc
                  Posuere Ut Quam Quis Quam Venen Atis Pharetra. Morbi
                  Vestibulum Sit Telle Miverra Mattis Aliquam Erat Volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
